import React, { useState } from "react";
import Item from "./item";

const ItemList = ({ items, onItemSelect }) => {
  // Initialize state variable for sorting
  const [sortBy, setSortBy] = useState("name");

  const renderGroupedItems = (groupedItems) => {
    return Object.keys(groupedItems).map((category) => (
      <div key={category}>
        <h3>{category}</h3>
        <ul>
          {groupedItems[category].map((item) => (
            // Pass onItemSelect prop to the Item component
            <Item key={item.id} {...item} onSelect={onItemSelect} />
          ))}
        </ul>
      </div>
    ));
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

      {sortBy === "group" ? (
        renderGroupedItems(groupByCategory([...items])) // Pass a copy of items
      ) : (
        <ul className="list-none ml-1 mt-0 inline-block">
          {[...items] // Pass a copy of items
            .sort((a, b) => {
              if (sortBy === "name") {
                return a.name.localeCompare(b.name);
              } else if (sortBy === "category") {
                return a.category.localeCompare(b.category);
              } else {
                return 0;
              }
            })
            .map((item) => (
              // Pass onItemSelect prop to the Item component
              <Item key={item.id} {...item} onSelect={onItemSelect} />
            ))}
        </ul>
      )}
    </div>
  );
};

export default ItemList;
