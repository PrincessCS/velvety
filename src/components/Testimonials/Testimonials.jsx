import React, { useState, useEffect } from "react";
import { useGetAllProductsQuery } from "../../Features/Products/productsApi";
import styles from "./Testimonials.module.css";

function Testimonials() {
  const { error, isLoading, data } = useGetAllProductsQuery();
  const products = data?.products || [];

  // Ensure testimonialProducts has a default empty array
  const testimonialProducts = products.length > 0 ? products.slice(0, 4) : [];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (testimonialProducts.length === 0) return;

    const slideInterval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonialProducts.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(slideInterval);
  }, [testimonialProducts.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialProducts.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonialProducts.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  if (error) return <p>There was an error loading products</p>;
  if (isLoading) return <p>Products are loading...</p>;
  if (testimonialProducts.length === 0) return <p>No testimonials available.</p>;

  const currentProduct = testimonialProducts[currentIndex];

  return (
    <div className={styles.testimonial_container}>
      {currentProduct && (
        <section className={styles.product_testimonials} key={currentProduct.id}>
          <div className={styles.product_testimonial_image}>
            <img src={`/images/${currentProduct.image}`} alt={currentProduct.name} />
          </div>

          <div className={styles.product_testimonial}>
            <h6>Product Testimonials</h6>
            <img src="/images/rating-5.0.png" alt="rating" />
            <h3>{currentProduct.testimonial}</h3>
            <p>~ Customer Review</p>
          </div>

          <div className={styles.testimonial_slider_nav}>
            <button onClick={prevSlide} className={styles.prev_button}>
              <img src="/images/testimonial-left.png" alt="previous" />
            </button>

            {testimonialProducts.map((_, slideIndex) => (
              <div
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
                className={`${styles.slide_dots} ${slideIndex === currentIndex ? styles.active : ""}`}
              >
                •
              </div>
            ))}

            <button onClick={nextSlide} className={styles.next_button}>
              <img src="/images/testimonial-right.png" alt="next" />
            </button>
          </div>
        </section>
      )}
    </div>
  );
}

export default Testimonials;
