import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AdminPage.css'; 

function AdminPage() {
    const [showForm, setShowForm] = useState(false);
    const [showRequests, setShowRequests] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('admin');
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
        axios.post('http://localhost:3001/register', {username, password, role})
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
            {!showRequests && (
                <button onClick={function(event){ handleFetchForms(); setShowRequests(true)}}>Intresseanmälningar</button>
            )}
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
                        <label>
                            Administrator
                            <input
                                type="radio"
                                value="admin"
                                checked={role === 'admin'}
                                onChange={() => setRole('admin')}
                            />
                        </label>
                        <label>
                            Seller
                            <input
                                type="radio"
                                value="seller"
                                checked={role === 'seller'}
                                onChange={() => setRole('seller')}
                            />
                        </label>
                        <button type="submit">Registrera</button>
                        <button onClick={() => setShowForm(false)}>Tillbaka</button>
                    </form>
                </>
            )}
            {showRequests && (
                <>
                    <button onClick={() => setShowRequests(false)}>Tillbaka</button>
                    <div>
                        {forms.map(form => (
                            <div key={form._id}>
                                <p>{form.name}</p>
                                <p>{form.organization}</p>
                                {expandedForms.includes(form._id) && (
                                    <div>
                                        <p>{form.city}</p>
                                        <p>{form.klass}</p>
                                        <p>{form.phoneNumber}</p>
                                        <p>{form.email}</p>
                                        {/* Add more fields as needed */}
                                    </div>
                                )}
                                <a onClick={() => toggleExpanded(form._id)}>
                                    {expandedForms.includes(form._id) ? 'See less' : 'See more'}
                                </a>
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}

export default AdminPage;
