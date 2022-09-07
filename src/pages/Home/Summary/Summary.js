import React from 'react';
import summary3 from '../../../assets/summary/summary3.jpg';
import review2 from '../../../assets/summary/review2.jpg';
import tool from '../../../assets/summary/tool.jpg';
import country2 from '../../../assets/summary/country2.jpg';
import revenue1 from '../../../assets/summary/revenue1.webp';
import experts from '../../../assets/summary/experts.jpg';
import './Summary.css';

const Summary = () => {
    return (
        <div className='bg-base-300 py-5 mt-5'>
            <h2 className='text-4xl font-bold mx-5 text-red-800 my-5'>Machine & Machinery</h2>
            <h2 className='text-4xl font-bold mx-5 text-red-800 my-5'>Our Company Business Summary</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-5'>
            <div className="cardBody w-96 bg-base-100 shadow-xl">
            <figure><img src={summary3} alt="" /></figure>

                <div className="card-body">
                    <h2 className="card-title text-center justify-center text-2xl font-bold">300+ customers</h2>
                    <p>Our customers are very polite to us and we always trying best to serve them.</p>
                </div>
            </div>
            <div className="cardBody w-96 bg-base-100 shadow-xl">
            <figure><img src={revenue1} alt="" /></figure>

                <div className="card-body">
                    <h2 className="card-title text-center justify-center text-2xl font-bold">250M+ Annual revenue</h2>
                    <p>We are happy and satisfied with our revenue</p>
                </div>
            </div>
            <div className="cardBody w-96 bg-base-100 shadow-xl">
            <figure><img src={review2} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-center justify-center text-2xl font-bold">87K+ Reviews</h2>
                    <p>Our customers are always trying to provide feedback</p>
                </div>
            </div>
            <div className="cardBody w-96 bg-base-100 shadow-xl">
            <figure><img src={tool} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-center justify-center text-2xl font-bold">150+ tools</h2>
                    <p>We served 150+ different tools thats are necessary for daily using</p>
                </div>
            </div>
            <div className="cardBody w-96 bg-base-100 shadow-xl">
            <figure><img src={country2} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-center justify-center text-2xl font-bold">250+ Countries</h2>
                    <p>We delevered products almost 250+ countries</p>
                </div>
            </div>
            <div className="cardBody w-96 bg-base-100 shadow-xl">
            <figure><img src={experts} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-center justify-center text-2xl font-bold">2500+ Experts</h2>
                    <p>We have huge experienced employee who works passionatly</p>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Summary;