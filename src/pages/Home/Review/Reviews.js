import React, { useEffect, useState } from 'react';
import Review from './Review';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const [setError] = useState(null);

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const response = await fetch('https://hello-tools-updated-server.vercel.app/api/v1/reviews');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setReviews(data.data);
            } catch (error) {
                setError(error.message);
            }
        };

        fetchReviews();
    }, [reviews, setError]);

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 1024 },
            items: 2,
            slidesToSlide: 2
        },
        desktop: {
            breakpoint: { max: 1024, min: 768 },
            items: 2,
            slidesToSlide: 2
        },
        tablet: {
            breakpoint: { max: 768, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        }
    };

    return (
        <div className="bg-base-300 py-10 flex justify-center">
            <div className="w-full max-w-4xl px-4">
                <h1 className='text-3xl font-bold text-orange-400 text-center'>HELLO TOOLS</h1>
                <h1 className='text-2xl text-orange-400 text-center mb-10'>Our clients share their experience</h1>
                <Carousel 
                    responsive={responsive}
                    swipeable={true}
                    draggable={true}
                    showDots={true}
                    ssr={true}
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={3000}
                    keyBoardControl={true}
                    customTransition="all .5"
                    transitionDuration={500}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
                >
                    {reviews?.map(review => (
                        <Review
                            key={review._id}
                            review={review}
                        />
                    ))}
                </Carousel>
            </div>
        </div>
    );
}

export default Reviews;
