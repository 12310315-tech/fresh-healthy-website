import React from 'react';
import Pomegranatejuice from '../assets/pomegranate.jpg';
import CoconutMilk from '../assets/coconutmilk.jpg';
import Tropical from '../assets/tropicalbliss.jpg';
import EnergyMix from '../assets/EnergyMix.jpg';
import ProductCard from '../components/ProductCard';

const Juices = () => {
  const juices = [
    {
      name: "Pomegranate Juice",
      price: "5.99",
      image: Pomegranatejuice,
      description: "100% pure pomegranate juice, rich in antioxidants"
    },
    {
      name: "Coconut Milk",
      price: "4.99",
      image: CoconutMilk,
      description: "Fresh coconut milk, creamy and naturally sweet"
    },
    {
      name: "Tropical Bliss",
      price: "6.99",
      image: Tropical,
      description: "Pineapple and Passionfruit juice blend"
    },
    {
      name: "Energy Mix",
      price: "5.99",
      image: EnergyMix,
      description: "Kiwi, Pineapple and ginger for natural energy"
    },
    
  ];

  const handleAddToCart = (product) => {
    console.log('Added to cart:', product);
  };

  return (
    <section className="products">
      <div className="container">
        <div className="section-title">
          <h2>Fresh Juices</h2>
          <p>Cold-pressed juices packed with vitamins and nutrients</p>
        </div>
        
        <div className="products-grid">
          {juices.map((juice, index) => (
            <ProductCard
              key={index}
              name={juice.name}
              price={juice.price}
              image={juice.image}
              description={juice.description}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Juices;