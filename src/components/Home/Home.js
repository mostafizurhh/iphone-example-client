import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import './Home.css'

const Home = () => {
    const phones = useLoaderData()
    return (
        <div className='Phones'>
            {
                phones.map(phone => <li key={phone.id} className='phones'>
                    <Link to={`/phones/${phone.id}`}>{phone.name}
                    </Link>
                </li>)
            }
        </div>
    );
};

export default Home;