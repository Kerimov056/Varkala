import React from 'react'
import './contact.scss'

const Contactcart = ({name,info,location,email}) => {
  return (
    <>
        <div className='cartt'>
            <div className='cartt_name'>{name}</div>
            <div className='cartt_two'>
            {info}
            </div>
            <div>{location}</div>
            <div>{email}</div>
        </div>
    </>
  )
}

export default Contactcart