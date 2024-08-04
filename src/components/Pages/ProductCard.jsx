import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product }) => {
    const { product_name, image_url } = product;

    return (
        <div className="product-card">
            <img src={image_url || 'https://via.placeholder.com/200'} alt={product_name} className="product-image" />
            <h2 className="product-title">{product_name}</h2>
        </div>
    );
};

export default ProductCard;