import React from 'react';
import './Review.css';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const Review = ({ review }) => {
    const { name, email, ratings, img } = review;

    const renderStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            if (i <= rating) {
                stars.push(<FaStar key={i} className="text-gold" />);
            } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
                stars.push(<FaStarHalfAlt key={i} className="text-gold" />);
            } else {
                stars.push(<FaRegStar key={i} className="text-gold" />);
            }
        }
        return stars;
    };

    return (
        <div className="card self-stretch w-72 min-h-[300px] bg-gray-800 shadow-2xl text-white rounded-lg transform transition duration-300 hover:scale-105">
            <div className="card-body p-6">
                <div className="flex items-center mb-4">
                    <img src={img} alt={name} className="w-12 h-12 rounded-full mr-4" />
                    <div>
                        <h2 className="card-title text-lg font-bold">{name}</h2>
                        <h3 className="text-sm text-gray-400">{email}</h3>
                    </div>
                </div>
                <p className="text-start text-base mb-4">{review.review}</p>
                <div className="flex items-center">
                    <div className="flex mx-auto">
                        {renderStars(ratings)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;
