import React from "react";
import Cart from "../components/Cart";
import Navbar from "../components/NavBar";

function CartPage(props) {
  return (
    <>
      <Navbar numbOfCartItems={props.numbOfCartItems} />
      <Cart
        cartItems={props.cartItems}
        onAdd={props.onAdd}
        onRemove={props.onRemove}
        alwaysVisible={true}
      />
    </>
  );
}

export default CartPage;
