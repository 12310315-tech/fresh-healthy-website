import ChickenCeaser from '../assets/ChickenCeaser.jpg';
import Tropical from '../assets/tropicalbliss.jpg';
import GreekSalad from '../assets/greeksalad.jpg';
import React, { useState, useEffect } from 'react';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: GreekSalad,
      title: "Welcome to Fresh & Healthy",
      subtitle: "Discover the freshest ingredients for a healthier lifestyle"
    },
    {
      image: ChickenCeaser,
      title: "Fresh Salads Daily",
      subtitle: "Made with love and the finest ingredients"
    },
    {
      image: Tropical,
      title: "Natural Juices & Fruits",
      subtitle: "100% natural and packed with nutrients"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="hero-slider">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === currentSlide ? 'active' : ''}`}
        >
          <div 
            className="slide-bg" 
            style={{ backgroundImage: `url(${slide.image})` }}
          ></div>
          <div className="slide-content">
            <h1>{slide.title}</h1>
            <p>{slide.subtitle}</p>
            <a href="#featured" className="btn">Explore Our Menu</a>
          </div>
        </div>
      ))}
      
      <div className="slider-controls">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`slider-dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;