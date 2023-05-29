import React, { useState } from "react";
import './contact.scss'

export const Registerr = (props) => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [name, setName] = useState('');

    const Submit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="form_container">
            <form className="login-form" onSubmit={Submit}>
                <div className="firstlast">
                    <div className="first">
                        <label id="ResLeft" htmlFor="name">Your firstname *</label>
                        <input id="ResLeft" value={name} name="name" onChange={(e) => setName(e.target.value)} id="name"  />
                    </div>
                    <div className="last">
                        <label htmlFor="name">Your lastname *</label>
                        <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name"  />
                    </div>
                </div>
                <label className="Login" htmlFor="email">Your email *</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" id="email" name="email" />
                <label htmlFor="message">Your message for us *</label>
                <input className="buin" value={message} onChange={(e) => setMessage(e.target.value)} type="message" id="message" name="message" />
                <button className="log_btn" type="submit">SEND MESSAGE</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('login')}>LogIn</button>
        </div>
    )
}