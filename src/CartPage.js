import React, { useState, useEffect } from 'react';
import './CartPage.css';

const CartPage = ({ cart, onBack, onClearCart }) => {
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [cartItems, setCartItems] = useState([...cart]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    // Beräkna totalpriset när cartItems ändras
    const newTotalPrice = cartItems.reduce((total, item) => total + (item.totalPrice || 0), 0);
    setTotalPrice(newTotalPrice);
  }, [cartItems]);

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handleQuantityChange = (index, newQuantity) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems[index].quantity = newQuantity;
    updatedCartItems[index].totalPrice = updatedCartItems[index].price * newQuantity;
    setCartItems(updatedCartItems);
  };

  const handleRemoveItem = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    setCartItems(updatedCartItems);
  };

  return (
    <div className="cart-container">
      <h1 className="header">Varukorg</h1>
      <div className="cart-items">
        {cartItems.map((item, index) => (
          <div key={index} className="cart-item">
            <img src={item.image} alt={`Produkt ${index + 1}`} className="cart-item-image" style={{ width: '100px', height: 'auto' }} />
            <div className="cart-item-details">
              <span className="cart-item-name">{item.name}</span>
              <span className="cart-item-quantity">Antal: 
                <input 
                  type="number" 
                  value={item.quantity} 
                  onChange={(e) => handleQuantityChange(index, parseInt(e.target.value))}
                  min="1" 
                />
              </span>
            </div>
            <span className="cart-item-price">Pris: {item.price} kr</span>
            <span className="cart-item-total-price">Totalt: {item.totalPrice} kr</span>
            <button onClick={() => handleRemoveItem(index)}>Ta bort</button>
          </div>
        ))}
      </div>

      <div className="total-price">
        <span>Totalt pris: {totalPrice} kr</span>
      </div>

      <div className="navigation-buttons">
        <button onClick={onBack}>Tillbaka till produkter</button>
        <button onClick={onClearCart}>Rensa varukorg</button>
      </div>
    </div>
  );
};

export default CartPage;