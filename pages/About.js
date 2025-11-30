import React from 'react';
import Raspberry from '../assets/raspberry.jpg';

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="section-title">
          <h2>About Fresh & Healthy</h2>
          <p>Our commitment to quality and your well-being</p>
        </div>
        
        <div className="about-content">
          <div className="about-image">
            <img src={Raspberry} alt="About Fresh & Healthy" />
          </div>
          
          <div className="about-text">
            <h3>Our Story of Health & Freshness</h3>
            <p>At Fresh & Healthy, we believe that good health starts with what you eat. Our mission is to provide you with the freshest, most nutritious foods that nature has to offer. From crisp, vibrant salads bursting with flavor to revitalizing juices packed with vitamins and antioxidants, every item on our menu is carefully crafted to nourish your body and delight your taste buds.</p>
            
            <p>We source our ingredients from local farmers and trusted suppliers who share our commitment to quality and sustainability. Whether you're looking for a quick, healthy lunch, refreshing beverages, or fresh fruits to enjoy at home, we're here to support your wellness journey with delicious, wholesome options that make eating healthy an absolute pleasure.</p>
            
            <div className="features">
              <div className="feature">
                <i className="fas fa-seedling"></i>
                <div>
                  <h4>100% Organic</h4>
                  <p>All our products are certified organic and free from harmful chemicals.</p>
                </div>
              </div>
              
              <div className="feature">
                <i className="fas fa-truck"></i>
                <div>
                  <h4>Fast Delivery</h4>
                  <p>We deliver fresh to your doorstep within 2 hours of ordering.</p>
                </div>
              </div>
              
              <div className="feature">
                <i className="fas fa-heart"></i>
                <div>
                  <h4>Healthy Choices</h4>
                  <p>Every item is nutritionist-approved for a balanced diet.</p>
                </div>
              </div>
              
              <div className="feature">
                <i className="fas fa-award"></i>
                <div>
                  <h4>Premium Quality</h4>
                  <p>We select only the finest ingredients for our customers.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;