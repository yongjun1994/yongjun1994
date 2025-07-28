import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './routes/AppRouter';
import './App.css';

function App() {
  useEffect(() => {
    const localItems = localStorage.getItem('items');

    if (!localItems) {
      const defaultItems = [
        {
          id: '1',
          name: '불고기 버거 세트',
          description: '달콤하고 짭짤한 불고기 패티와 신선한 채소 + 탄산',
          price: 9700,
          category: '햄버거',
          image: '/assets/burgerset1.jpg',
          nutrition: {
            volume: '-',
            calories: '550kcal',
            sugar: '-',
            protein: '-',
            fat: '-',
            sodium: '-',
          },
          count: 0
        },
        {
          id: '2',
          name: '치즈 버거 세트',
          description: '치즈의 풍미 & 시원한 탄산의 클래식 탄산',
          price: 7900,
          category: '햄버거',
          image: '/assets/burgerset2.jpg',
          nutrition: {
            volume: '-',
            calories: '550kcal',
            sugar: '-',
            protein: '-',
            fat: '-',
            sodium: '-',
          },
          count: 0
        },
        {
          id: '3',
          name: '콜라 (M)',
          description: '청량한 탄산의 콜라 음료',
          price: 2000,
          category: '음료',
          image: '/assets/drink1.jpg',
          nutrition: {
            volume: '355ml',
            calories: '-',
            sugar: '-',
            protein: '-',
            fat: '-',
            sodium: '-',
          },
          count: 0
        },
        {
          id: '4',
          name: '사이다 (M)',
          description: '청량한 탄산의 입안의 사이다',
          price: 2000,
          category: '음료',
          image: '/assets/drink2.jpg',
          nutrition: {
            volume: '355ml',
            calories: '-',
            sugar: '-',
            protein: '-',
            fat: '-',
            sodium: '-',
          },
          count: 0
        },
      ];

      localStorage.setItem('items', JSON.stringify(defaultItems));
    }
  }, []);

  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
