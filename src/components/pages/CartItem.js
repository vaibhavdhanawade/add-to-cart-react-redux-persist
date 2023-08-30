import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, increaseItemQuantity, descreaseItemQuantity } from '../../features/cart/cartSlice';

function CartItem({item}) {

  const dispatch = useDispatch();
    
  return (
    <div class="item">
        <div class="image">
        <img src={item.images} style={{width:"100px" , height:"100px"}} />
        </div>
        <div class="content">
        <a class="header">{item.title}</a>
        <div class="meta">
            <span class="cinema">$ {item.price}</span>
        </div>
        <div class="description">
            <p>{item.description}</p>
        </div>
        <div class="extra">

            <div class="ui right floated red button"><i class="x icon" onClick={ () => dispatch(removeFromCart(item.id)) }></i></div>
            <div class="ui button mini red"><i class="minus icon" onClick={ () => dispatch(descreaseItemQuantity(item)) }></i></div>
            <div class="ui label">{item.quantity}</div>
            <div class="ui button mini primary"><i class="plus icon" onClick={ () => dispatch(increaseItemQuantity(item)) }></i></div>
        </div>
        </div>
    </div>
  )
}

export default CartItem