import React, { useEffect, useState } from 'react';
import Review from './Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect( () => {
        fetch('http://localhost:5000/review')
        .then(res => res.json())
        .then(data => setReviews(data))
    }, [reviews])
    return(
        <div className='mt-10 bg-base-300'>
            <h1 className='text-3xl font-bold text-orange-400 py-2'>HELLO TOOLS</h1>
            <h1 className='text-2xl text-orange-400'>Our clients share their experience</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-5 p-5">
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
                </div>
        </div>
    )
}

export default Reviews;