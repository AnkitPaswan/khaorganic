import React from 'react'
import { popularProducts } from '../utils/data'
import Product from './Product'
import './products.css'

const products = ({ headingText, innerpage }) => {
    return (
        <div className="products-container">
            {!innerpage && <div className="sec-heading">{headingText}</div>}
            <div className="products">
                {popularProducts.map((item) => (
                    <Product item={item} key={item.id} />
                ))}
            </div>
        </div>
    )
}

export default products
