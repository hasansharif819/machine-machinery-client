import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className="hero min-h-screen" id='notFound'>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
        <h1 className='mb-5 text-5xl font-bold pb-5 text-yellow-300'>Opps</h1>
      <h1 className="mb-5 text-5xl font-bold"><span className='text-yellow-400 mr-5'>4</span><span className='text-red-200 mr-5'>0</span><span className='text-yellow-400'>4</span></h1>
      <p className="mb-5 text-5xl font-bold text-yellow-300">PAGE NOT FOUND</p>
      <Link to='/'><button className="btn bg-red-400">BACK TO HOME</button>
</Link>
    </div>
  </div>
</div>
    );
};

export default NotFound;