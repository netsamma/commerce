import React from 'react'
import styled from 'styled-components';

function Cart(props) {

  const itemsPrice = props.cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const taxPrice = itemsPrice * 0.22;
  const shippingPrice = itemsPrice > 2000 ? 0 : 20;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;

  return (
      <StyledCart>
        {props.cartItems.length === 0 && <div>Carrello vuoto</div>}
        {props.cartItems.map((item) => (
          <div key={item.product_id?item.product_id:item.id} className="item_row">
            <div> {item.title} </div>
            <div> {item.qty} x € {item.price.toFixed(2)} </div>
            <button onClick={() => props.onRemove(item)} className="remove"> - </button>
            {' '}
            <button onClick={() => props.onAdd(item)} className="add"> + </button>
          </div>
        ))}
        {props.cartItems.length !== 0 && (
          <>
            <hr/>
            <h3>Totale prodotti</h3> 
            <div className="col-1 text-right">${itemsPrice.toFixed(2)}</div>
            
            <h3>Tasse</h3> 
            ${taxPrice.toFixed(2)}

            <h3>Costi spedizione</h3> 
            ${shippingPrice.toFixed(2)}
            <hr/>

            <h3>Totale</h3>
            <h3>${totalPrice.toFixed(2)}</h3>

            <button onClick={() => alert('Implement Checkout!')}>
                Checkout
            </button>

          </>
        )}
      </StyledCart>
  );
}

export default Cart


const StyledCart = styled.div`
	padding: 20px;
  width: 25%;
  background: var(--lightBlue);
  padding: 30px;
`