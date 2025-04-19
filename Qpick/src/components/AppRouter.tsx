import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router'
import Header from './Header'
import MainPage from '../page/MainPage'
import BasketPage from '../page/BasketPage'

export default function AppRouter() {
  return (
    <BrowserRouter>
        <div className="container">
            <Routes>
                <Route path='/' element={<MainPage/>}/>
                <Route path='/basket' element={<BasketPage/>}/>
            </Routes>
        </div>
    </BrowserRouter>
  )
}
