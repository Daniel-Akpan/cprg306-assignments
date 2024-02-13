"use client";
import React, { useState } from "react";
import Item from "./item";
import itemsData from "./items.json";

const ItemList = () => {
  // Initialize items state using the useState hook
  const [items, setItems] = useState(itemsData);

  // Initialize state variable sortBy and its setter function setSortBy
  const [sortBy, setSortBy] = useState("name");

  const groupByCategory = () => {
    const grouped = items.reduce((acc, item) => {
      (acc[item.category] = acc[item.category] || []).push(item);
      return acc;
    }, {});

    // Sort categories and items within each category
    const sorted = Object.keys(grouped)
      .sort()
      .reduce((acc, key) => {
        acc[key] = grouped[key].sort((a, b) => a.name.localeCompare(b.name));
        return acc;
      }, {});

    return sorted;
  };

  const renderGroupedItems = (groupedItems) => {
    return Object.keys(groupedItems).map((category) => (
      <div key={category}>
        <h3>{category}</h3>
        <ul>
          {groupedItems[category].map((item) => (
            <Item key={item.id} {...item} />
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
        <button
          className="mb-2 p-1 m-2 w-25"
          onClick={() => setSortBy("group")}
          style={{ backgroundColor: sortBy === "group" ? "lightblue" : "white" }}
        >
          Group by Category
        </button>
      </div>

      {sortBy === "group" ? (
        renderGroupedItems(groupByCategory())
      ) : (
        <ul>
          {items
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
              <Item key={item.id} {...item} />
            ))}
        </ul>
      )}
    </div>
  );
};

export default ItemList;
