import React from "react"
import styles from "./Footer.module.css"

function Footer(){
    return(
        <>
        <footer>
        <div className={styles.subscribe_cta}>
            <div>
              <h2>Subscribe to get 10% off <br/> your first order</h2>
            </div>
            <div className={styles.subscribe_input}>
              <input type="email" placeholder="Drop your email here"/>
              <button type="submit"><img src="/images/shop-arrow.png" alt="subscribe-arrow" /></button>
            </div>   
        </div>

        <div className={styles.footer}>
            <div className={styles.footer_div}>
                <img src="/images/logo-dark.png" alt="velvety-logo" />
                <h6>Opening hours</h6>
                <h4>Monday to Saturday: <br/>10:30 a.m. to 7 p.m.</h4>
            </div>

            <div className={styles.footer_div}>
                <h6>Shop</h6>
                <ul>
                    <li>Skincare</li> 
                    <li>Facial</li>
                    <li>Soap</li>
                    <li>Candles</li>
                    <li>Auto Fragrances</li>
                    <li>Gifts</li>
                </ul>       
            </div>

            <div className={styles.footer_div}>
                <h6>Help Desk</h6>
                <ul>
                    <li>Chat</li>
                    <li>FAQ</li>
                    <li>Shipping & Returns</li>
                    <li>Contact</li>
                    <li>Policies</li>
                    <li>Accessibility</li>
                    <li>My Account</li>
                </ul>
            </div>

            <div className={styles.footer_div}>
                <h6>Stores</h6>
                <ul>
                    <li>Manhattan</li>
                    <li>Brooklyn</li>
                    <li>Tokyo</li>
                    <li>Jakarta</li>
                    <li>Paris</li>
                    <li>Buenos Aires</li>
                </ul>
            </div>
        </div>
        </footer>
        </>
    );
}

export default Footer;