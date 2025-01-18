import React from "react"
import styles from "./Shop.module.css"
import ProductList from "../../Features/Products/ProductsList";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

function Shop(){
    return(
        <>
          <div className={styles.shop_hero}>
            <Header />
            <video autoPlay loop muted>
              <source src="/video/shops-video.mp4" type="video/mp4" />
            </video>
            <div className={styles.shop_hero_text}>
            <h3>Radiant Skin, Confident You</h3>
            <h6>Indulge in skincare that loves you back. Discover natural, effective solutions for every skin type and glow like never before.</h6>
            </div>
          </div>
          <ProductList />

          <section className={styles.men_section}>
            <div className={styles.men_div}>
              <div className={styles.men_div_left}>
                <img src="/images/flowers.png" alt="sunflowers" />
                <h6>We are here to make daily routines 
                  better for your body and better for our 
                  planet - because small change can make 
                  a big impact. through our membership, we 
                  will be supporting the skin cancer 
                  foundation's work which provides 
                  the tools * education you need to prevent.</h6>
                  <button type="button">Learn More</button>
              </div>

              <div className={styles.men_div_right}>
                <img src="/images/man-skincare.png" alt="man-skincare" />
              </div>
            </div>
          </section>
          <Footer />
        </>
    );

}

export default Shop;