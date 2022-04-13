import React from 'react'
import Cart from '../components/Cart'
import Navbar from '../components/NavBar'

function CartPage() {
  return (
    <>
      <Navbar numbOfCartItems={0}/>
      <div className="main">
        <div className="login-form-wrapper">
          Carrello
        </div>
      </div>
	  </>
  )
}

export default CartPage