import React from 'react';
import './Banner.css';
import b1 from '../../../assets/Banner/b1.jpg';
import b2 from '../../../assets/Banner/b2.jpg';
import b3 from '../../../assets/Banner/b3.jpg';
import b4 from '../../../assets/Banner/b4.jpg';
import b5 from '../../../assets/Banner/b5.jpg';
import b6 from '../../../assets/Banner/b6.jpg';
import b7 from '../../../assets/Banner/b7.jpg';
import b8 from '../../../assets/Banner/b8.jpg';

const Banner = () => {
    return (
        <div className='bg-base-300 py-10'>
            <div >
        <h2 className='title font-bold text-4xl py-2 text-orange-400'>HELLO TOOLS</h2>
        <h2 className='title font-bold text-3xl py-2 text-orange-400 mb-10'>TOP SELLING PRODUCTS</h2>
        </div>
            <div className='outer'>
                <div className="hero min-h-screen" id='background'>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content"></div>
                    <div className='slider'>
                        <span style={{ '--i': '1' }}><img src={b1} alt="" /></span>
                        <span style={{ '--i': '2' }}><img src={b2} alt="" /></span>
                        <span style={{ '--i': '3' }}><img src={b3} alt="" /></span>
                        <span style={{ '--i': '4' }}><img src={b4} alt="" /></span>
                        <span style={{ '--i': '5' }}><img src={b5} alt="" /></span>
                        <span style={{ '--i': '6' }}><img src={b6} alt="" /></span>
                        <span style={{ '--i': '7' }}><img src={b7} alt="" /></span>
                        <span style={{ '--i': '8' }}><img src={b8} alt="" /></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;