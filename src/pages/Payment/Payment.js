import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51K1UzIKF2cz5jJ6Iazi1XrzfOhiJObabhFYTOyxEWzyMmKYk2AR0BWVV83upyocFT3ms0imJNea31s8VSidDzeGr00nVPWqbsC');

const Payment = () => {
    const { paymentID } = useParams();
    const url = `http://localhost:5000/order/${paymentID}`;

    const { data: payment, isLoading } = useQuery(['order', paymentID], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }

    console.log('payment', payment)
    return (
        <div className='flex gap-10 justify-center items-center bg-base-300'>
            <div className="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                <div className="card-body">
                    <p className="text-success font-bold">Hello, {payment.name}</p>
                    <h2 className="card-title">Please Pay for {payment.productName}</h2>
                    <p>Please pay: {payment.total} tk</p>
                </div>
            </div>
            <div className="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100 text-black h-40">
                <div className="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm payment={payment} />
                     </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;