import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';

const MyReview = () => {
    const { register, formState: { errors }, reset, handleSubmit } = useForm();
    const [user] = useAuthState(auth);
    const email = user?.email;
    const name = user?.displayName;
    const img = user?.photoURL;

    const onSubmit = async data => {
        const item = {
            name: name,
            email: email,
            img: img,
            ratings: data.ratings,
            review: data.review,
        }
        fetch('https://serene-sea-89981.herokuapp.com/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(item)
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    toast('Your review is posted');
                    reset();
                }
            })
    }
    return (
        <div className="hero min-h-screen" id='backgroundImage'>
            <div className="hero-content flex-col lg:flex-row" id='imageID'>
                {/* <img src="https://i.ibb.co/n7gng4w/hero.webp" className="max-w-sm rounded-lg shadow-2xl" alt='' /> */}
                <div>
                    <h2 className='text-center text-5xl font-bold text-white'>Feel free to Share your experience</h2>

                    <form onSubmit={handleSubmit(onSubmit)}
                        className='grid grid-cols-1 justify-items-center py-5'>

                        <div className='form-control w-full max-w-xs'>
                            <input
                                type="name"
                                value={user?.displayName} disabled
                                {...register('name')}
                                className='input input-bordered w-full max-w-xs mb-2'
                            />
                        </div>
                        <div className='form-control w-full max-w-xs'>
                            <input
                                type="email"
                                value={user?.email} disabled
                                {...register('email')}
                                className='input input-bordered w-full max-w-xs'
                            />
                            <label className='label'>
                                {errors.email?.type === 'required' && <span className='label-text-alt text-red-400'>{errors.email.message}</span>}
                            </label>
                        </div>

                        <div className='form-control w-full max-w-xs'>
                            <input
                                type="text"
                                placeholder='Ratings'
                                className='input input-bordered w-full max-w-xs'
                                {...register('ratings', {
                                    required: {
                                        value: true,
                                        message: 'Ratings is required'
                                    }
                                })}
                            />
                            <label className='label'>
                                {errors.ratings?.type === 'required' && <span className='label-text-alt text-red-400'>{errors.ratings.message}</span>}
                            </label>
                        </div>

                        <div className='form-control w-full max-w-xs'>
                            <textarea rows={6} cols={30}
                                type="text"
                                placeholder='Feel free to say something'
                                className='input input-bordered w-full max-w-xs h-28'
                                {...register('review', {
                                    required: {
                                        value: true,
                                        message: 'Review is required'
                                    }
                                })}
                            />
                            <label className='label'>
                                {errors.review?.type === 'required' && <span className='label-text-alt text-red-400'>{errors.review.message}</span>}
                            </label>
                        </div>
                        <input type="submit" value="POST" className='btn bg-red-800 w-full max-w-xs' />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MyReview;