import React from 'react'
import { Routes, Route } from 'react-router-dom'
import MainPage from '../pages/MainPage'
import ListPage from '../pages/ListPage'
import DetailPage from '../pages/DetailPage'
import CreatePage from '../pages/CreatePage'

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/list" element={<ListPage />} />
      <Route path="/detail/:id" element={<DetailPage />} />
      <Route path="/create" element={<CreatePage />} />
      <Route path="/edit/:id" element={<CreatePage editMode />} />
    </Routes>
  )
}