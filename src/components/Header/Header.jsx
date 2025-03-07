import React, { useState, useEffect, useRef } from "react";
import { useSelector} from "react-redux";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

function Header({ aboutRef, headerColor }) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [pageDropdown, setPageDropdown] = useState(false);
    const [mobileMenu, setMobileMenu] = useState(false);
    const dropdownRef = useRef(null);
    const cartQuantity = useSelector((state) => state.cart.items);
   

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


    const handleDisplayMenu = () =>{
        setMobileMenu(!mobileMenu);
    }

    return (
        <>
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
                        <Link to="/cart">Cart ({cartQuantity.length})</Link>
                    </li>
                </ul>
            </nav>
        </header>

        <header className={styles.mobile}>
            <div className={styles.mobile_header}>
            <div className={styles.mobile_logo}>
                <Link to="/">
                    <img src="/images/logo.png" alt="velvety-logo" />
                </Link>
            </div>

            <nav className={styles.mobile_nav}>
                <ul>
                    <li className={styles.mobile_nav_links}>
                        <Link to="/shop">Shop</Link>
                    </li>
                    <li className={styles.mobile_nav_links}>
                        <Link to="/cart">Cart ({cartQuantity.length})</Link>
                    </li>
                    <li className={styles.mobile_menu} onClick={handleDisplayMenu}>
                        <img src="/images/hamburger-menu.png" alt="mobile_menu" />
                    </li>
                </ul>
            </nav>
            </div>

            <nav className={`${styles.mobile_menu_nav} ${mobileMenu ? styles.mobile_menu_display : ""}`}>
                <div className={styles.mobile_menu_header}>
                   <div className={styles.mobile_menu_header_logo}>
                       <Link to="/">
                         <img src="/images/logo-dark.png" alt="velvety-logo" />
                       </Link>
                  </div>

                   <nav className={styles.mobile_menu_header_nav}>
                        <ul>
                            <li>
                               <Link to="/shop">Shop</Link>
                            </li>
                            <li>
                               <Link to="/cart">Cart <span>{cartQuantity.length}</span></Link>
                            </li>
                            <li className={styles.mobile_menu} onClick={handleDisplayMenu}>
                               <img src="/images/close-button.png" alt="close-btn" />
                            </li>
                        </ul>
                  </nav>
                </div>
           
                <ul className={styles.mobile_menu_nav_links}>
                   <li ref={dropdownRef} className={`${styles.mobile_page_dropdown}`} onClick={() => setPageDropdown(!pageDropdown)}>
                        Pages
                        <ul className={`${styles.mobile_dropdown_menu} ${pageDropdown ? styles.mobile_dropdown_open : styles.mobile_dropdown_hidden}`}>
                            {dropDown.map((dropdown, index) => (
                                <li key={index} className={styles.mobile_dropdown_list}>
                                    {dropdown}
                                </li>
                            ))}
                        </ul>
                    </li>    
                    <li className={styles.mobile_menu_links}>
                        <Link to="/shop">Shop</Link>
                    </li>
                    <li className={styles.mobile_menu_links}>
                        <Link>About</Link>
                    </li>
                    <li className={styles.mobile_menu_links}>
                        <Link to="/cart">Cart ({cartQuantity.length})</Link>
                    </li>
                </ul>
            </nav>

        </header>
    </>
    );
}

export default Header;
