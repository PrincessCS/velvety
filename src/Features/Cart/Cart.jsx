import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import styles from "./Cart.module.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { addToCart, removeFromCart, subtractFromCart } from "./cartSlice";

function Cart() {
    const navigate = useNavigate();
    const cartItems = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();
    const transactionFee = 100;

    const navigateToCheckout = () => {
        navigate("/checkout");
    };

    const handleRemoveCart = (id) => {
        dispatch(removeFromCart({ id }));
    };

    const increaseQuantity = (item) => {
        dispatch(addToCart({id: item.id, quantity: 1}))
    }

    const decreaseQuantity = (item) => {
        if(item.quantity > 1) {
            dispatch(subtractFromCart(item))
        } else {
            handleRemoveCart(item.id)
        }
    }

    return (
        <>
            <section>
            <Header />
                <div className={styles.cart_hero}>
                    <img src="/images/anti-aging.webp" alt="green-leaves" />
                    <div>
                        <h2>
                            <Link to="/shop">Shop</Link> - Cart
                        </h2>
                    </div>
                </div>

                {cartItems.length === 0 ? (
                    <div className={styles.empty_cart}>
                        <h3>
                            There are no items in your Cart. Go to <Link to="/shop">Shop</Link>
                        </h3>
                    </div>
                ) : (
                    <>
                        <table className={styles.cart_table}>
                            <thead>
                                <tr>
                                    <th>Product</th>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Subtotal</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cartItems.map((item) => (
                                    <tr key={item.id}>
                                        <td data-label="Product">
                                            <img className={styles.product_img} src={`/images/${item.image}`} alt={item.name} />
                                        </td>
                                        <td data-label="Name">{item.name}</td>
                                        <td data-label="Price">${item.price.toFixed(2)}</td>
                                        <td data-label="Quantity" className={styles.quantity}>
                                            <button className={styles.update_quantity} onClick={() => decreaseQuantity(item)}>-</button>
                                            <input type="text" value={item.quantity} readOnly/>
                                            <button className={styles.update_quantity} onClick={() => increaseQuantity(item)}>+</button>
                                        </td>
                                        <td data-label="Subtotal">${(item.price * item.quantity).toFixed(2)}</td>
                                        <td data-label="Action">
                                            <button className={styles.remove_btn} onClick={() => handleRemoveCart(item.id)}>Remove</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        <div className={styles.total}>
                            <h3>CART TOTAL</h3>
                            <div className={styles.cart_total}>
                                <div>Subtotal</div>
                                <div>
                                    ${cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}
                                </div>
                                <div>Transaction Fee</div>
                                <div>${transactionFee}</div>
                                <div>Total</div>
                                <div>
                                    ${(transactionFee + cartItems.reduce((total, item) => total + item.price * item.quantity, 0)).toFixed(2)}
                                </div>
                            </div>
                            <button className={styles.checkout_btn} onClick={navigateToCheckout}>PROCEED TO CHECKOUT</button>
                        </div>
                    </>
                )}
            </section>
            <Footer />
        </>
    );
}

export default Cart;
