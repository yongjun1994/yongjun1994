import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Item } from '../types/item';
import logo from '../assets/logo.png';

export default function DetailPage() {
  let { id } = useParams();
  let navigate = useNavigate();

  // 로컬스토리지에서 데이터 가져오기
  let rawItems = localStorage.getItem('items');
  let items: Item[] = rawItems ? JSON.parse(rawItems) : [];

  // id로 항목 검색
  let item = items.find((i) => String(i.id) === id);

  if (!item) {
    return (
      <div className="p-6 text-white bg-black min-h-screen">
        존재하지 않는 품목입니다.
      </div>
    );
  }

  return (
    <div className="bg-black min-h-screen text-white font-sans px-6 py-4">
      {/* 상단 로고 */}
      <div className="flex items-center gap-4 mb-6">
        <img src={logo} alt="logo" className="h-10" />
      </div>

      {/* 이름 */}
      <div className="text-center mb-4">
        <h1 className="text-3xl font-bold">{item.name}</h1>
      </div>

      {/* 상세 본문 */}
      <div className="flex flex-col md:flex-row gap-8 items-start">
        {/* 왼쪽: 이미지 + 설명 */}
        <div className="flex-1">
          <img
            src={item.image || 'https://via.placeholder.com/300x200.png?text=No+Image'}
            alt={item.name}
            className="w-full rounded-md mb-4 object-cover"
          />
          <p className="text-sm text-white">{item.description}</p>
        </div>

        {/* 오른쪽: 가격 + 영양정보 */}
        <div className="w-full md:w-1/3 space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-400">가격</span>
            <span>{item.price.toLocaleString()}원</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">수량</span>
            <span>{item.count}</span>
          </div>

          <hr className="my-2 border-gray-600" />
          <h3 className="font-bold text-white mb-2">[영양정보]</h3>

          {item.nutrition?.volume && item.nutrition.volume !== '-' && (
            <div className="flex justify-between">
              <span>용량</span>
              <span>{item.nutrition.volume}</span>
            </div>
          )}
          {item.nutrition?.calories && item.nutrition.calories !== '-' && (
            <div className="flex justify-between">
              <span>칼로리</span>
              <span>{item.nutrition.calories}</span>
            </div>
          )}
          {item.nutrition?.sugar && item.nutrition.sugar !== '-' && (
            <div className="flex justify-between">
              <span>당</span>
              <span>{item.nutrition.sugar}</span>
            </div>
          )}
          {item.nutrition?.protein && item.nutrition.protein !== '-' && (
            <div className="flex justify-between">
              <span>단백질</span>
              <span>{item.nutrition.protein}</span>
            </div>
          )}
          {item.nutrition?.fat && item.nutrition.fat !== '-' && (
            <div className="flex justify-between">
              <span>지방</span>
              <span>{item.nutrition.fat}</span>
            </div>
          )}
          {item.nutrition?.sodium && item.nutrition.sodium !== '-' && (
            <div className="flex justify-between">
              <span>나트륨</span>
              <span>{item.nutrition.sodium}</span>
            </div>
          )}
        </div>
      </div>

      {/* 돌아가기 버튼 */}
      <div className="mt-10">
        <button
          onClick={() => navigate('/list')}
          className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-md"
        >
          전체 목록으로 돌아가기
        </button>
      </div>

      <footer className="mt-12 text-center text-sm text-gray-500">
        © 2025. LYJ all rights reserved.
      </footer>
    </div>
  );
}
