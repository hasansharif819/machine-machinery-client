import React from 'react';
import { Link } from 'react-router-dom';
// import { toast } from 'react-toastify';

const MyOrder = ({ order, index, refetch }) => {
  const { productName, email, img, price, pQuantity } = order;

  // const makePayment = () => {
  //   console.log('payment', email)
  //   fetch(`http://localhost:5000/order/pay/${email}`, {
  //     method: "PUT",
  //     headers: {
  //       authorization: `Bearer ${localStorage.getItem('accessToken')}`
  //     }
  //   })
  //     .then(res => {
  //       if (res.status === 403) {
  //         toast.error('Failed to make payment')
  //       }
  //       return res.json()
  //     })
  //     .then(data => {
  //       console.log('data', data)
  //       if (data.modifiedCount > 0) {
  //         toast.success('Payment Successfull');
  //         refetch();
  //       }
  //     })
  // }

  const deleteItem = _id => {
    console.log('deleted', _id);
    const proceed = window.confirm('Are you sure to delete');
    if (proceed) {
      const url = `http://localhost:5000/order/${order?._id}`;
      fetch(url, {
        method: "DELETE"
      })
        .then(res => res.json())
        .then(data => {
          if (data.deletedCount > 0) {
            refetch();
          }
        })
    }
  }

  const total = parseInt(price * pQuantity);
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
      <td>
        {(order.total && !order.paid) && <Link to={`/myorder/${order._id}`}><button className='btn btn-xs btn-success'>pay</button></Link>}
        {(order.total && order.paid) && <div>
          <p><span className='text-success'>Paid</span></p>
          <p><span className='text-success text-sm'>{order.transaction}</span></p>
        </div>}
      </td>
      <th>
        {order.paid !== true && <button onClick={() => deleteItem(order._id)} className='btn bg-red-600 btn-xs'>CANCEL</button>}
      </th>
    </tr>
  );
};

export default MyOrder;