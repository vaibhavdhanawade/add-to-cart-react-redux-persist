import React from 'react'
import { useSelector } from 'react-redux';
import CartItem from './CartItem';
function Cart() {
    const cartItems = useSelector(state => state.cart.cart);
    return (
      <div className="ui divided items" style={{padding:'10px'}}>
        <h2 style={{textAlign:'center'}}>Your Cart {cartItems.length === 0 ? 'is Empty' : ''}</h2>
        {cartItems.map(item => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
    );
}

export default Cart