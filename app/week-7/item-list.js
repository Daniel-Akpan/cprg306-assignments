import React, {useState} from "react";
import Item from "./item";


export default function ItemList({ items, onItemSelect }) {
  const [sortBy, setSortBy] = useState("name");

  const groupByCategory = (items) => {
    return items.reduce((groups, item) => {
      const { category } = item;
      if (!groups[category]) {
        groups[category] = [];
      }
      groups[category] = [...groups[category], item];
      return groups;
    }, {});
  };

  const sortItems = (items, sortBy) => {
    switch (sortBy) {
      case "name":
        return [...items].sort((a, b) => a.name.localeCompare(b.name));
      case "category":
        return [...items].sort((a, b) => a.category.localeCompare(b.category));
      default:
        return items;
    }
  };

  const sortedOrGroupedItems =
    sortBy === "groupedCategory"
      ? groupByCategory(sortItems([...items], "name"))
      : sortItems([...items], sortBy);

  const renderItems = () => {
    if (sortBy === "groupedCategory") {
      return Object.entries(sortedOrGroupedItems).map(
        ([category, items], index) => (
          <div key={index} className="category-group mb-4">
            <h3 className="capitalize font-bold text-white bg-gray-800 p-2 rounded">
              {category}
            </h3>
            <ul className="flex flex-wrap justify-start gap-2">
              {items.map((item, itemIndex) => (
                <Item 
                  key={item.id ? item.id : `item-${itemIndex}`} 
                  {...item} 
                  onSelect={() => onItemSelect(item)} 
                />
              ))}
            </ul>
          </div>
        )
      );
    } else {
      return (
        <ul className="list-none ml-1 mt-0 inline-block">
          {sortedOrGroupedItems.map((item, index) => (
            <Item
              key={item.id ? item.id : index}
              {...item}
              onSelect={() => onItemSelect(item)} // Trigger the onItemSelect function when an item is clicked
            />
          ))}
        </ul>
      );
    }
  };

  return (
    <div>
      <div>
      <button
          className="mb-2 p-1 m-2 w-25"
          onClick={() => setSortBy("name")}
          style={{ backgroundColor: sortBy === "name" ? "lightblue" : "white" }}
        >
          Sort by Name
        </button>
        <button
          className="mb-2 p-1 m-2 w-25"
          onClick={() => setSortBy("category")}
          style={{
            backgroundColor: sortBy === "category" ? "lightblue" : "white",
          }}
        >
          Sort by Category
        </button>
      </div>
      {renderItems()}
    </div>
  );
}