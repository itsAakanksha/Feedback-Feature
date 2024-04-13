import React, { useState, useEffect } from "react";
import svg from "../../../config";
import "./Rateus.css";

const RateUs = ({ showRateUs ,setShowRateUs }) => {
  const [rating, setRating] = useState(0);
  const [showThanks, setShowThanks] = useState(false);

  // Automatically close the thanks card after 2000ms
  useEffect(() => {
    if (showThanks) {
      const timer = setTimeout(() => {
        setShowThanks(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [showThanks]);

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handleClose = () => {
    setShowRateUs(false);
  };

  const handleSubmit = () => {
    // Submit the rating (you can add your logic here)
    // For demo purpose, we'll just show the thanks card
    setShowThanks(true);
    setShowRateUs(false)
  };

  return showRateUs && !showThanks ? (
    <div className="rate-us-overlay">
      <div className="rate-us-card">
        <button className="close-icon" onClick={handleClose}>
          <img src={svg.close} alt="Close" />
        </button>
        <h2 className="rate-us-title">Rate Us</h2>
        <p className="rate-us-description">
        Rate your experience with us!
        </p>
        <div className="rate-us-stars">
          {[...Array(5)].map((_, index) => (
            <i
            key={index}
            className={`fa-regular fa-star star-icon ${index < rating ? "filled fa-solid" : ""}`}
            onClick={() => handleRatingChange(index + 1)}
            ></i>
          ))}
        </div>
        {rating > 0 && (
          <button className="submit-button" onClick={handleSubmit}>
            Submit
          </button>
        )}
      </div>
     
    </div>
  ) :  showThanks && (
    <div className="rate-us-overlay">
    <div className="rate-us-card">
    <button className="close-icon" onClick={handleClose}>
    <img src={svg.close} alt="Close" />
  </button>
    <div className="thanks-card">
    <p>Thank you for taking the time to rate us!</p>
    </div>
    </div>
    </div>
  );
};

export default RateUs;










// <i
// key={index}
// className={`fa-regular fa-star star-icon ${index < rating ? "filled fa-solid" : ""}`}
// onClick={() => handleRatingChange(index + 1)}
// ></i>