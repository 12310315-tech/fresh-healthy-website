import React from 'react';
import DragonFruit from '../assets/DragonFruit.jpg';
import Peanut from '../assets/peanut.jpg';
import Almond from '../assets/Almond.jpg';
import Melon from '../assets/Melon.jpg';
import Peach from '../assets/peach.jpg';
import Coconut from '../assets/coconut.jpg';
import Blackberry from '../assets/BlackBerry.jpg';
import Clementine from '../assets/Clementine.jpg';
import Raspberry from '../assets/raspberry.jpg';
import ProductCard from '../components/ProductCard';

const Fruits = () => {
  const fruits = [
    {
      name: "Dragon Fruit",
      price: "4.99",
      image: DragonFruit,
      description: "Exotic fruit with vibrant pink flesh and subtle sweetness"
    },
    {
      name: "Peanuts",
      price: "3.99",
      image: Peanut,
      description: "Fresh raw peanuts, perfect for snacking or recipes"
    },
    {
      name: "Almonds",
      price: "8.99",
      image: Almond,
      description: "Premium California almonds, rich and nutritious"
    },
    {
      name: "Melon",
      price: "5.99",
      image: Melon,
      description: "Sweet and juicy cantaloupe, perfect for summer"
    },
    {
      name: "Peach",
      price: "3.49",
      image: Peach,
      description: "Juicy, sweet peaches with fuzzy skin and tender flesh"
    },
    {
      name: "Coconut",
      price: "2.99",
      image: Coconut,
      description: "Fresh whole coconut with refreshing water and meat"
    },
    {
      name: "Blackberry",
      price: "4.49",
      image: Blackberry,
      description: "Plump, sweet blackberries packed with antioxidants"
    },
    {
      name: "Raspberry",
      price: "4.79",
      image: Raspberry,
      description: "Delicate raspberries with a perfect balance of sweet and tart"
    },
    {
      name: "Clementine",
      price: "3.99",
      image: Clementine,
      description: "Sweet, easy-to-peel clementines, perfect for snacking"
    }
  ];

  const handleAddToCart = (product) => {
    console.log('Added to cart:', product);
  };

  return (
    <section className="products">
      <div className="container">
        <div className="section-title">
          <h2>Fresh Fruits</h2>
          <p>Premium selection of organic and exotic fruits</p>
        </div>
        
        <div className="products-grid">
          {fruits.map((fruit, index) => (
            <ProductCard
              key={index}
              name={fruit.name}
              price={fruit.price}
              image={fruit.image}
              description={fruit.description}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Fruits;