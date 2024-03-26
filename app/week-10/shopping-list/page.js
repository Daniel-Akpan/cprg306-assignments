"use client";
import React, { useState, useEffect } from "react";
import FetchMealIdeas from "./meal-ideas";
import ItemList from "./item-list";
import NewItem from "./new-item";
import { useUserAuth } from '../_utils/auth-context.js'; 
import { getItems, addItem } from '../_services/shopping-list-service.js';

export default function Page() {
  const { user } = useUserAuth(); // Get user authentication status
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");
  const [showMealIdeas, setShowMealIdeas] = useState(false);

  // Function to load items for the current user
  const loadItems = async () => {
    if (user) {
      try {
        const userItems = await getItems(user.uid);
        setItems(userItems);
      } catch (error) {
        console.error('Error loading items:', error);
      }
    }
  };

  useEffect(() => {
    loadItems();
  }, [user]); // Dependency array ensures loadItems is called when user changes

  // Function to handle adding an item to the shopping list
  const handleAddItem = async (newItem) => {
    try {
      const newItemId = await addItem(user.uid, newItem);
      setItems(prevItems => [...prevItems, { id: newItemId, ...newItem }]);
    } catch (error) {
      console.error('Error adding item:', error);
    }
  };

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
      {user ? 
      <> 
        <h1 className="text-3xl font-bold mb-4 text-center">
          Shopping List
        </h1>
        <NewItem onAddItem={handleAddItem} />
        <div className="flex mt-4">
          <div className="w-1/4">
            <ItemList items={items} onItemSelect={handleItemSelect} />
          </div>
          {showMealIdeas && (
            <div className="w-1/5">
              <FetchMealIdeas ingredient={selectedItemName} />
            </div>
          )}
        </div>
      </>
      :
      <>
        <div>Redirecting you to week 10!</div>
      </>
      }
    </main>
  );
}
