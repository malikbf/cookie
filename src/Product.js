// Product.js
import React from 'react';
import rafaello from './raffaello.jpg'

function Product({ name, description, image }) {
  return (
    <div className="product">
      <img src={rafaello} />
      <h2>rafaello</h2>
      <p>a detailed description of your product</p>
    </div>
  );
}

export default Product;