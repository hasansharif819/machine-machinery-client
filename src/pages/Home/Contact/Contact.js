import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import './Contact.css';

const Contact = () => {
    const { register, formState: { errors }, reset, handleSubmit } = useForm();
    const [user] = useAuthState(auth);
    const email = user?.email;

    const onSubmit = async data => {
        const item = {
            name: data.name,
            email: email,
            contact: data.contact,
            message: data.message,
        }
        fetch('http://localhost:5000/message', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(item)
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    toast('We received your message. Inform you soon. Thank you');
                    reset();
                }
            })
    }
    return (
        <div className="hero min-h-screen bg-base-300" id='backgroundImage'>
            <div className="hero-content flex-col lg:flex-row" id='imageID'>
                <img src="https://i.ibb.co/N2Rpy4K/rquery2.webp" className="max-w-sm rounded-lg shadow-2xl" alt='' />
                <div>
                <h2 className='text-center text-5xl font-bold text-orange-400'>Get In Touch With Us</h2>

                    <form onSubmit={handleSubmit(onSubmit)}
                        className='grid grid-cols-1 justify-items-center py-5'>

                        <div className='form-control w-full max-w-xs'>
                            <input
                                type="name"
                                placeholder='Full Name'
                                {...register('name', {
                                    required: {
                                        value: true,
                                        message: 'Name is Required'
                                    }
                                }
                                )}
                                className='input input-bordered w-full max-w-xs'
                            />
                            <label className='label'>
                                {errors.name?.type === 'required' && <span className='label-text-alt text-red-400'>{errors.name.message}</span>}
                            </label>
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
                                placeholder='Contact Number'
                                className='input input-bordered w-full max-w-xs'
                                {...register('contact', {
                                    required: {
                                        value: true,
                                        message: 'Contact Number is required'
                                    }
                                })}
                            />
                            <label className='label'>
                                {errors.contact?.type === 'required' && <span className='label-text-alt text-red-400'>{errors.contact.message}</span>}
                            </label>
                        </div>

                        <div className='form-control w-full max-w-xs'>
                            <textarea rows={6} cols={30}
                                type="text"
                                placeholder='Feel free to say something'
                                className='input input-bordered w-full max-w-xs h-28'
                                {...register('message', {
                                    required: {
                                        value: true,
                                        message: 'Message is required'
                                    }
                                })}
                            />
                            <label className='label'>
                                {errors.message?.type === 'required' && <span className='label-text-alt text-red-400'>{errors.message.message}</span>}
                            </label>
                        </div>
                        <input type="submit" value="SUBMIT" className='btn bg-red-800 w-full max-w-xs' />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;