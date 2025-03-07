import React, {useState} from "react";
import styles from "./SelectedProduct.module.css";
import { useParams } from "react-router-dom";
import { useGetProductByIdQuery } from "../../Features/Products/productsApi";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ProductCard from "../../Features/Products/ProductCard";

function SelectedProduct(){
    const {id} = useParams();
    const {error, isLoading, data} = useGetProductByIdQuery(id);
    
    if (error) return <p>Error getting product</p>
    if (isLoading) return <p>Loading product</p>
    if (!data) return <p>Product not found</p>

    const product = data

    return(
        <>
        <Header headerColor={true}/>
        <div className={styles.selected_product_container}>
            <div className={styles.selected_product}>
              <ProductCard product={product} />
            </div>

            <div className={styles.selected_product_description}>
                <h2>{product.name}</h2>
                <p>{product.description}</p>
            </div>
        </div>
        <Footer />
       
        </>
    );
    
}



export default SelectedProduct;