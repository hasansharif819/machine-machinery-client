import React from 'react';

const Review = ({ review }) => {
    const { name, email, ratings } = review;
    return (
        <div className="card w-96 bg-gray-600 shadow-xl text-white">
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <h2 className="card-title">{email}</h2>
                <p className='text-start'>{review.review}</p>
                <p>Ratings: {ratings}</p>
            </div>
        </div>
    );
};

export default Review;