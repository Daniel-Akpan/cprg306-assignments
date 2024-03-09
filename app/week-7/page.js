"use client"; 
import React, { useState } from "react";
import FetchMealIdeas from "./meal-ideas"; 
import ItemList from "./item-list"; 
import NewItem from "./new-item"; 
import itemsData from "./items.json"; 

export default function Page() {
  const [items, setItems] = useState(itemsData); 
  const [selectedItemName, setSelectedItemName] = useState(""); 
  const [showMealIdeas, setShowMealIdeas] = useState(false); 

  
  const handleAddItem = (newItem) => {
    setItems((currentItems) => {
      const existingItemIndex = currentItems.findIndex(
        (item) =>
          item.name === newItem.name && item.category === newItem.category
      );

      if (existingItemIndex !== -1) {
        // Update quantity of the existing item
        return currentItems.map((item, index) => {
          if (index === existingItemIndex) {
            return { ...item, quantity: item.quantity + newItem.quantity };
          }
          return item;
        });
      } else {
        // Add new item
        return [...currentItems, newItem];
      }
    });
  };

  // Event handler for selecting an item
  const handleItemSelect = (itemName) => {
    let cleanedName;
    if (typeof itemName === "string") {
      console.log("Item name before cleaning:", itemName); // Log the item name before cleaning

      // Clean the item name
      cleanedName = itemName
        .trim()
        .replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g, "");
    } else if (typeof itemName === "object") {
      console.log("Item name before cleaning:", itemName.name); // Log the item name before cleaning

      // Clean the item name
      cleanedName = itemName.name
        .trim()
        .replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g, "");
    }
    setSelectedItemName(cleanedName);
    setShowMealIdeas(true); // Set state to show meal ideas
  };

  return (
    <main className="bg-slate">
      <h1 className="text-3xl font-bold mb-4 text-center">
        Shopping List
      </h1>
      <NewItem onAddItem={handleAddItem} />

      {/* Flex container for both the item list and meal ideas */}
      <div className="flex mt-4">

        {/* Item List without extra margin */}
        <div className="w-1/4">
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>

        {/* Meal Ideas, displayed only if showMealIdeas is true */}
        {showMealIdeas && (
          <div className="w-1/5">
            <FetchMealIdeas ingredient={selectedItemName} />
          </div>
        )}
      </div>
    </main>
  );
}