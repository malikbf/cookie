import React, { useState } from 'react';
import './contactPage.css';
import CartPage from './CartPage';

const products = [
  { id: 1, name: "TOBLERONE CYLINDER", price: 329 },
  { id: 2, name: "DAIM MINI CYLINDER", price: 490 },
  { id: 3, name: "MARABOU MJÖLK CYLINDER", price: 469},
  { id: 4, name: "MINICCO SURA BAND COLA", price: 199},
  { id: 5, name: "MINICCO SURA BAND RAINBOW", price: 199  },
  { id: 6, name: "BJÖRNAR KLUBBMIX AUTOMAT", price: 320},
  { id: 7, name: "PATRONER FIZZY BUBBLE", price: 310 },
  { id: 8, name: "BANANA SKIDS", price: 245},
  { id: 9, name: "FLYGANDE TEFAT SURA 375G", price: 329 },
  { id: 10, name: "MORMOR LISAS COCOSBOLL 1,6 kg", price: 215},
  { id: 11, name: "MINICCO SURA BAND ÄPPLE", price: 199},
  { id: 12, name: "SURA TUNGOR 1.2KG", price: "255 kr (1,2kg)" },
  { id: 13, name: "MORMOR LISAS KROKANTBOLL 1,8 kg", price: 259},
  { id: 14, name: "MINICCO SURA BAND RAINBOW", price: 199},
  { id: 15, name: "MARABOU TWIST CYLINDER", price: 389},
  { id: 16, name: "RAFFAELLO HEART 140G", price: 189 },
  { id: 17, name: "PATRONER FIZZY BUBBLE", price: 310 },
  { id: 18, name: "PATRONER SALTA", price: 310  },
  { id: 19, name: "PATRONER HALLON/LAKRITS", price: 310 },
  { id: 20, name: "FERRERO ROCHER HEART 125G", price: 199},
  { id: 21, name: "TROLLI ALL IN ONE 1KG", price: 245 }
];

const sortedProducts = [...products].sort((a, b) => a.price - b.price);

const ContactPage = () => {
  const [quantities, setQuantities] = useState(new Array(sortedProducts.length).fill(0));
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState('');
  const [totalPrice, setTotalPrice] = useState(0); // Lägg till useState för totalPrice

  const handleIncrement = (index) => {
    setQuantities(prevQuantities => {
      const newQuantities = [...prevQuantities];
      newQuantities[index] += 1;
      return newQuantities;
    });
  };

  const handleDecrement = (index) => {
    setQuantities(prevQuantities => {
      const newQuantities = [...prevQuantities];
      newQuantities[index] = Math.max(newQuantities[index] - 1, 0);
      return newQuantities;
    });
  };

  const handleAddToCart = () => {
    const productsToAdd = sortedProducts.map((product, index) => {
      if (quantities[index] > 0) {
        const totalPrice = parseFloat(product.price) * quantities[index];
        return {
          ...product,
          quantity: quantities[index],
          image: require(`./bilder/bild${product.id}.png`),
          totalPrice: totalPrice
        };
      }
      return null;
    }).filter(product => product !== null);
    setCart(prevCart => [...prevCart, ...productsToAdd]);

    // Beräkna totalpriset för hela varukorgen när produkter läggs till
    const newTotalPrice = cart.reduce((total, item) => total + (item.totalPrice || 0), 0) + productsToAdd.reduce((total, item) => total + (item.totalPrice || 0), 0);
    setTotalPrice(newTotalPrice);

    setMessage('Produkterna har lagts till i varukorgen');
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 3000);
  };

  const handleToggleCart = () => {
    setShowCart(prevShowCart => !prevShowCart);
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const handleBackToProducts = () => {
    setShowCart(false);
  };

  return (
    <div className='backgroundcolor'>
      {showMessage && <div className="message">{message}</div>}
      {showCart ? (
        <CartPage cart={cart} onBack={handleBackToProducts} onClearCart={handleClearCart} />
      ) : (
        <>
          <h1 className="header">Våra produkter</h1>  
          <div className="produkt-container">
            {sortedProducts.map((product, index) => (
              <div key={index} className="produkt-item">
                <img src={require(`./bilder/bild${product.id}.png`)} alt={`Produkt ${index + 1}`} className="produkt-image" />
                <div className="produkt-details">
                  <span className="produkt-price">{product.price} kr</span>
                  <div className="quantity-controls">
                    <button onClick={() => handleDecrement(index)}>-</button>
                    <span>{quantities[index]}</span>
                    <button onClick={() => handleIncrement(index)}>+</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="button-container">
            <button onClick={handleAddToCart} className="add-to-cart-button">Lägg alla produkter i varukorgen</button>
            <button onClick={handleToggleCart} className="show-cart-button">Visa varukorg</button>
          </div>
          <div>Totalt pris: {totalPrice} kr</div> {/* Lägg till totalpris här */}
        </>
      )}
    </div>
  );
};

export default ContactPage;