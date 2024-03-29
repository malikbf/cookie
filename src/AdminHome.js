import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AdminPage.css'; 

function AdminHome() {
    const [showForm, setShowForm] = useState(false);
    const [showRequests, setShowRequests] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [forms, setForms] = useState([]);
    const [expandedForms, setExpandedForms] = useState([]);

    useEffect(() => {
        handleFetchForms();

    }, []); // Empty dependency array ensures the effect runs only once after the initial render
  
    const toggleExpanded = (formId) => {
        if (expandedForms.includes(formId)) {
            setExpandedForms(expandedForms.filter(id => id !== formId));
        } else {
            setExpandedForms([...expandedForms, formId]);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/register', {username, password, role: 'seller'})
        .then(result => console.log(result))
        .catch(err => console.log(err))
      //   onSubmit({ username, password, role: 'admin' });
    };

    const handleFetchForms = () => {
        axios.get('http://localhost:3001/forms')
        .then(response => {
            setForms(response.data);

            console.log(response.data);
            console.log(forms);
        })
        .catch(error => {
            console.error('Error fetching forms:', error);
        });
    };
  
    return (
        <div className="registration-container">
            {!showForm && (
                <button onClick={() => setShowForm(true)}>Registrera</button>
            )}
            {showForm && (
                <>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder="Användarnamn"
                            value={username}
                            onChange={e => setUsername(e.target.value)}
                        />
                        <input
                            type="password"
                            placeholder="Lösenord"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                        <button type="submit">Registrera</button>
                        <button onClick={() => setShowForm(false)}>Tillbaka</button>
                    </form>
                </>
            )}
        </div>
    );
}

export default AdminHome;