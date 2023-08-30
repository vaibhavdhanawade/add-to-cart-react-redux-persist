import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import { useDispatch, useSelector }  from 'react-redux';
import { searchProducts, clearSearch } from '../../features/products/productsSlice';
function Header() {
  const [msg, setMsg] = useState(true);
  const dispatch = useDispatch();
  const filteredProducts = useSelector((state) => state.products.filteredProduct)
  const cartItem = useSelector((state) => state.cart.cart);
  return (
    <>
    <div className="ui pointing menu">
  <Link to="/" className="active item">
    <i className="home icon"></i>
  </Link>
  <div className="item">
    <div className="ui icon input">
      <input type="text" placeholder="Search..." onChange={(e) => {dispatch(searchProducts(e.target.value)); setMsg(true)}} />
      <i className="search icon"></i>
    </div>
  </div>
  {
    msg ?    
        filteredProducts.length === 0 ? 
          <div className="item">
            <div className="ui icon input" style={{color:'red'}}>
              No match found !
            </div>
          </div> : 
          <div className="item">
            <div className="ui icon input" style={{color:'red',cursor:'pointer'}} onClick={() => {dispatch(clearSearch()); setMsg(false)}}>
              Clear Search
            </div>
          </div>
    : ''  
  }
  
  <div className="right menu">
  <Link to="/cart" className=" item">
    <i className="cart icon"></i><sup>{cartItem.length}</sup>
  </Link>
  {/* <a className=" item">
    <i className="clipboard list icon"></i>
  </a>
  
    <div className="item">
    <button className="ui icon blue button">
  <i className="user circle icon"></i>
</button>
    </div> */}
  </div>
</div>
    </>
  )
}

export default Header