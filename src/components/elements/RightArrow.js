import React from 'react';

const RightArrow = ({goToNextSlide}) => {
    return (
      <div className="nextArrow arrow" onClick={goToNextSlide}>
        <i className="fa fa-arrow-right fa-2x" aria-hidden="true"></i>
      </div>
    );
  }
  
  export default RightArrow;