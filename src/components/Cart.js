import React from 'react'

function Cart(props) {
  const { cartItems, onAdd, onRemove } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const taxPrice = itemsPrice * 0.22;
  const shippingPrice = itemsPrice > 2000 ? 0 : 20;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;
  return (
    <div className="cart">
      <h2>Carrello</h2>
      <div>
        {cartItems.length === 0 && <div>Carrello vuoto</div>}
        {cartItems.map((item) => (
          <div key={item.id} className="item_row">
            <div> {item.title} </div>
            <div> {item.qty} x € {item.price.toFixed(2)} </div>
            <button onClick={() => onRemove(item)} className="remove"> - </button>
            {' '}
            <button onClick={() => onAdd(item)} className="add"> + </button>
          </div>
        ))}

        {cartItems.length !== 0 && (
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
      </div>
    </div>
  );
}

export default Cart