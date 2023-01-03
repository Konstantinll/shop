import React from 'react'
import Footer from '../common/footer/Footer'
import Discount from '../components/discount/Discount'
import FlashDeals from '../components/mainpage/flashDeals/FlashDeals'
import Home from '../components/mainpage/Home'
import NewArrivals from '../components/newarrivals/NewArrivals'
import Shop from '../components/shop/Shop'
import TopCate from '../components/top/TopCate'
import Wrapper from '../components/wrapper/Wrapper'

const Pages = ({productItems, cartItem, addToCart, shopItems}) => {
  return (
    <>
        <Home cartItem={cartItem}/>
        <FlashDeals productItems={productItems} addToCart={addToCart}/>
        <TopCate/>
        <NewArrivals/>
        <Discount/>
        <Shop shopItems={shopItems} addToCart={addToCart}/>
        <Wrapper/>
        <Footer/>
    </>
  )
}

export default Pages