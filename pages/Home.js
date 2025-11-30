import React from 'react';
import HeroSlider from '../components/HeroSlider';
import ProductCard from '../components/ProductCard';
import ChickenCeaser from '../assets/ChickenCeaser.jpg';
import Pomegranatejuice from '../assets/pomegranate.jpg';
import DragonFruit from '../assets/DragonFruit.jpg';


const Home = () => {
  const featuredProducts = [
    {
      name: "Chicken Caesar Salad",
      price: "12.99",
      image: ChickenCeaser,
      description: "Fresh romaine lettuce with grilled chicken, parmesan, and our signature Caesar dressing"
    },
    {
      name: "Pomegranate Juice",
      price: "5.99",
      image: Pomegranatejuice,
      description: "100% pure pomegranate juice, cold-pressed to preserve nutrients and flavor"
    },
    {
      name: "Dragon Fruit",
      price: "4.99",
      image: DragonFruit ,
      description: "Exotic dragon fruit with vibrant pink flesh, packed with antioxidants and vitamins"
    }
  ];

  const handleAddToCart = (product) => {
    console.log('Added to cart:', product);
    // Here you would typically add to a cart context or state
  };

  return (
    <div>
      <HeroSlider />
      
      <section className="products" id="featured">
        <div className="container">
          <div className="section-title">
            <h2>Our Featured Products</h2>
            <p>Discover our most popular healthy options that customers love</p>
          </div>
          
          <div className="products-grid">
            {featuredProducts.map((product, index) => (
              <ProductCard
                key={index}
                name={product.name}
                price={product.price}
                image={product.image}
                description={product.description}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;