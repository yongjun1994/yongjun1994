import React, { useEffect, useState } from 'react'
import { Item } from '../types/item'
import { v4 as uuidv4 } from 'uuid'
import { useNavigate, useParams } from 'react-router-dom'

interface CreatePageProps {
  editMode?: boolean
}

export default function CreatePage({ editMode = false }: CreatePageProps) {
  const { id } = useParams()
  const navigate = useNavigate()

  const [item, setItem] = useState<Item>({
    id: uuidv4(),
    name: '',
    description: '',
    price: 0,
    category: '햄버거',
    nutrition: {
      calories: '',
      volume: '',
    },
    image: '',
    count: 0,
  })

  // 수정 모드일 경우 기존 데이터 불러오기
  useEffect(() => {
    if (editMode && id) {
      const rawItems = localStorage.getItem('items')
      const items: Item[] = rawItems ? JSON.parse(rawItems) : []
      const found = items.find((i) => i.id === id)
      if (found) {
        setItem(found)
      }
    }
  }, [editMode, id])

  // 입력 값 변경 핸들러
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target

    if (name === 'price' || name === 'count') {
      setItem((prev) => ({ ...prev, [name]: Number(value) }))
    } else if (name === 'calories' || name === 'volume') {
      setItem((prev) => ({
        ...prev,
        nutrition: {
          ...prev.nutrition,
          [name]: value,
        },
      }))
    } else {
      setItem((prev) => ({ ...prev, [name]: value }))
    }
  }

  // 저장 버튼 클릭 시
  const handleSave = () => {
    const rawItems = localStorage.getItem('items')
    const items: Item[] = rawItems ? JSON.parse(rawItems) : []

    if (editMode) {
      // 수정
      const updatedItems = items.map((i) => (i.id === item.id ? item : i))
      localStorage.setItem('items', JSON.stringify(updatedItems))
    } else {
      // 등록
      localStorage.setItem('items', JSON.stringify([...items, item]))
    }

    navigate('/list')
  }

  return (
    <div className="p-6 text-white bg-black min-h-screen">
      <h1 className="text-2xl font-bold mb-4">{editMode ? '메뉴 수정' : '메뉴 등록'}</h1>

      <div className="space-y-4">
        <input
          type="text"
          name="name"
          value={item.name}
          onChange={handleChange}
          placeholder="이름"
          className="w-full p-2 rounded bg-gray-800 text-white"
        />
        <input
          type="text"
          name="description"
          value={item.description}
          onChange={handleChange}
          placeholder="설명"
          className="w-full p-2 rounded bg-gray-800 text-white"
        />
        <input
          type="number"
          name="price"
          value={item.price}
          onChange={handleChange}
          placeholder="가격"
          className="w-full p-2 rounded bg-gray-800 text-white"
        />
        <select
          name="category"
          value={item.category}
          onChange={handleChange}
          className="w-full p-2 rounded bg-gray-800 text-white"
        >
          <option value="햄버거">햄버거</option>
          <option value="음료">음료</option>
        </select>
        <input
          type="text"
          name="calories"
          value={item.nutrition.calories || ''}
          onChange={handleChange}
          placeholder="칼로리"
          className="w-full p-2 rounded bg-gray-800 text-white"
        />
        <input
          type="text"
          name="volume"
          value={item.nutrition.volume || ''}
          onChange={handleChange}
          placeholder="용량"
          className="w-full p-2 rounded bg-gray-800 text-white"
        />
        <input
          type="text"
          name="image"
          value={item.image}
          onChange={handleChange}
          placeholder="이미지 경로 또는 URL"
          className="w-full p-2 rounded bg-gray-800 text-white"
        />
        <input
          type="number"
          name="count"
          value={item.count}
          onChange={handleChange}
          placeholder="수량"
          className="w-full p-2 rounded bg-gray-800 text-white"
        />
        <button
          onClick={handleSave}
          className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 rounded"
        >
          {editMode ? '수정 완료' : '등록 완료'}
        </button>
      </div>

      <footer className="mt-12 text-center text-sm text-gray-500">
        © 2025. LYJ all rights reserved.
      </footer>
    </div>
  )
}
