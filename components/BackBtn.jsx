"use client"

import React, { useState, useEffect } from 'react';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down 300px
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll the window to the top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    
    // Clean up the listener on unmount
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div className="back-to-top ">
      {isVisible && (
        <button 
          onClick={scrollToTop}
          style={styles.button}
          aria-label="Back to top"
        >
          ↑
        </button>
      )}
    </div>
  );
};

// Basic inline styling for quick setup
const styles = {
  button: {
    position: 'fixed',
    bottom: '90px',
    right: '30px',
    padding: '10px 15px',
    fontSize: '20px',
    backgroundColor: '#ff6600',
    color: '#fff',
    border: 'none',
    borderRadius: '50px',
    cursor: 'pointer',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    zIndex: 1000,
  },
};

export default BackToTop;