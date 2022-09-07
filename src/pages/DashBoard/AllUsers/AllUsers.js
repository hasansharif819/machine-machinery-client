import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading/Loading';
import AllUser from './AllUser';

const AllUsers = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('http://localhost:5000/user', {
        method: 'GET',
        headers:{
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className="text-2xl">All Users: {users?.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>INDEX</th>
                            <th>EMAIL</th>
                            <th>MAKE ADMIN</th>
                            <th>REMOVE USER</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                           users?.map((user, index)=><AllUser
                           key={user._id}
                           user={user}
                           index={index}
                           refetch={refetch}
                           ></AllUser>)
                       }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;