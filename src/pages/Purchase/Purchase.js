import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';
import './Purchase.css';

const Purchase = () => {
    const { purchaseID} = useParams();
    const [user] = useAuthState(auth);
    // console.log('userName', user?.displayName)
    // console.log('user', user?.email)
    const [count, setCount] = useState(10);
    // useEffect( () => {
    //     fetch(`https://serene-sea-89981.herokuapp.com/product/${purchaseID}`)
    //     .then(res => res.json())
    //     .then(data => setProduct(data))
    // }, [product, purchaseID])

    const {data: product, refetch, isLoading} = useQuery('product', () => fetch(`https://serene-sea-89981.herokuapp.com/product/${purchaseID}`).then(res => res.json()))
    if(isLoading){
        return <Loading />
    }

    // const [count, setCount] = useState(10)
    const maxQuantity = product.quantity;
    const reduceCount = () => {
        const prev = parseInt(count);
        if(count < 11){
            return;
        }
        setCount(prev - 1)
    }
    const addCount = () => {
        const prev = parseInt(count)
        if(count < (maxQuantity - 10)){
            setCount(prev + 1)
        }
        else{
            return;
        }
    }

    const addToCart = () => {
        if(user){
            const cart = {
                name: user.displayName,
                email: user.email,
                pQuantity: count,
                productID: product._id,
                productName: product.name,
                price: product.price,
                quantity: product.quantity,
                description: product.description,
                img: product.img
            }
        const url = `https://serene-sea-89981.herokuapp.com/cart`;
        fetch(url, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(cart)
        })
        .then(res => res.json())
        .then(data => {
            if(data.success === true){
                toast('You successfully added your cart')
            }
        })
    }
}
    const buyNow = event => {
        event.preventDefault();

        if(user){
            const order = {
                name: event.target.name.value,
                email: user.email,
                address: event.target.address.value,
                phone: event.target.phone.value,                pQuantity: count,
                productID: product._id,
                productName: product.name,
                price: product.price,
                quantity: product.quantity,
                description: product.description,
                total: total,
                img: product.img
            }
        const url = `https://serene-sea-89981.herokuapp.com/order`;
        fetch(url, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
        .then(res => res.json())
        .then(data => {
            // console.log(data.success)
            if(data.success === true){
                toast('Your order is successfull')  
            }
            else{
                toast.error('You already ordered this product')
            }
            event.target.value = '';
                refetch();
        })
    }
    }
    
    const total = parseInt(count * product.price);
    return (
        <div>
            <div className='container'>
                <div className='content1'>
                    <div className='content1L'>
                        <div className='content1Large'>
                            <div className='content1LargeImage'>
                                <img src={product.img} alt="" />
                            </div>
                        </div>
                        <div className='content1Small'>
                            <div className='content1Small1'>
                            <img src={product.img} alt="" />

                            </div>
                            <div className='content1Small2'>
                            <img src={product.img} alt="" />

                            </div>
                            <div className='content1Small3'>
                            <img src={product.img} alt="" />

                            </div>
                        </div>

                    </div>
                </div>
                <div className='content2 p-5'>
                        <h2 className='text-center text-3xl font-bold mt-5'>{product.name}</h2>
                        <h2 className='text-center text-2xl text-red-600 font-bold mt-5'>$ {product.price}</h2>
                        <p className='my-2 text-start'>{product.description}</p>
                        <p className='text-green-400 text-start font-semibold'>In Stock {product.quantity} Items</p>
                        <p className='text-start py-5'>
                            <span id='counterID'>
                                <button  onClick={reduceCount}>-</button>
                                </span> 
                                <span id='counterID'>{count}</span>
                                 <span id='counterID'>
                                    <button onClick={addCount}>+</button>
                                    </span> 
                                    <h2 className='text-2xl font-semibold text-green-600 my-5'>Grand total: ${total}</h2>
                                    <button className='btn btn-sm btn-secondary text-white uppercase bg-gradient-to-r from-orange-500 to-red-500 mr-5'
                                    onClick={() => addToCart(purchaseID)}
                                    >CART</button>


                                    <label
                        htmlFor="order-modal"
                        
                        className="btn btn-sm btn-secondary text-white uppercase bg-gradient-to-r from-orange-500 to-red-400"
                    > BUY</label>
                                    </p>

                                    {/* form start */}
                <div>
            <input type="checkbox" id="order-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="order-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-secondary">{product.name}</h3>
                    <form 
                    onSubmit={buyNow} 
                    className='grid grid-cols-1 gap-3 justify-items-center mt-2'>
                        
                        
                        <input type="text" name="name" placeholder='Name' className="input input-bordered w-full max-w-xs" required/>
                        <input type="email" name="email" disabled value={user?.email || ''} className="input input-bordered w-full max-w-xs" />
                        <input type="text" name="quantity" disabled value={count} className="input input-bordered w-full max-w-xs" />
                        <input type="text" name="total" disabled value={total} className="input input-bordered w-full max-w-xs" />
                        <input type="text" name="address" placeholder='Enter your address' className="input input-bordered w-full max-w-xs" required/>

                        <input type="text" name="phone" placeholder="Phone Number" className="input input-bordered w-full max-w-xs" required/>
                
                        <input type="submit" value="Submit" className="btn btn-secondary w-full max-w-xs" />

                    </form>
                </div>
            </div>
        </div>
                {/* form end */}
                                    
                </div>
            </div>
        </div>
    );
};

export default Purchase;