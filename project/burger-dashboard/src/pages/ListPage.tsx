import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Item } from '../types/item';

import logo from '../assets/logo.png';
import itemsData from '../data/items.json';

export default function ListPage() {
  const [items, setItems] = useState<Item[]>([]);
  const [search, setSearch] = useState('');
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

useEffect(() => {
  // localStorage에서 불러오고, 없으면 itemsData 사용
  const raw = localStorage.getItem('items');
  const list: Item[] = raw ? JSON.parse(raw) : itemsData;

  const category = searchParams.get('category');
  if (category) {
    setItems(list.filter((i) => i.category === category));
  } else {
    setItems(list);
  }
}, [searchParams]);

  const filtered = items.filter((item) =>
    item.name.includes(search)
  );

  return (
    <div className="bg-black min-h-screen text-white px-6 py-4">
      {/* 상단 로고 + 검색창 */}
      <div className="flex items-center gap-4 mb-6">
        <img src={logo} alt="logo" className="h-10" />
        <input
          type="text"
          placeholder="메뉴 검색"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 bg-[#3e3e3e] text-white px-4 py-2 rounded-full placeholder:text-gray-300"
        />
      </div>

      {/* 전체메뉴 타이틀 */}
      <h2 className="text-lg font-bold mb-4">전체메뉴</h2>

      {/* 메뉴 리스트 */}
      <div className="space-y-4">
        {filtered.map((item) => (
          <div
            key={item.id}
            onClick={() => navigate(`/detail/${item.id}`)}
            className="bg-[#4a4a4a] rounded-xl p-4 flex items-center gap-4 hover:opacity-90 transition cursor-pointer"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-20 h-20 object-cover rounded-md"
            />
            <div className="flex flex-col">
              <h3 className="font-bold text-lg">{item.name}</h3>
              <p className="text-sm text-gray-200">{item.description}</p>
              <p className="text-sm mt-1">가격: {item.price.toLocaleString()}원</p>
              {item.nutrition?.calories !== '-' && (
                <p className="text-sm text-gray-300 mt-1">
                  칼로리: {item.nutrition.calories}
                </p>
              )}
              {item.nutrition?.volume !== '-' && (
                <p className="text-sm text-gray-300 mt-1">
                  용량: {item.nutrition.volume}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* 고정된 카테고리 버튼 (오른쪽 하단) */}
      <div className="fixed bottom-6 right-4 flex flex-col gap-2 text-sm">
        <button
          onClick={() => navigate('/list')}
          className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
        >
          전체메뉴
        </button>
        <button
          onClick={() => navigate('/list?category=햄버거')}
          className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
        >
          햄버거 메뉴
        </button>
        <button
          onClick={() => navigate('/list?category=음료')}
          className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
        >
          음료 메뉴
        </button>
      </div>

      {/* 푸터 */}
      <footer className="mt-12 text-center text-sm text-gray-500">
        © 2025. LYJ all rights reserved.
      </footer>
    </div>
  );
}
