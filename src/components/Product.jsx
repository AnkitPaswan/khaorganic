import React from 'react'
import './Product.css'
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import VisibilityIcon from '@mui/icons-material/Visibility';

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
            </div>
            <div className="prod-btn">
                <div className="view-detail">
                    <VisibilityIcon style={{ fontSize: "1.2em", color: "#539F22" }} />
                    View detail
                </div>
                <div className="shop-btn">
                    < ShoppingBagIcon style={{ fontSize: "1.2em", color: "#539F22" }} />
                    Add to cart
                </div>
            </div>
        </div>

    )
}

export default Product
