import React from 'react';
import './CartPage.css';

const CartPage = ({ cart, onBack, onClearCart }) => {
  // Sortera produkterna i varukorgen baserat på deras namn
  const sortedCart = [...cart].sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className="cart-container">
      <h1 className="header">Varukorg</h1>
      <div className="cart-items">
        {sortedCart.map((item, index) => (
          <div key={index} className="cart-item">
            <img src={item.image} alt={`Produkt ${index + 1}`} className="cart-item-image" style={{ width: '100px', height: 'auto' }} />
            <div className="cart-item-details">
              <span className="cart-item-name">{item.name}</span>
              <span className="cart-item-quantity">Antal: {item.quantity}</span>
            </div>
            <span className="cart-item-price">Pris: {item.price}</span>
          </div>
        ))}
      </div>
      <button onClick={onBack} className="back-to-products-button">Tillbaka till produkter</button>
      <button onClick={onClearCart} className="back-to-products-button">Rensa varukorg</button>
    </div>
  );
};

export default CartPage;