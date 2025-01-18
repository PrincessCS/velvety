import React, { useState, useEffect, useRef } from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

function Header({ aboutRef, headerColor }) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [pageDropdown, setPageDropdown] = useState(false);
    const dropdownRef = useRef(null)

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setPageDropdown(false); 
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const scrollToAbout = () => {
        if (aboutRef?.current) {
            aboutRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    const dropDown = [
        "Home",
        "OrderConfirmation",
        "About",
        "Licenses",
        "Shop",
        "Changelog",
        "ProductDetails",
        "Contact Us",
        "Checkout",
        "404",
        "CheckoutPaypal",
        "401",
        "Blog",
        "Styleguide",
        "BlogDetail"
    ];

    return (
        <header className={`${styles.header} ${isScrolled ? styles.blurred : ""} ${headerColor ? styles.header_color : ""}`}>
            <div>
                <Link to="/">
                    <img src="/images/logo.png" alt="velvety-logo" />
                </Link>
            </div>
            <nav>
                <ul>
                    <li ref={dropdownRef} className={`${styles.page_dropdown}`} onClick={() => setPageDropdown(!pageDropdown)}>
                        Pages
                        <ul className={`${styles.dropdown_menu} ${pageDropdown ? styles.dropdown_open : styles.hidden}`}>
                            {dropDown.map((dropdown, index) => (
                                <li key={index} className={styles.dropdown_list}>
                                    {dropdown}
                                </li>
                            ))}
                        </ul>
                    </li>
                    <li className={styles.header_links}>
                        <Link to="/shop">Shop</Link>
                    </li>
                    <li onClick={scrollToAbout} className={styles.header_links}>About</li>
                </ul>
                <ul>
                    <li className={styles.header_links}>
                        <Link to="/login">Login</Link>
                    </li>
                    <li className={styles.header_links}>
                        <Link to="/cart">Cart</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
