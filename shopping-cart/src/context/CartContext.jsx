import { createContext, useState } from 'react'

import { getProductData } from '../data/items'

export const CartContext = createContext({
  items: [],
  getProductQuantity: () => {},
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  deleteFromCart: () => {},
  getTotalAmount: () => {},
})

export function CartProvider({ children }) {
  const [cartProducts, setCartProducts] = useState([])
//getProductQuantity
  function getProductQuantity(id) {
    const quantity = cartProducts.find((item) => item.id === id)?.quantity

    if (quantity === undefined) {
      return 0
    }

    return quantity
  }
//addItemToCart
  function addItemToCart(id) {
    const quantity = getProductQuantity(id)

    if (quantity === 0) {
      setCartProducts([...cartProducts, { id: id, quantity: 1 }])
    } else {
      setCartProducts(
        cartProducts.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        )
      )
    }
  }
//deleteFromCart
  function deleteFromCart(id) {
    setCartProducts((cartProducts) =>
      cartProducts.filter((item) => {
        return item.id != id
      })
    )
  }
//removeItemFromCart
  function removeItemFromCart(id) {
    const quantity = getProductQuantity(id)

    if (quantity === 1) {
      deleteFromCart(id)
    } else {
      setCartProducts(
        cartProducts.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
      )
    }
  }
//getTotalAmount
  function getTotalAmount() {
    let totalAmount = 0

    cartProducts.map((item) => {
      const productData = getProductData(item.id)

      totalAmount += productData.price * item.quantity
    })

    return totalAmount
  }

  const ContextValue = {
    items: cartProducts,
    getProductQuantity,
    addItemToCart,
    removeItemFromCart,
    deleteFromCart,
    getTotalAmount,
  }

  return (
    <CartContext.Provider value={ContextValue}>{children}</CartContext.Provider>
  )
}