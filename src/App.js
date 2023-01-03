import './App.css'
import Header from './common/header/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Pages from './pages/Pages';
import Data from './components/Data';
import Sdata from './components/shop/Sdata';
import { useState } from 'react';
import Cart from './common/cart/Cart';

function App() {
  const {productItems} = Data
  const {shopItems} = Sdata

  const [cartItem, setCartItem] = useState([])

  const addToCart = (product) => {
    const productExit = cartItem.find((item) => item.id === product.id)

    if (productExit) {
      setCartItem(cartItem.map((item) => (item.id === product.id? {...productExit, qty:productExit.qty+1} : item)))
    }else {
      setCartItem([...cartItem,{...product,qty:1}])
    }
  }
  const decreaseQty = (product) => {
    const productExit = cartItem.find((item) => item.id === product.id)
    if (productExit.qty === 1) {
      setCartItem(cartItem.filter((item) => item.id !== product.id))
    } else {
      setCartItem(cartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty - 1 } : item)))
    }
  }
  const remuveCart = (product) => { setCartItem(cartItem.filter((item) => item.id !== product.id))}

  return (
    <>
      <Router>
        <Header cartItem={cartItem} />
        <Routes>
          <Route path='/'element={<Pages productItems={productItems} addToCart={addToCart} shopItems={shopItems}/>} exact/>
          <Route path='/cart'element={<Cart cartItem={cartItem} addToCart={addToCart} decreaseQty={decreaseQty} remuveCart={remuveCart}/>} exact/>
        </Routes>
      </Router>
      
    </>
  );
}

export default App;
