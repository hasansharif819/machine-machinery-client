import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './BannerProduct.css';

const BannerProduct = ({ product }) => {
    const {_id, name, img, price, quantity} = product;

    const navigate = useNavigate();
    const navigateToDetail = _id => {
        navigate(`/products/${_id}`)
    }

    return (
        <div className="card w-96 glass cardBody">
  <figure id='inventoryImage'>
    <img id='img1' src={img} alt="" />
    </figure>
    <div className="card-body items-center text-center" id='productBody'>
    <h2 className="card-title text-red-800 font-bold text-2xl">{name}</h2>
    <h2 className="card-title text-red-800">Price: {price} tk</h2>
    <h2 className="card-title text-green-500">Available: {quantity}</h2>
    <div className="card-actions">
      <Link to={`/products/${_id}`}><button onClick={() => navigateToDetail(_id)} className="btn bg-red-900 btn-sm bg-gradient-to-r from-orange-500 to-red-400" id='buttonID'>PURCHASE</button></Link>
    </div>
  </div>
</div>
    );
    
};

export default BannerProduct;