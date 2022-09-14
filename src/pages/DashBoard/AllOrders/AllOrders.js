import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading/Loading';
import AllOrder from './AllOrder';

const AllOrders = () => {
    const {data: orders, isLoading, refetch} = useQuery('orders', () => fetch('https://serene-sea-89981.herokuapp.com/order').then(res => res.json()))
    if(isLoading){
        return <Loading />
    }
    return (
        <div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full table-zebra">
                    <thead>
                        <tr>
                            <th>
                                INDEX
                            </th>
                            <th>PRODUCT</th>
                            <th>NAME & EMAIL</th>
                            <th>ADDRESS & PHONE</th>
                            <th>QUANTITY & PRICE</th>
                            <th>STATUS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) => <AllOrder
                                key={order._id}
                                order={order}
                                index={index}
                                refetch={refetch}
                            ></AllOrder>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllOrders;