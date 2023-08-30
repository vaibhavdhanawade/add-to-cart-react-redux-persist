import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Master from './components/layout/master';
import Home from './components/pages/home';
import Product from './components/pages/product';
import Cart from './components/pages/cart';
import Checkout from './components/pages/checkout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Master />}>
          <Route path="/" element={<Home />}/>
          <Route path="/product" element={<Product />}/>
          <Route path="/cart" element={<Cart />}/>
          <Route path="/checkout" element={<Checkout />}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
