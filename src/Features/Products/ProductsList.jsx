import React, { useState } from "react";
import styles from "./ProductList.module.css";
import ProductCard from "./ProductCard";
import { useGetAllProductsQuery } from "../../Features/Products/productsApi";

function ProductList() {
    const { error, isLoading, data } = useGetAllProductsQuery();

    if (error) return <p>Error loading products</p>;
    if (isLoading) return <p>Loading products...</p>;

    const [displayProducts, setDisplayProducts] = useState(8);
    const minProductsToDisplay = 8;

    const handleDisplayMore = () => {
        setDisplayProducts((prevDisplayProducts) => prevDisplayProducts + 8);
    };

    const handleDisplayLess = () => {
        setDisplayProducts((prevDisplayProducts) =>
            Math.max(prevDisplayProducts - 8, minProductsToDisplay)
        );
    };
    
    return (
        <div className={styles.product_list_container}>
        <h2>Explore our Wide Range of Products</h2>
            <div className={styles.product_list}>
                {data.products.slice(0, displayProducts).map((product) => (
                    <ProductCard key= {product.id} product={product} />
                ))}
            </div>
            {displayProducts < data.products.length && (
                <button onClick={handleDisplayMore}>Load More</button>
            )}
            {displayProducts > minProductsToDisplay && (
                <button onClick={handleDisplayLess}>Show Less</button>
            )}

        </div>
    );
}

export default ProductList;
