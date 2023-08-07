import React, { useEffect } from 'react';
import './ThankYouPage.css'; 
import logogif from '../assets/images/delivery.gif';

const ThankYouPage = () => {
  useEffect(() => {
    // Scroll to the thank-you-box element on page load
    const scrollToThankYouBox = () => {
      const thankYouBox = document.getElementById('thank-you-box');
      if (thankYouBox) {
        thankYouBox.scrollIntoView({ behavior: 'smooth' });
      }
    };

    scrollToThankYouBox();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 col-sm-12">
          <div className="gif-container">
            <img src={logogif} alt="Delivery GIF" />
          </div>
          <div id="thank-you-box" className="thank-you-box">
            <h2>Thank You for Your Order!</h2>
            <p>Your delicious food is on its way.</p>
            <p>Estimated delivery time: 30 minutes</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;
