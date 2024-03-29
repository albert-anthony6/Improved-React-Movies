import React from 'react';
  
  const LeftArrow = ({goToPrevSlide}) => {
    return (
      <div className="backArrow arrow" onClick={goToPrevSlide}>
        <i className="fa fa-arrow-left fa-2x" aria-hidden="true"></i>
      </div>
    );
  }
  
  export default LeftArrow;