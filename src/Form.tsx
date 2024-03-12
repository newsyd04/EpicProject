import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './App.css';

function Form() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isRemember, setIsRemember] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false); // State to track if the user is an admin
    const navigate = useNavigate();

    const handleSignIn = (e: { preventDefault: () => void; }) => {
        e.preventDefault(); // Prevent default form submission
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        const user = users.find((user: { username: string; password: string; }) => user.username === username && user.password === password);
        if (user) {
            if (isRemember) {
                localStorage.setItem('currentUser', JSON.stringify({ username, password, isAdmin: user.isAdmin }));
            }
            navigate('/Dashboard'); // Navigate to Dashboard after successful login
        } else {
            alert('Invalid credentials or user does not exist.');
        }
    };

    const handleSignUp = (e: { preventDefault: () => void; }) => {
        e.preventDefault(); // Prevent form from submitting
        let users = JSON.parse(localStorage.getItem('users') || '[]');
        if (!users.some((user: { username: string; }) => user.username === username)) {
            users.push({ username, password, isAdmin }); // Include isAdmin when adding a new user
            localStorage.setItem('users', JSON.stringify(users));
            alert('User registered successfully.');
        } else {
            alert('Username is already taken.');
        }
    };

    return (
        <section className='center2'>
            <article className="form-styling"> 
                <h2>Sign In / Sign Up</h2>
                <form>
                    <fieldset>
                        <label>
                            Username
                            <input
                                name="username"
                                placeholder="Username"
                                autoComplete="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </label>
                        <label>
                            Password
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                autoComplete="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </label>
                        <label>
                            <input 
                                type="checkbox" 
                                role="switch" 
                                id="remember" 
                                name="remember"
                                checked={isRemember}
                                onChange={() => setIsRemember(!isRemember)}
                            />
                            Remember me
                        </label>
                        <label>
                            <input 
                                type="checkbox" 
                                role="switch" 
                                id="isAdmin" 
                                name="isAdmin"
                                checked={isAdmin}
                                onChange={() => setIsAdmin(!isAdmin)}
                            />
                            Register as Admin
                        </label>
                    </fieldset>
                    <div className='grid'>
                        <button className="secondary" type="submit" onClick={handleSignIn}>Sign In</button>
                        <button type="button" onClick={handleSignUp}>Sign Up</button>
                    </div>
                </form>
            </article>   
        </section>
    );
}

export default Form;
