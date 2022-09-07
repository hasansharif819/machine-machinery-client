import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';
import {toast} from 'react-toastify';
import Loading from '../../Shared/Loading/Loading';

const RequireAuth = ({children}) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();
    const [sendEmailVerification] = useSendEmailVerification(auth);

    if(loading){
        return <Loading></Loading>
    }
    if(!user) {
        return <Navigate to='/login' state={{from: location}} replace></Navigate>
    }

    if(user.providerData[0]?.providerId === 'password' && !user.emailVerified){
        return <div className='text-center my-5 text-5xl text-red-500'>
            <h2>Opps!!! email not verified</h2>
            <button className='btn bg-red-900 font-bold'
            onClick={ async () => {
                await sendEmailVerification();
                toast('Email Sent...')
            }}>
                VERIFY EMAIL
            </button>
            
        </div>
    }
    return children;
};

export default RequireAuth;