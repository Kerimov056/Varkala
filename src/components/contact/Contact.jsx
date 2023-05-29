import React,{useState} from 'react'
import './contact.scss'
import { city } from '../Helpers/City'
import Contactcart from './Contactcart'
import GoogleMapReact from 'google-map-react';
import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';
import { Loginn } from './Loginn';
import { Registerr } from './Register';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Contact = () => {

    const defaultProps = {
        center: {
            lat: 10.99835602,
            lng: 77.01502627
        },
        zoom: 11
    };

    const [form, setForm] = useState("register")

    const Form = (forName) =>{
        setForm(forName);
    }

    return (
        <>
            <div className='blog'>
                <div>
                    <div>
                        <h1>Contact</h1>
                    </div>
                </div>
            </div>

            <div id='ResContact'>
                <div>
                    <img src='https://scontent.fgyd20-1.fna.fbcdn.net/v/t39.30808-6/347392571_1231416974207781_5325285134184450863_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_ohc=sMHBLPID-U4AX_6zh7C&_nc_ht=scontent.fgyd20-1.fna&oh=00_AfAGTtKBKd3KQQ20eXomYpqifEF4b4WPuIT0BCUT57JnWg&oe=6479AF7E'></img>
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

            <div className='contact_two'>
                <div className='map'>
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: "" }}
                        defaultCenter={defaultProps.center}
                        defaultZoom={defaultProps.zoom}
                    >
                        <AnyReactComponent
                            lat={53.148521}
                            lng={8.214209}
                            text="My Marker"
                        />
                    </GoogleMapReact>
                </div>
                <div className='city'>
                    <div>
                        <p>Our stores</p>
                        <div>
                            {
                                city.map((item) => {
                                    return <Contactcart name={item.name} info={item.info} location={item.location} email={item.email} />
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>

            <div className='logIn'>
                <div>
                    <div className='getinTouch'>
                        <div>
                            <div className='getinTouch_name'>Get in touch</div>
                            <div className='sosial'>
                                <FaFacebookF className='sosial_sebeke firstt'/>
                                <FaTwitter  className='sosial_sebeke'/>
                                <BsInstagram  className='sosial_sebeke'/>
                            </div>
                        </div>
                    </div>
                    <div className='login'>
                            {
                                form === "login" ? <Loginn onFormSwitch = {Form} /> : <Registerr onFormSwitch = {Form} />
                            }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact