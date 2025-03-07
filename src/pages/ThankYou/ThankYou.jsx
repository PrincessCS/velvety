import React from "react";
import { Link } from "react-router-dom";
import styles from "./ThankYou.module.css";

function ThankYou() {
    return (
        <div className={styles.thank_you_page}>
            <img src="/images/party-popper.png" alt="party-popper" /> 
            <h1>Fake Payment Successful!</h1>
            <p>Thank you for your order. Your skincare products will be processed soon.</p>
            <Link to="/" className={styles.go_home}>Back to Home</Link>
        </div>
    );
}

export default ThankYou;
