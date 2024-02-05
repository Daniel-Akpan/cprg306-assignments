"use client";
import React, { useState } from "react";

const NewItem = () => {
  //Initial state variables
  //initial value of the name is empty
  const [name, setName] = useState("");
  //initial value of the quantity is 1
  const [quantity, setQuantity] = useState(1);
  //initial value of category is produce
  const [category, setCategory] = useState("produce");

  //form submission handler
  function handleSubmit(event) {
    // Prevent the form's default submission behavior
    event.preventDefault();

    // Create an item object with the current values of name, quantity, and category
    const item = {
      name,
      quantity,
      category,
    };

    // Log the item object to the console
    console.log(item);

    // Display an alert with the current state of name, quantity, and category
    alert(`Name: ${name}\nQuantity: ${quantity}\nCategory: ${category}`);

    // Reset the state variables to their initial values
    setName("");
    setQuantity(1);
    setCategory("produce");
  }

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Add Your New Item</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-600"
          >
           Item Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        <div>
          <label
            htmlFor="quantity"
            className="block text-sm font-medium text-gray-600"
          >
            Quantity
          </label>
          <input
            type="number"
            id="quantity"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            required
            min="1"
            max="99"
            className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        <div>
          <label
            htmlFor="category"
            className="block text-sm font-medium text-gray-600"
          >
            Category
          </label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:ring focus:border-blue-300"
          >
            <option value="produce">Produce</option>
            <option value="dairy">Dairy</option>
            <option value="bakery">Bakery</option>
            <option value="meat">Meat</option>
            <option value="frozen">Frozen Foods</option>
            <option value="canned">Canned Goods</option>
            <option value="dry">Dry Goods</option>
            <option value="beverages">Beverages</option>
            <option value="snacks">Snacks</option>
            <option value="household">Household</option>
            <option value="other">Other</option>
          </select>
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
        >
          Add Item
        </button>
      </form>
    </div>
  );
};

export default NewItem;
