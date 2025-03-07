import React, {useRef} from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Home.module.css";
import Header from "../../components/Header/Header";
import ImageSlider from "../../components/ImageSlider/ImageSlider";
import Featured from "../../components/Featured/Featured";
import Testimonials from "../../components/Testimonials/Testimonials";
import HomeProducts from "../../components/HomeProducts/HomeProducts";
import Footer from "../../components/Footer/Footer";


function Home() {
  const aboutRef = useRef();
  const navigate = useNavigate();

  const slides = [
    {image: "/images/blossom.svg", title: "blossom"},
    {image: "/images/holocena-hero.svg", title: "holocena"},
    {image: "/images/notorious-hero.svg", title: "notorious"},
    {image: "/images/chicori-hero.svg", title: "chicori"},
  ]

  const goToShop = () =>{
    navigate("/shop");
  }

  return (
    <>
      <section className={styles.hero_section}>
      <Header aboutRef={aboutRef}/>
      <section className={styles.hero}>
        <div className={styles.hero_left}>
          <div className={styles.image_slider}>
            <ImageSlider slides={slides} />
          </div>
        </div>
        <div className={styles.hero_right}>
          <img src="/images/hero-plants.png" alt="green-leaves" />
          <div>
          <h1>
            Let nature take care of your body and soul
          </h1>
          <button onClick={goToShop}>Shop now <img src="/images/shop-arrow.png" alt="arrow-left" /></button>
          </div> 
        </div>
        </section>
      </section>

      <section className={styles.hero_mobile}>
        <Header aboutRef={aboutRef}/>
        <div className={styles.hero_mobile_container}>
          <div>
            <h2>Let nature take care of your body and soul</h2>
            <button>Shop now <img src="/images/shop-arrow.png" alt="arrow-left" /></button>
          </div>
          <div className={styles.hero_mobile_slides}>
            <ImageSlider slides={slides} />
          </div>
        </div> 
      </section>

      <section className={styles.ingredients_section}>
        <div className={styles.ingredients_left}>
          <h2>
            Inspired by traditional knowledge and nature
          </h2>
          <img src="/images/ingredients.png" alt="ingredients-and-leaves" />
        </div>
        
        <div className={styles.ingredients_right}>
          <div className={styles.ingredients}>
            <div className={styles.ingredient_icon}>
              <img src="/images/organic.png" alt="100%-organic" />
            </div>
            <div className={styles.ingredient_text}>
              <h6>100% Organic</h6>
              <p>
                We craft skincare using the most exquisite ingredients from{" "}
                the plant, earth and mineral realms.
              </p>
            </div>
          </div>

          <div className={styles.ingredients}>
            <div className={styles.ingredient_icon}>
              <img src="/images/skin.png" alt="fits-your-skin" />
            </div>
            <div className={styles.ingredient_text}>
              <h6>Fits your Skin</h6>
              <p>
                I'ts all natural and processed based on traditional <br />
                knowledge with modern technology.
              </p>
            </div>
          </div>

          <div className={styles.ingredients}>
            <div className={styles.ingredient_icon}>
              <img src="/images/serum.png" alt="easy-to-use" />
            </div>
            <div className={styles.ingredient_text}>
              <h6>Easy to Use</h6>
              <p>
                Packed with a unique design as well as usefull that can 
                help you perform routine skin care.
              </p>
            </div>
          </div>
        </div>
      </section>

     <Featured />

      <section className={styles.about_section} ref={aboutRef}>
        <div className={styles.about_us}>
          <div className={styles.about_headline}>
            <h6>About us</h6>
            <h2>Velvety facial and
             skincare company</h2>
          </div>

          <div className={styles.about_description}>
            <p>Velvety is an indigenous company that specializes in the manufacture and 
              development of facial and skincare products using the medicinal properties of 
              the traditional First Nations pharmacopoeia, with a concern for sustainable development.
           </p><br />
           <p>The products offered, whose benefits have been scientifically confirmed, are 
              100% natural and allow you to take care of your body and mind: calming teas, 
              energizing infusions, anti-inflammatory essential oils, anti-age soaps and creams, etc.
           </p>
          </div>
        </div>
        <hr className={styles.separator}/>

         <div className={styles.as_seen}>
          <h6>As seen in</h6>
        <div className={styles.listing_company}>
          <div>
            <img src="/images/vogue.png" alt="vogue" />
          </div>
          <div>
            <img src="/images/forbes.png" alt="forbes" />
          </div>
          <div>
            <img src="/images/thoughts.png" alt="thought-catalog" />
          </div>
          <div>
            <img src="/images/women-health.png" alt="women's-health" />
          </div>
          <div>
            <img src="/images/wwd.png" alt="wwd" />
          </div>
        </div>
        </div>

        <div className={styles.cta}>
          <h4>Let's see the processing of our products</h4>
          <img src="/images/arrow-left.png" alt="arrow-left" />
        </div>
      </section>

      <HomeProducts />

      <section className={styles.our_service}>
        <div className={styles.service_image}>
          <img src="/images/abstract.png" alt="abstract-image" />
        </div>
        <div className={styles.service_content}>
          <h6>Try Our Service</h6>
          <h2>Your skin diagnosis in 3 minutes</h2>
          <p>Say hello to a more radiant, healthier you with 
            personalized skincare that's as unique as you are.
          </p>
          <button className={styles.cta_btn}>Start my diagnosis <img src="/images/shop-arrow.png" alt="arrow-left" /></button>
        </div>
      </section>
      <Testimonials />
      <section className={styles.cta_section}>
        <div>
          <img src="/images/happy-skin.png" alt="happy-skin" />
          <h6>Loyalty Program</h6>
          <h3>For Happy Skin</h3>
          <button type="button">Join the program</button>
        </div>

        <div>
          <img src="/images/sponsor.png" alt="refer-friend" />
          <h6>Organic beauty is shared</h6>
          <h3>Sponsor those you love!</h3>
          <button type="button">Refer a friend</button>
        </div>

        <div>
          <img src="/images/beauty-treatment.png" alt="beauty-treatement" />
          <h6>Treat yourself to good weather</h6>
          <h3>at Maison Absolution</h3>
          <button type="button">Try our treatments</button>
        </div>
      </section>
      <Footer />
    </>
  );
}
export default Home;
