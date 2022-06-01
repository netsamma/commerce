import React from "react";
import Navbar from "../components/NavBar";
import Products from "../components/Products";
import Cart from "../components/Cart";

function Home(props) {
  console.log("Start home");
  return (
    <>
      <Navbar
        numbOfCartItems={props.numbOfCartItems}
        setFilter={props.setFilter}
      />
      <div className="main">
        <Products
          products={props.products}
          loading={props.loading}
          onAdd={props.onAdd}
          addProduct={props.addProduct}
        />
        <Cart
          cartItems={props.cartItems}
          onAdd={props.onAdd}
          onRemove={props.onRemove}
        />
      </div>
    </>
  );
}

export default Home;
