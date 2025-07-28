import React from 'react'
import { useNavigate } from 'react-router-dom'

import logoImage from '../assets/logo.jpg';
import burgerImage from '../assets/burger.jpg';
import drinkImage from '../assets/drink.png';
import plusIcon from '../assets/plus-sign.png';

export default function MainPage() {
  let navigate = useNavigate()

  return (
    <div className="min-h-screen bg-white text-black flex flex-col items-center justify-start pt-10 px-4">
      <h1 className="text-2xl font-bold mb-8">GangNam 버거에 오신것을 환영합니다.</h1>

      <div className="grid grid-cols-3 gap-8 items-start text-center mb-20">
        <div onClick={() => navigate('/list')} className="cursor-pointer">
          <img src={logoImage} alt="전체 목록" className="w-48 h-40 object-cover mx-auto" />
          <p className="mt-2 font-semibold">전체 목록</p>
        </div>

        <div onClick={() => navigate('/list?category=햄버거')} className="cursor-pointer">
          <img src={burgerImage} alt="햄버거 목록" className="w-40 h-32 object-cover mx-auto" />
          <p className="mt-2 font-semibold">햄버거 목록</p>
        </div>

        <div onClick={() => navigate('/list?category=음료')} className="cursor-pointer">
          <img src={drinkImage} alt="음료 목록" className="w-32 h-32 object-cover mx-auto" />
          <p className="mt-2 font-semibold">음료 목록</p>
        </div>
      </div>

      <div className="fixed bottom-6 flex flex-col items-center">
        <span className="text-sm font-semibold mb-1">품목 생성</span>
        <button
          onClick={() => navigate('/create')}
          className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center"
        >
          <img src={plusIcon} alt="plus" className="w-5 h-5" />
        </button>
      </div>

      <footer className="mt-12 text-center text-sm text-gray-500">
        © 2025. LYJ all rights reserved.
      </footer>
    </div>
  )
}
