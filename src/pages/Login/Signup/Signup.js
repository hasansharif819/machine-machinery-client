import React from 'react';
import './Signup.css';
import { useCreateUserWithEmailAndPassword, useSignInWithFacebook, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import useToken from '../../../hooks/useToken';
import Loading from '../../Shared/Loading/Loading';

const Signup = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [signInWithFacebook, fUser, fLoading, fError] = useSignInWithFacebook(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const navigate = useNavigate();

    const [token] = useToken(user || gUser || fUser);

    let signInError;

    if (loading || gLoading || updating || fLoading) {
        return <Loading></Loading>
    }

    if (error || gError || updateError || fError) {
        signInError = <p className='text-red-500'><small>{error?.message || gError?.message || updateError?.message}</small></p>
    }

    if (user || gUser || fUser || token) {
        navigate('/');

    }

    const onSubmit = async data => {
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name });
        console.log('update done');
    }
    return (
        <div className="hero min-h-screen bg-base-200" id='signLog'>
  <div className="hero-content flex-col lg:flex-row gap-10">
    <div className="text-center lg:text-left">
    </div>        
    <div className='flex justify-center items-center'>
            <div className='card w-96 shadow-xl'>
                <div className='card-body'>
                    <h2 className='text-center text-2xl font-bold text-white'>SIGN UP</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='form-control w-full max-w-xs'>
                            
                            <input
                                type="text"
                                placeholder='Full Name'
                                className='input input-bordered w-full max-w-xs'
                                {...register('firstName', {
                                    required: {
                                        value: true,
                                        message: 'Name is required'
                                    }
                                })

                                }
                            />
                            <label className='label'>
                                {errors.name?.type === 'required' && <span className='label-text-alt text-red-500'>{errors.name.message}</span>}
                            </label>
                        </div>

                        <div className='form-control w-full max-w-xs'>
                            
                            <input
                                type="email"
                                placeholder='Enter your email'
                                className='input input-bordered w-full max-w-xs'
                                {...register('email', {
                                    required: {
                                        value: true,
                                        message: 'email is required'
                                    },
                                })}
                            />
                            <label className='label'>
                                {errors.email?.type === 'required' && <span className='label-text-alt text-red-500'>{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className='label-text-alt text-red-500'>{errors.email.message}</span>}
                            </label>
                        </div>
                        <div className='form-control w-full max-w-xs'>
                            <input
                                type="password"
                                placeholder='Password'
                                className='input input-bordered w-full max-w-xs'
                                {...register('password', {
                                    required: {
                                        value: true,
                                        message: 'Password is required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Must be 6 Characters or longer'
                                    }
                                })}
                            />
                            <label className='label'>
                                {errors.password?.type === 'required' && <span className='label-text-alt text-red-500'>{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className='label-text-alt text-red-500'>{errors.password.message}</span>}
                            </label>
                        </div>
                        {signInError}
                        <input className='btn text-white w-full max-w-xs' type="submit" value="signup" />
                    </form>
                    <p><small className='text-white'>Already have an account? <Link className='text-primary' to='/login'>Please Login</Link></small></p>
                    <div className='flex justify-center gap-5'>
                    <button
                        onClick={() => signInWithGoogle()}
                        className="btn ">
                        <img src="https://i.ibb.co/9YN8J87/icons8-google-48.png" alt="" />
                    </button>
                    <button
                        onClick={() => signInWithFacebook()}
                        className="btn ">
                            <img src="https://i.ibb.co/SxJgMgb/icons8-facebook-48.png" alt="" />
                    </button>
                    </div>
                </div>
            </div>
        </div>


        
    {/* </div> */}
  </div>
</div>


    );
};

export default Signup;