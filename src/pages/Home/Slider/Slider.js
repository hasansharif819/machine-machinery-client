import React from 'react';
import { Link } from 'react-router-dom';
import b1 from '../../../assets/Banner/b1.jpg';
import b2 from '../../../assets/Banner/b2.jpg';
import b3 from '../../../assets/Banner/b3.jpg';
import b9 from '../../../assets/Banner/b9.jpg';
import './Slider.css';

const Slider = () => {
    return (
        <div className='outside bg-base-300'>
            <div className="hero min-h-screen large">
<div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={b9} className="rounded-lg shadow-2xl" alt='' id='largeImage'/>
                <div className='text-white'>
                    <h1 className="text-5xl font-bold">HELLO TOOLS</h1>
                    <p className="py-6">We provide different types of tools and products all over the world with 100% qualityfull for wholesell</p>
                    <Link to='/products'><button className="btn bg-gradient-to-r from-orange-500 to-red-400" id='buttonID'>EXPLORE</button>
                    </Link>
                </div>
            </div>
        </div>

            </div>
            
            <div className="small">
                <div className='inner2'>
                    <img height={200} src={b1} alt="" />

                </div>
                <div className='inner3'>
                    <img height={190} src={b2} alt="" />
                </div>
                <div className='inner4'>
                    <img height={180} src={b3} alt="" />
                </div>
            </div>

        </div>
    );
};

export default Slider;