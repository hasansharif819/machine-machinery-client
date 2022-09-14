import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import MyOrder from './MyOrder';

const MyOrders = () => {
    const [user] = useAuthState(auth);    
        const {data: orders, isLoading, refetch} = useQuery('orders', () => fetch(`https://serene-sea-89981.herokuapp.com/myorder?email=${user?.email}`).then(res => res.json()))
        if(isLoading){
            return <Loading />
        }

    return (
        <div className="overflow-x-auto w-full">
                <table className="table w-full table-zebra">
                    <thead>
                        <tr>
                            <th>INDEX</th>
                            <th>NAME</th>
                            <th>EMAIL & QUANTITY</th>
                            <th>TOTAL</th>
                            <th>STATUS</th>
                            <th>DELETE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders?.map((order, index) => <MyOrder
                                key={order._id}
                                order={order}
                                index={index}
                                refetch={refetch}
                            ></MyOrder>)
                        }
                    </tbody>
                </table>
            </div>
    );
};

export default MyOrders;