// ProductPage.js
import React, { useState, useEffect } from 'react';
import Product from './Product';
import './ProductPage.css'

function ProductPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch product data
    // Example:
    fetch('https://example.com/api/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <div className="product-page">
      <h1>Our Products</h1>
      <div className="product-list">
        {products.map(product => (
          <Product
            key={product.id}
            name={product.name}
            description={product.description}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductPage;
