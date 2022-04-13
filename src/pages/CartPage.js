import React from "react";
import Cart from "../components/Cart";
import Navbar from "../components/NavBar";

function CartPage(props) {
  return (
    <>
      <Navbar numbOfCartItems={props.numbOfCartItems} />
      <div className="main">
        <div className="login-form-wrapper">
          <Cart
            cartItems={props.cartItems}
            onAdd={props.onAdd}
            onRemove={props.onRemove}
          />
        </div>
      </div>
    </>
  );
}

export default CartPage;
