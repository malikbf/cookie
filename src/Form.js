import React, { useState } from 'react';
import './Form.css'; // Import CSS file for styling
import candy from './candy.png'

function Form() {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    city: '',
    class: '',
    phoneNumber: '',
    email: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to backend)
    console.log(formData);
  };

  return (
    <div className="form-page-background">

      <div className="form-page">

        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <div>
                <h1 className='numb'>Anmäl Intresse</h1>
            </div>
            <div>
                <p>Infopaketet innehåller allt ni behöver för att komma igång med en försäljning direkt.</p>
            </div>

            <div className="form-group">
              <label htmlFor="name">Namn kontaktperson:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="form-control"
                placeholder="Förnamn Efternamn"
                />
            </div>
            <div className="form-group">
              <label htmlFor="organization">Förening/skola:</label>
              <input
                type="text"
                id="organization"
                name="organization"
                value={formData.organization}
                onChange={handleChange}
                className="form-control"
                placeholder="Håkantorpskolan 3a"
                />
            </div>
            <div className="form-group">
              <label htmlFor="city">Stad:</label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="form-control"
                placeholder="Västerås"
                />
            </div>
            <div className="form-group">
              <label htmlFor="class">Klass/Lag:</label>
              <input
                type="text"
                id="class"
                name="class"
                value={formData.class}
                onChange={handleChange}
                className="form-control"
                placeholder="Skälby BK P19"
                />
            </div>
            <div className="form-group">
              <label htmlFor="phoneNumber">Mobilnummer:</label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="form-control"
                placeholder="071-236554"
                />
            </div>
            <div className="form-group">
              <label htmlFor="email">Mailadress:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-control"
                placeholder="john@gmail.com"
                />
            </div>
            <button type="submit" className="btn btn-primary">Anmäl Intresse</button>
            <p className="tid">Svar inom 48 timmar</p>
          </form>
        </div>
      <div>
        <div>
          <img src={candy} className='candy-img'/>
        </div>
        <div className='content'>
          <h2>Säljpaketet innehåller:</h2>
          <ul>
            <li>exempel 1.</li>
            <li>exempel 2.</li>
            <li>exempeln 3.</li>
          </ul>  
        </div>
        <div className='description'>
          <p>en text som förklarar hur det går till efter man skickat in formuläret och vad man förväntas få t.ex.</p>
        </div>
        </div>
      </div>
    </div>  
  );
}

export default Form;