import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';

const MyCart = ({ cart, index, refetch}) => {
    const {productName, email, img, price, pQuantity} = cart;
    const purchaseID = useParams();
    const [user] = useAuthState(auth);

    const deleteItem = _id => {
        console.log('deleted', _id);
        const proceed = window.confirm('Are you sure to delete');
        if(proceed){
          const url = `https://serene-sea-89981.herokuapp.com/order/${cart?._id}`;
          fetch(url, {
            method: "DELETE"
          })
          .then(res => res.json())
          .then(data => {
            if(data.deletedCount > 0){
              refetch();
            }
          })
        }
    }

    const total = parseInt(price * pQuantity);

    // buy now 
    // const buyNow = () => {
    //     if(user){
    //         const order = {
    //             name: user.displayName,
    //             email: user.email,
    //             pQuantity: pQuantity,
    //             productID: cart._id,
    //             productName: productName,
    //             price: price,
    //             quantity: cart.quantity,
    //             description: cart.description,
    //             img: img
    //         }
    //     const url = `https://serene-sea-89981.herokuapp.com/order`;
    //     fetch(url, {
    //         method: "POST",
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(order)
    //     })
    //     .then(res => res.json())
    //     .then(data => {
    //         // console.log('order from cart',data)
    //         if(data.success === true){
    //             toast('Your order is successfull')
    //         }
    //     })
    // }
    // }

    return (
        <tr>
        <th>
          <label>
            {index + 1}
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img height={50} width={50} src={img} alt="" />
              </div>
            </div>
            <div>
              <div className="font-bold">{productName}</div>
              <div className="text-sm opacity-50 text-red-900 font-semibold">${price}</div>
            </div>
          </div>
        </td>
        <td>
          {email}
          <br />
          <span className="badge badge-ghost badge-sm">Quantity: {pQuantity}</span>
        </td>
        <td>
           <h2 className='text-2xl font-bold text-red-600'>${total}</h2>
        </td>
        {/* <th>
        <button className='btn bg-green-600 btn-sm' onClick={() => buyNow(purchaseID)}>Buy Now</button>
        </th> */}
        <th>
          <button onClick={() => deleteItem(cart._id)} className='btn bg-red-600 btn-sm'>CANCEL</button>
        </th>
      </tr>
    );
};

export default MyCart;