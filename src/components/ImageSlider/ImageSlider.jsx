import React, { useState, useEffect } from "react";
import styles from "./ImageSlider.module.css";

function ImageSlider({ slides }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); 
    return () => clearInterval(slideInterval);
  }, [slides.length]);

 
   const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (slideIndex) =>{
    setCurrentIndex(slideIndex);
  }

  return (
    <>
    <div className={styles.image_slider_styles}>
      <img src={slides[currentIndex].image} alt={slides[currentIndex].title} />
    </div>

    <div className={styles.image_slider_nav}>
      <button onClick={prevSlide} className={styles.prev_button}>
        <img src="/images/hero-arrow-left.png" alt="previous" />
      </button>
      {slides.map((slide, slideIndex)=>(
        <div key={slideIndex} onClick={() => goToSlide(slideIndex)} className={`${styles.slide_dots} ${
                      slideIndex === currentIndex ? styles.active : ""}`}>•</div>
      ))}
      <button onClick={nextSlide} className={styles.next_button}>
        <img src="/images/hero-arrow-right.png" alt="next" />
      </button>
    </div>
    </>
  );
}

export default ImageSlider;
