import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { clearCart} from "../Cart/cartSlice";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import styles from "./Checkout.module.css";

function Checkout(){
    const cartItems = useSelector((state) => state.cart.items);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch()

    const handleFakeCheckout = () =>{
        setIsLoading(true);
        setTimeout(()=> {
            setIsLoading(false);
            dispatch(clearCart());
            navigate("/thank-you");
        }, 2000);
    }

    return(
        <>
            <Header />
            <div className={styles.checkout_hero}>
                <img src="/images/checkout-hero.avif" alt="" />
                <div>
                    <h2><Link to="/cart">Cart</Link> - Checkout</h2>
                </div>
            </div>

            <div className={styles.checkout}>
                <div className={styles.billing}>
                    <h4>Billing Details</h4>
                    <p>Please ensure delivery address and phone number is correct for adequate delivery rates</p>
                    <form action="">
                        <label htmlFor="email">
                            Email address (Please make sure you have a valid e-mail to checkout) *
                            <input type="email" id="email"/>
                        </label>

                        <div className={styles.form_row}>
                        <label htmlFor="first-name">
                            First Name *
                            <input type="text" id="first-name" />
                        </label>
                        
                        <label htmlFor="last-name">
                            Last Name *
                            <input type="text" id="last-name" />
                        </label>             
                        </div> 
                        
                        <label htmlFor="phone">
                            Phone *
                            <input type="tel" id="phone" />
                        </label>

                        <label htmlFor="country">
                            Country / Region *
                            <select name="" id="country">
                                <option value=""></option>
                            </select>
                        </label>
                        
                        <label htmlFor="state">
                            State *
                            <select name="" id="state">
                                <option value=""></option>
                            </select>
                        </label>
                        
                        <label htmlFor="city">
                            LGA / City *
                            <select name="" id="city">
                                <option value=""></option>
                            </select>
                        </label>
                        
                        <label htmlFor="street">
                            Street address (Please ensure delivery address is correct and no emojis for adequate delivery prices) *
                            <input type="text" id="street" />
                        </label>
                        
                        <label htmlFor="post-code">
                            Postcode / ZIP (Optional) 
                            <input type="text" id="post-code" />
                        </label>
                        
                        <label htmlFor="order-notes">
                            Order Notes (Optional)
                            <textarea name="order-notes" id="order-notes"></textarea>
                        </label>
                    </form>
                </div>
                <div className={styles.order_details}>
                    <h4>Order Details</h4>
                    <div>
                        <table className={styles.checkout_table}>
                            <thead>
                                <tr>
                                    <th>Product</th>
                                    <th>Name</th>
                                    <th>Subtotal</th>
                                </tr>
                            </thead>

                            <tbody>
                                {cartItems.map((item) => (
                                    <tr key={item.id}>
                                        <td>
                                             <img className={styles.product_img} src={`/images/${item.image}`} alt={item.name} />
                                        </td>
                                        <td>{item.name} x {item.quantity}</td>
                                        <td>${(item.price * item.quantity).toFixed(2)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <button className={styles.pay_now_btn} onClick={handleFakeCheckout} disabled={isLoading}>{isLoading ? "Processing..." : "Pay Now"}</button>
                </div>
            </div>
        <Footer/>
        </>
    )
}
export default Checkout;