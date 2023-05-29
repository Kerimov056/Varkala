import React from 'react'
import './contact.scss'

const ResponsiveCart = ({ name, info, location, email }) => {
    return (
        <>
            <div className='ResponCaart'>
                <div>
                    <div className='ResponCaart_name'>{name}</div>
                    <div>{email}</div>
                </div>
                <div>
                    <div className='ResponCaart_info'>
                        {info}
                    </div>
                    <div>{location}</div>
                </div>
            </div>
            <hr/>
        </>
    )
}

export default ResponsiveCart