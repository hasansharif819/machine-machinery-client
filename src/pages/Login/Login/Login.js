import React, { useEffect, useRef } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithFacebook, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { useForm } from "react-hook-form";
import Loading from '../../Shared/Loading/Loading';
import useToken from '../../../hooks/useToken';
import { toast } from 'react-toastify';

const Login = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [signInWithFacebook, fUser, fLoading, fError] = useSignInWithFacebook(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
    const [token] = useToken(user || gUser || fUser);

    let signInError;
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    useEffect( () =>{
        if (user || gUser || fUser || token) {
            navigate(from, { replace: true });
        }
    }, [user, gUser, fUser, from, navigate, token])

    if (loading || gLoading || fLoading) {
        return <Loading></Loading>
    }

    if(error || gError || fError){
        signInError= <p className='text-red-500'><small>{error?.message || gError?.message }</small></p>
    }

    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password);
    }

    const resetPassword = async() => {
        const email = emailRef.current.value;
        if(email){
            await sendPasswordResetEmail(email);
            toast('Email sent, Please verify')
        }
        else{
            toast('Enter valid email address');
        }
    }
    return (
        <div className="hero min-h-screen bg-base-200" id='signLog'>
  <div className="hero-content flex-col lg:flex-row">
    <div className="text-center lg:text-left">
    </div>        
       <div className='flex h-screen justify-center items-center'>
         <div className="card w-96 shadow-xl">
                <div className="card-body">
                     <h2 className="text-center text-2xl font-bold text-white">LOGIN</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control w-full max-w-xs">
                            
                        <input
                                type="email"
                                placeholder="Your Email"
                                className="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is Required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provide a valid Email'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            
                            <input
                                type="password"
                                placeholder="Password"
                                className="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is Required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Must be 6 characters or longer'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            </label>
                        </div>

                        {signInError}
                        <input className='btn w-full max-w-xs text-white' type="submit" value="Login" />
                    </form>
                    <p><small> <Link className='text-white' to="/signup">Create New Account</Link></small></p>
                    <p><small className='text-white' onClick={resetPassword}> Forgot Password</small></p>
                    <div className='flex justify-center gap-5'>
                    <button
                        onClick={() => signInWithGoogle()}
                        className="btn"
                    >
                        <img src="https://i.ibb.co/9YN8J87/icons8-google-48.png" alt="" />
                    </button>
                    <button
                        onClick={() => signInWithFacebook()}
                        className="btn"
                    >
                        <img src="https://i.ibb.co/SxJgMgb/icons8-facebook-48.png" alt="" />
                    </button>
                    </div>
                </div>
            </div>
        </div >
  </div>
</div>
    );
};

export default Login;