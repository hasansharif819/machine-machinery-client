import React from 'react';
import { toast } from 'react-toastify';

const AllOrder = ({ order, refetch, index}) => {
    const { name, address, phone, price, img, email, productName, pQuantity, total, paid} = order;

    const shippingProduct = _id => {
      console.log('shipping', _id, order?._id)
      fetch(`http://localhost:5000/payments/${order?._id}`, {
            method: "PUT",
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => {
            if(res.status === 403){
                toast.error('Shipping Failed')
            }
            return res.json()
        })
        .then(data => {
            if(data.modifiedCount > 0){
                refetch();
                toast.success('Shipping Successful');
            }
        })
    }

    

    const deleteProduct = _id => {
        // console.log('deleted', _id);
        const proceed = window.confirm('Are you sure to cancel');
        if(proceed){
          const url = `http://localhost:5000/order/${order?._id}`;
          fetch(url, {
            method: "DELETE"
          })
          .then(res => res.json())
          .then(data => {
            if(data.deletedCount > 0){
                toast('Cancel Successfully')
            }
            refetch();
          })
        }
      }
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
            <div className="text-sm opacity-50 text-red-900 font-semibold">{price} tk</div>
          </div>
        </div>
      </td>
      <td>
        {name}
        <br />
        <span className="badge badge-ghost badge-sm">{email}</span>
      </td>
      <td>
        {address}
        <br />
        <span className="badge badge-ghost badge-sm">{phone}</span>
      </td>
      <td>
        Quantity: {pQuantity}
        <br />
        <span className="badge badge-ghost badge-sm">Total: {total}</span>
      </td>
      
      <td>
      <p className="py-2">{paid ? 
      <button onClick={() => shippingProduct(order._id)} className='btn btn-sm bg-green-600'>SHIPPING</button> : 
      <button onClick={() => deleteProduct(order._id)} className='btn btn-sm bg-red-600'>CANCEL</button>}</p>
      </td>
    </tr>
      
    );
};

export default AllOrder;