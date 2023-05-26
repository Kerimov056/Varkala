import React, { useState } from "react";
import './contact.scss'

export const Loginn = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const Submit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="form_container">
            <form className="login-form" onSubmit={Submit}>
                <label className="Login" htmlFor="email">Email *</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label className="Login" htmlFor="password">Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button className="log_btn" type="submit">Log In</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Create Account</button>
        </div>
    )
}