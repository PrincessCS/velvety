import React, {useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styles from "./ProductCard.module.css";
import { addToCart} from "../Cart/cartSlice";

function ProductCard({ product }) {
    const navigate = useNavigate();
    const cart = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(1);

    const handleSelectedProduct = (productId) => {
        navigate(`/selectedproduct/${productId}`);
    };


    const increaseQuantity = () => {
        setQuantity((prevQuantity) => prevQuantity + 1);
    }

    const decreaseQuantity = () => {
        if(quantity > 1){
            setQuantity((prevQuantity) => prevQuantity - 1);
        }
    }

    const handleAddToCart = () =>{
        dispatch(addToCart({ ...product, quantity }));
       
    }

    return (
        <div className={styles.product}>
            <img src={`/images/${product.image}`} alt={product.name} onClick={() => handleSelectedProduct(product.id)} />
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

            <div className={styles.add_to_cart}>
               <button onClick={decreaseQuantity}>-</button>
               <input type="text" value={quantity} readOnly />
               <button onClick={increaseQuantity}>+</button>
               <button onClick={handleAddToCart}>Add to Cart</button>
            </div>
        </div>
    );
}

export default ProductCard;
