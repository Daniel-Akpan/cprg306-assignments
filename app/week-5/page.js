import React from 'react';
import ItemList from './item-list';

const Page = () => {
  return (
    <main className="max-w-xl  bg-slate-300 ">
      <div className='m-4'>
      <h1 className="text-3xl font-bold mb-4">Shopping List</h1>
      </div>
      <ItemList />
    </main>
  
  );
};

export default Page;