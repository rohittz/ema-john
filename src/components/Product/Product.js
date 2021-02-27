import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/fontawesome-free-solid'
const Product = (props) => {
    const product = props.product;
    return (
        <div className="product-container" key={product.key}>
            <div className="single-product">
                <div className="prod-image">
                    <img src={product.img} alt={product.key} />
                </div>
                <div className="prod-details">
                    <div className="prod-name">
                        {product.name}
                    </div>
                    <p> by {product.seller}</p>
                    <div className="price-stars">
                        <h2>${product.price}</h2>
                        <div className="starts">

                        </div>
                    </div>
                    <div className="status-features">
                        <div className="status-button">
                            <p className="status"> Only {product.stock} left in stock, order soon</p>
                            <button className="addtocart" onClick={() => props.cartHandle(product)}><FontAwesomeIcon icon={faShoppingCart} /> Add to Cart</button>
                        </div>
                        <div className="features">
                            {(product.features.length == 0) ? null : <h3>Features</h3>}
                            <ul>
                                {
                                    product.features.map(feature =>
                                        <li>{feature.description} : {feature.value}</li>
                                    )
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product;