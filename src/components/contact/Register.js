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
            <h2>Register</h2>
            <form className="login-form" onSubmit={Submit}>
                <div className="firstlast">
                    <div className="first">
                        <label htmlFor="name">First name</label>
                        <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name"  />
                    </div>
                    <div className="last">
                        <label htmlFor="name">Last name</label>
                        <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name"  />
                    </div>
                </div>
                <label className="Login" htmlFor="email">Email *</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" id="email" name="email" />
                <label htmlFor="message">Leave us a message...</label>
                <input value={message} onChange={(e) => setMessage(e.target.value)} type="message" id="message" name="message" />
                <button className="log_btn" type="submit">Submit</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Daxil Ol</button>
        </div>
    )
}