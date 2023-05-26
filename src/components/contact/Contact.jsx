import React from 'react'
import './contact.scss'

const Contact = () => {
    return (
        <>
            <div className='blog'>
                <div>
                    <div>
                        <h1>Contact</h1>
                    </div>
                </div>
            </div>

            <div className='contact'>
                <div>
                    <div>
                        <div>
                            <b>Address</b>
                            <p>13/25 New Avenue<br />New Heaven, 45Y 73J <br />England, Great Britain</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <b>Call center</b>
                            <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <h4>+33 555 444 333</h4>
                        </div>
                    </div>
                    <div>
                        <div className='end'>
                            <b>Electronic support</b>
                            <p>Please feel free to write an email to us or to use our electronic ticketing system.</p>
                            <h4>info@varkala.com</h4>
                            <h4>support@varkala.com</h4>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact