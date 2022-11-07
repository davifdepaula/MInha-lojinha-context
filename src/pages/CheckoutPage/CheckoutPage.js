import React from 'react'
import { useEffect, useContext } from 'react';
import ReactDOM from 'react-dom'
import cartContext from '../../context';

import { useNavigate } from "react-router-dom"
import Product from '../../components/Product';

export default function CheckoutPage() {
  const navigate = useNavigate();
  const {cart} = useContext(cartContext)
  const {total} = useContext(cartContext)
  return (
    <div className="CheckoutPage">
      <h1>Produtos Selecionados</h1>
      {cart.map((product) => {
        return product   
  })}
      {/* TODO: aqui vão os produtos selcionados na tela de produtos */}
      <div className="register">
        <b>Total da compra:</b> R$ <span>{total.toFixed(2)}</span>
      </div>
      <button onClick={() => navigate("/")}>Voltar</button>
    </div>


  )
}