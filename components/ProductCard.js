import React from 'react';

const ProductCard = ({ name, price, image, description, onAddToCart }) => {
  const handleAddToCart = () => {
    if (onAddToCart) {
      onAddToCart({ name, price, image });
    }
    
    // Show notification
    const notification = document.createElement('div');
    notification.textContent = `${name} added to cart!`;
    notification.style.cssText = `
      position: fixed;
      top: 100px;
      right: 20px;
      background: #27ae60;
      color: white;
      padding: 15px 20px;
      border-radius: 12px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.08);
      z-index: 1000;
      transition: all 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
      notification.style.opacity = '0';
      setTimeout(() => {
        document.body.removeChild(notification);
      }, 300);
    }, 3000);
  };

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={image} alt={name} />
      </div>
      <div className="product-info">
        <h3>{name}</h3>
        <p>{description}</p>
        <div className="product-price">
          <span className="price">${price}</span>
          <button className="add-to-cart" onClick={handleAddToCart}>
            <i className="fas fa-shopping-cart"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;