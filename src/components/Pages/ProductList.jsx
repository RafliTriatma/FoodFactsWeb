import React, { useEffect, useState } from 'react';
import { fetchFruits } from '../services/api';
import ProductCard from './ProductCard';
import './ProductList.css';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const loadFruits = async () => {
            try {
                const data = await fetchFruits();
                setProducts(data);
            } catch (error) {
                console.error('Failed to fetch fruits', error);
            }
        };

        loadFruits();
    }, []);

    return (
        <div className="product-list">
            {products.map((product, index) => (
                <ProductCard key={index} product={product} />
            ))}
        </div>
    );
};

export default ProductList;