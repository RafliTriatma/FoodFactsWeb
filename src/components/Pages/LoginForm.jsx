// LoginForm.js
import React, { useState } from 'react';
import './LoginForm.css';
import { FaUser } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (username.length < 5 || username.length > 50) {
            setError('Username harus antara 5 hingga 50 karakter.');
        } else {
            setError('');
            navigate('/homepage');
        }
    };

    return (
        <div className='background'>
            <div className='wrapper'>
                <form onSubmit={handleSubmit}>
                    <h1>Welcome to Food Facts Web</h1>
                    <div className="input-box">
                        <input type="text" placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)}
                            required
                            maxLength={50}
                            minLength={5}
                        />
                        <FaUser className='icon' />
                    </div>
                    {error && <p style={{ color: 'red' }}>{error}</p>}

                    <div className="remember-forgot">
                        <label><input type="checkbox" /> Remember me</label>
                        <a href="#">Forgot password?</a>
                    </div>

                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;
