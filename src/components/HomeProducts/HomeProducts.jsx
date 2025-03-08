import React, { useState, useEffect } from "react";
import { useGetAllProductsQuery } from "../../Features/Products/productsApi";
import styles from "./HomeProducts.module.css";
import { useNavigate } from "react-router-dom";
import ProductCard from "../../Features/Products/ProductCard";

function HomeProducts() {
    const { error, isLoading, data } = useGetAllProductsQuery();
    const navigate = useNavigate();

    const categories = [
        "All needs",
        "Protects",
        "Regenerates",
        "Revitalizes",
        "Feeds",
        "Regulates",
        "Purifies",
        "Makeup Removal",
        "Exfoliates",
        "Antioxidant",
        "Soothes",
        "Smoothes skin texture",
        "Tones",
        "Anti-waste",
        "Hydrates",
        "Strengthens",
        "Regenerates after UV exposure",
    ];

    const [productCategory, setProductCategory] = useState("All needs");
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        if (!data?.products) return;
        
        if (productCategory === "All needs") {
            setFilteredProducts(data.products.slice(3, 7));
        } else {
            setFilteredProducts(data.products.filter((product) => product.category === productCategory));
        }
    }, [data, productCategory]);

    const handleFilteredProducts = (category) => {
        setProductCategory(category);
    };

    const shopNow = () => {
        navigate("/shop");
    };

    return (
        <section className={styles.home_products}>
            {error && <p>Error loading products</p>}
            {isLoading && <p>Loading products...</p>}
            {!error && !isLoading && (
                <div className={styles.home_products_container}>
                    <div className={styles.home_products_left}>
                        <h6>All Products</h6>
                        <h3>Mild skincare & facial routine</h3>
                        <div className={styles.product_listing_categories}>
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    className={`${styles.category_button} ${productCategory === category ? styles.active : ""}`}
                                    onClick={() => handleFilteredProducts(category)}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className={styles.home_products_right}>
                        <div className={styles.filtered_products}>
                            {filteredProducts.length > 0 ? (
                                filteredProducts.map((product) => (
                                    <ProductCard key={product.id} product={product} />
                                ))
                            ) : (
                                <div className={styles.no_items}>
                                    <img src="/images/no-items.png" alt="no-items-found" />
                                    <h2>No Items found!</h2>
                                    <p>This category will be available shortly. <br />
                                        Explore other products. Happy shopping!</p>
                                </div>
                            )}
                        </div>
                        {filteredProducts.length > 0 && (
                            <button onClick={shopNow} className={styles.shop_now_btn}>
                                Shop now <img src="/images/shop-arrow.png" alt="shop" />
                            </button>
                        )}
                    </div>
                </div>
            )}
        </section>
    );
}

export default HomeProducts;
