import React from "react";
import styles from "./Featured.module.css";
import ProductCard from "../../Features/Products/ProductCard";
import { useGetAllProductsQuery } from "../../Features/Products/productsApi";

function Featured(){
    const {error, isLoading, data} = useGetAllProductsQuery();
    console.log(data);
    if(error) return <p>There was an error loading products</p>
    if (isLoading) return <p>Products loading...</p>
    
    const products = data.products || [];
    const featuredProducts = products.slice(0, 3);
    
    return(
        <>
        <section className={styles.featured_products}>
            <h6>Our featured products</h6>
            <h2>Facial and skincare, natural and <br/> certified organic</h2>
            <div className={styles.product_listing}>
                {featuredProducts.map((product) => (
                      <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </section>
        </>
    );
}

export default Featured;