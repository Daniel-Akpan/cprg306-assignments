"use client";
import React, { useState } from 'react';
import ItemList from './item-list';
import NewItem from './new-item';
import itemsData from './items.json';


const Page = () => {
  const [items, setItems] =  useState(itemsData);
  const handleAddItem = (newItem) => 
    {  setItems([...items, newItem]);
  };
  return (
    <main className="bg-slate ">
      <div className='m-4'>
      <h1 className="text-3xl font-bold mb-4 text-center">Shopping List</h1>
      <NewItem onAddItem={handleAddItem} />
      </div>
      <ItemList items={items} />
    </main>
  
  );
};

export default Page;