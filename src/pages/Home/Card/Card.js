import React from 'react';
import './Card.css';

const Card = () => {
    return (
        <div className='OutsideCard'>
            <div className='container'>
                <div className="cardBody">
                    <div className="content">
                        <h2>01</h2>
                        <h3>Card one</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque incidunt deserunt aliquam </p>
                        <a href="www.google.com">more</a>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className="cardBody">
                    <div className="content">
                        <h2>02</h2>
                        <h3>Card two</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque incidunt deserunt aliquam </p>
                        <a href="www.google.com">more</a>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className="cardBody">
                    <div className="content">
                        <h2>03</h2>
                        <h3>Card three</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque incidunt deserunt aliquam </p>
                        <a href="www.google.com">more</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;