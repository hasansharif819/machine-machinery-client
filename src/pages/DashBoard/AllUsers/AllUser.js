import React from 'react';
import { toast } from 'react-toastify';

const AllUser = ({ user, refetch, index }) => {
    const { email, role } = user;
    const makeAdmin = () => {
        fetch(`https://serene-sea-89981.herokuapp.com/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if(res.status === 403){
                    toast.error('Failed to Make an admin');
                }
                return res.json()})
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success(`Successfully made an admin`);
                }

            })
    }

    const deleteItem = _id => {
        console.log('deleted', _id);
        const proceed = window.confirm('Are you sure to delete');
        if(proceed){
          const url = `https://serene-sea-89981.herokuapp.com/user/${user?._id}`;
          fetch(url, {
            method: "DELETE"
          })
          .then(res => res.json())
          .then(data => {
            if(data.deletedCount > 0){
                toast('Deleted Successfully')
              refetch();
            }
          })
        }
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{email}</td>
            <td>{role !== 'admin' && <button onClick={makeAdmin} className="btn btn-xs bg-green-500">Make Admin</button>}</td>
            <td>
            <button onClick={() => deleteItem(user._id)} ><img className='rounded-full' height={50} width={50} src="https://i.ibb.co/thV5zXx/deleteicon1.jpg" alt="" /></button>                </td>
        </tr>
    );
};

export default AllUser;