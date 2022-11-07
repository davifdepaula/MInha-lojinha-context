import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import ProductsPage from '../../pages/ProductsPage';
import CheckoutPage from "../../pages/CheckoutPage/CheckoutPage";
import cartContext from '../../context';

export default function App() {
  const[ products , setProducts] = useState([
    { name: "Bolo de aniversário", icon: "🎂", price: 20.9, isSelected:false },
  { name: "Balão", icon: "🎈", price: 5.6, isSelected:false },
  { name: "Confete", icon: "🎉", price: 2.9, isSelected:false },
  { name: "Suco de caixinha", icon: "🧃", price: 1.9, isSelected:false },
  { name: "Doces diversos", icon: "🍬", price: 12.3, isSelected:false }
]) 
  const [cart, setCart] = useState([])
  const [total, setTotal] = useState(0)
  return (
    <cartContext.Provider value={{cart, setCart, products, setProducts, total, setTotal}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductsPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
      </BrowserRouter>
    </cartContext.Provider>
  );
}
