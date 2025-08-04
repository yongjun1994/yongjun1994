import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Item } from '../types/item';

export default function ItemCard({ item }: { item: Item }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/detail/${item.id}`)}
      className="bg-gray-700 p-4 rounded shadow hover:bg-gray-600 cursor-pointer text-white text-center"
    >
      <img src={item.image} alt={item.name} className="w-full h-40 object-cover rounded mb-2" />
      <h3 className="text-lg font-semibold">{item.name}</h3>
      <p className="text-sm">{item.price.toLocaleString()}원</p>
    </div>
  );
}