import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ProductCard.module.css";

function ProductCard({ product }) {
    const navigate = useNavigate();

    const handleSelectedProduct = (productId) => {
        navigate(`/selectedproduct/${productId}`);
    };

    return (
        <div className={styles.product} onClick={() => handleSelectedProduct(product.id)}>
            <img src={`/images/${product.image}`} alt={product.name} />
            <div className={styles.product_description}>
                <div className={styles.name_price}>
                    <h6>{product.name}</h6>
                    <p>${product.price}</p>
                </div>
                <div className={styles.rating}>
                    <img src={`/images/${product.rating.image}`} alt={product.rating.rate} />
                    <p>{product.rating.rate.toFixed(1)}</p>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;
