import React from 'react'
import ReactDOM from 'react-dom'
import { useState, useContext } from 'react'
import cartContext from '../../context'

export default function Product(props) {
  const {total, setTotal} = useContext(cartContext)
  const {cart, setCart} = useContext(cartContext)
  const [select, setSelect]= useState(false)
  const { name, icon, price, isSelected } = props
  const adjustedPrice = price.toFixed(2).toString().replace(".", ",")


    function getTotal() {
        const isSelect = !select;
        if (isSelect) setTotal(total + price);
        else setTotal(total - price )
    
        setSelect(isSelect)
    }

    function checkSelected() {
    }

    return (
        <div className={checkSelected()} onClick={getTotal}>
            {icon} {name} - R$ {adjustedPrice}
        </div>
    );
  }