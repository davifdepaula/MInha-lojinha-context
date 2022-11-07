import React, { useState, useContext } from 'react'
import ReactDOM from 'react-dom'
import cartContext from '../context';

import { useNavigate } from "react-router-dom";

import Product from "../components/Product";

export default function ProductsPage() {
  const {products} = useContext(cartContext)
  const navigate = useNavigate();
  return (
    <div className="ProductsPage">
      <h1>Produtos disponíveis</h1>
      <p>Por questões de estoque, as compras estão limitadas a uma unidade por cpf.</p>
      {
        products.map(product => {
          return (
            <Product
              key={product.name}
              name={product.name}
              icon={product.icon}
              price={product.price}
            />
          )
        })
      }
      <button onClick={() => navigate("/checkout")}>Fechar compra</button>
    </div>
  )
}