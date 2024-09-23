import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading/Loading';
import ManageProduct from './ManageProduct';

const ManageProducts = () => {
    const {data: products, isLoading, refetch} = useQuery('products', () => fetch('https://hello-tools-updated-server.vercel.app/api/v1/product').then(res => res.json()))
if(isLoading){
    return <Loading></Loading>
}
    return (
        <div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full table-zebra">
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>NAME</th>
                            <th>EMAIL & QUANTITY</th>
                            <th>DELETE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product, index) => <ManageProduct
                                key={product._id}
                                product={product}
                                index={index}
                                refetch={refetch}
                            ></ManageProduct>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageProducts;