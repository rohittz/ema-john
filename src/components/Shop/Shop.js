import './Shop.css';
import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Product from '../Product/Product';

const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    console.log(first10);
    const [products, setProducts] = useState(first10);
    const handleAddToCart = (product) => {
        console.log(product);
    }
    return (
        <div className="whole-shop">
            <div className="product-list">
                {
                    products.map(product =>
                        <Product product={product} cartHandle = {handleAddToCart} ></Product>
                    )
                }
            </div>
            <div className="cart">
                <h2>Order Summary</h2>
                <p>Items Ordered</p>
                <ul className="calculateAll">
                    <li>
                        <span>items</span>
                        <span id="itemsCount">0</span>
                    </li>
                    <li>
                        <span>Shipping & Handling</span>
                        <span id="shippingCharge">0</span>

                    </li>
                    <li>
                        <span>Total Before Tax</span>
                        <span id="totalbeforetax">0</span>

                    </li>
                    <li>
                        <span>Estimated Tax</span>
                        <span id="estimated-tax">0</span>

                    </li>
                    <li>
                        <span style={{ fontSize: "22px", color: "red" }}>Order Total: </span>
                        <span id="order-total">0</span>

                    </li>
                </ul>
                <button className="review-order">Review your order</button>
            </div>
        </div>
    );
};

export default Shop;