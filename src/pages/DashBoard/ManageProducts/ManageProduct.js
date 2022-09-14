import React from 'react';

const ManageProduct = ({ product, refetch, index }) => {
    const { name, price, quantity, img, email} = product;

    const deleteItem = _id => {
        console.log('deleted', _id);
        const proceed = window.confirm('Are you sure to delete');
        if(proceed){
          const url = `https://serene-sea-89981.herokuapp.com/product/${product?._id}`;
          fetch(url, {
            method: "DELETE"
          })
          .then(res => res.json())
          .then(data => {
            console.log(data)
            if(data.deletedCount > 0){
              refetch();
            }
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
              <div className="font-bold">{name}</div>
              {/* <div className="text-sm opacity-50 text-red-900 font-semibold">${price}</div> */}
            </div>
          </div>
        </td>
        <td>
          ${price}
          <br />
          <span className="badge badge-ghost badge-sm">Quantity: {quantity}</span>
        </td>
        <th>
          <button onClick={() => deleteItem(product._id)} ><img className='rounded-full' height={50} width={50} src="https://i.ibb.co/thV5zXx/deleteicon1.jpg" alt="" /></button>
        </th>
      </tr>
    );
};

export default ManageProduct;