import React from 'react'; 
import { Link } from 'react-router-dom';
import b1 from '../../../assets/Banner/b1.jpg';
import b2 from '../../../assets/Banner/b2.jpg';
import b3 from '../../../assets/Banner/b3.jpg';
import b4 from '../../../assets/Banner/b4.jpg';
import b5 from '../../../assets/Banner/b5.jpg';
import b6 from '../../../assets/Banner/b6.jpg';
import b7 from '../../../assets/Banner/b7.jpg';
import './Slider.css';

const Slider = () => {
    return (
        <div className='outside bg-base-300'>
            {/* <div className="large"> */}
            <div className="hero min-h-screen large">
  <div className="hero-overlay bg-opacity-60"></div>
  {/* <div className="hero-content text-center text-neutral-content"> */}
    <div className="max-w-md mt-40">
      <h1 className="mb-5 text-5xl font-bold text-white">MACHINE & MACHINERY</h1>
      <p className="mb-5 text-3xl"></p>
      <Link to='/products'><button className="btn" id='buttonID'>EXPLORE</button>
</Link>
    </div>
  {/* </div> */}
{/* </div> */}

            {/* <div className='inner1'>HEllo</div> */}
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