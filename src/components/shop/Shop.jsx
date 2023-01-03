import React from 'react'
import Cart from './Catg'
import ShopCart from './ShopCart'
import './Style.css'

const Shop = ({shopItems, addToCart}) => {
    return (
        <>
            <section className="shop bakground">
                <div className="container d_flex">
                    <Cart />
                    <div className="contentWidth">
                        <div className="heading d_flex">
                            <div className="heading-left row f_flex">
                                <h2>Mobile phons</h2>
                            </div>
                            <div className="heading-right row">
                                <span>View all</span>
                                <i className="fa fa-caret-right"></i>
                            </div>
                        </div>
                        <div className="product-content grid1">
                            <ShopCart shopItems={shopItems} addToCart={addToCart}/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Shop