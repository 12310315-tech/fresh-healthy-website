import React from 'react';
import GreekSalad from '../assets/greeksalad.jpg';
import ChickenCeaser from '../assets/ChickenCeaser.jpg';
import MexicanSalad from '../assets/Mexican.jpg';
import Goatcheese from '../assets/goatCheese.jpg';

import ProductCard from '../components/ProductCard';

const Salads = () => {
  const salads = [
    {
      name: "Chicken Caesar",
      price: "12.99",
      image: ChickenCeaser,
      description: "Crisp romaine, grilled chicken, parmesan, croutons, and Caesar dressing"
    },
    {
      name: "Goat Cheese",
      price: "10.99",
      image: Goatcheese,
      description: "Mixed greens, creamy goat cheese, walnuts, cranberries, and balsamic vinaigrette"
    },
    {
      name: "Mexican Salad",
      price: "11.99",
      image: MexicanSalad,
      description: "Black beans, corn, avocado, tomatoes, and tortilla strips with lime cilantro dressing"
    },
    {
      name: "Greek Salad",
      price: "9.99",
      image: GreekSalad ,
      description: "Cucumbers, tomatoes, red onions, olives, and feta cheese with Greek dressing"
    }
  ];

  const handleAddToCart = (product) => {
    console.log('Added to cart:', product);
  };

  return (
    <section className="products">
      <div className="container">
        <div className="section-title">
          <h2>Our Fresh Salads</h2>
          <p>Handcrafted salads made with the freshest ingredients</p>
        </div>
        
        <div className="products-grid">
          {salads.map((salad, index) => (
            <ProductCard
              key={index}
              name={salad.name}
              price={salad.price}
              image={salad.image}
              description={salad.description}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Salads;