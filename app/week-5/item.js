import React from 'react';

const Item = ({ name, quantity, category }) => {
  return (
    <li className="p-4 mb-2 border-solid border-2 border-indigo-600">
      <div>
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="text-gray-500 p-2">Quantity:{quantity}</p>
        <p className="text-gray-500">Category:{category}</p>
      </div>
    </li>
  );
};

export default Item;