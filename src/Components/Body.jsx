import React from 'react';

const Body = ({ text, image }) => {
  return (
    <div className="body-content">
      <h1>{text}</h1>
      <img src={image} alt="Imagen principal" className="main-image" />
    </div>
  );
};

export default Body;
