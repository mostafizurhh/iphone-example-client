import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './Phone.css'

const Phone = () => {
    // const { name, price, description, image } = phone
    const phone = useLoaderData();
    // console.log(phone)
    return (
        <div className='phone'>
            <p>{phone.name}</p>
            <p>${phone.price}</p>
            <p>{phone.description}</p>
            <img src={phone.image} alt="" />
        </div>
    );
};

export default Phone;