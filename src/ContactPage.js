import React, { useState } from 'react';
import './contactPage.css'; // Importera din CSS-fil
import CartPage from './CartPage'; // Importera varukorgskomponenten

// Importera alla bilder med en loop
const images = [];
for (let i = 1; i <= 21; i++) {
  images.push(require(`./bilder/bild${i}.png`));
}

// Uppdaterad array med produkter, innehåller både namn och pris
const products = [
  { id: 1, name: "TOBLERONE CYLINDER", price: "329 kr per cylinder (0,9kg)" },
  { id: 2, name: "DAIM MINI CYLINDER", price: "490 kr per cylinder (2,5KG)" },
  { id: 3, name: "MARABOU MJÖLK CYLINDER", price: "469 kr per cylinder (2kg)" },
  { id: 4, name: "MINICCO SURA BAND COLA", price: "199 kr (1,5 kg låda)" },
  { id: 5, name: "MINICCO SURA BAND RAINBOW", price: "199 kr (1,5 kg låda)" },
  { id: 6, name: "BJÖRNAR KLUBBMIX AUTOMAT", price: "320 kr per automat (180 stycken)" },
  { id: 7, name: "PATRONER FIZZY BUBBLE", price: "310 kr (1,9kg, automat, 200st)" },
  { id: 8, name: "BANANA SKIDS", price: "245 kr (per kartong, 60 stycken)" },
  { id: 9, name: "FLYGANDE TEFAT SURA 375G", price: "329 kr (300 st, cylinder)" },
  { id: 10, name: "MORMOR LISAS COCOSBOLL 1,6 kg", price: "215 kr per låda (1,6kg)" },
  { id: 11, name: "MINICCO SURA BAND ÄPPLE", price: "199 kr (1,5 kg låda)" },
  { id: 12, name: "SURA TUNGOR 1.2KG", price: "255 kr (1,2kg)" },
  { id: 13, name: "MORMOR LISAS KROKANTBOLL 1,8 kg", price: "259 kr per låda (1,8kg)" },
  { id: 14, name: "MINICCO SURA BAND RAINBOW", price: "199 kr (1,5 kg låda)" },
  { id: 15, name: "MARABOU TWIST CYLINDER", price: "389 kr ink moms per cylinder (1,5kg)" },
  { id: 16, name: "RAFFAELLO HEART 140G", price: "189 kr per hjärta" },
  { id: 17, name: "PATRONER FIZZY BUBBLE", price: "310 kr (1,9kg, automat, 200st)" },
  { id: 18, name: "PATRONER SALTA", price: "310 kr (1,9kg, automat, 200st)" },
  { id: 19, name: "PATRONER HALLON/LAKRITS", price: "310 kr (1,9kg, automat, 200st)" },
  { id: 20, name: "FERRERO ROCHER HEART 125G", price: "199 kr per hjärta" },
  { id: 21, name: "TROLLI ALL IN ONE 1KG", price: "245 kr (1kg)" }
  // Andra produkter här
];

const Produkt = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [quantities, setQuantities] = useState(new Array(products.length).fill(0));
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const itemsPerPage = 12;
  const totalPages = Math.ceil(images.length / itemsPerPage);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages - 1));
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  };

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
    const productsToAdd = products.map((product, index) => {
      if (quantities[index] > 0) {
        return {
          ...product,
          quantity: quantities[index],
          image: images[index] // Lägg till bildsökvägen för produkten
        };
      }
      return null;
    }).filter(product => product !== null);
    setCart(prevCart => [...prevCart, ...productsToAdd]);
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

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  return (
    <div className='backgroundcolor'>
      {showCart ? (
        <CartPage cart={cart} onBack={handleBackToProducts} onClearCart={handleClearCart} />
      ) : (
        <>
          <h1 className="header">Våra produkter</h1>  
          <div className="produkt-container">
            {images.slice(startIndex, endIndex).map((image, index) => (
              <div key={index} className="produkt-item">
                <img src={image} alt={`Produkt ${startIndex + index + 1}`} className="produkt-image" />
                <div className="produkt-details">
                  <span className="produkt-price">{products[startIndex + index].price}</span>
                  <div className="quantity-controls">
                    <button onClick={() => handleDecrement(startIndex + index)}>-</button>
                    <span>{quantities[startIndex + index]}</span>
                    <button onClick={() => handleIncrement(startIndex + index)}>+</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="button-container">
            <button onClick={handleAddToCart} className="add-to-cart-button">Lägg alla produkter i varukorgen</button>
            <button onClick={handleToggleCart} className="show-cart-button">Visa varukorg</button>
          </div>
          <div className="button-container">
            {currentPage > 0 && <button onClick={handlePrevPage} className="prev-button">&#10094; Prev</button>}
            {currentPage < totalPages - 1 && <button onClick={handleNextPage} className="next-button">Next &#10095;</button>}
          </div>
        </>
      )}
    </div>
  );
};

export default Produkt;