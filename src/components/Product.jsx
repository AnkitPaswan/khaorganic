import React from 'react'
import './Product.css'
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const Product = ({ item }) => {
    const location = useLocation();
    const navigate = useNavigate();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return (
        <div className="product-card" onClick={() => navigate(`/singleproduct/${item.id}`)} >

            <div className="thumbnail">
                <img src={item.img} alt="" />
            </div>
            <div className="prod-details">
                <span className="name">{item.title}</span>
                <span className="qty">QTY: {item.qty}</span>
                <span className="price">&#8377; {item.price}</span>
                <div className="shop-btn">
                    < ShoppingCartOutlinedIcon />
                    Shop Now
                </div>
            </div>
        </div>

    )
}

export default Product
