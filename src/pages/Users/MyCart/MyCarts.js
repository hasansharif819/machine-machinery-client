import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading/Loading';
import MyCart from './MyCart';

const MyCarts = () => {
    const [user] = useAuthState(auth);    
        const {data: carts, isLoading, refetch} = useQuery('carts', () => fetch(`http://localhost:5000/mycart?email=${user?.email}`).then(res => res.json()))
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
                            {/* <th>ORDER</th> */}
                            <th>DELETE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            carts?.map((cart, index) => <MyCart
                                key={cart._id}
                                cart={cart}
                                index={index}
                                refetch={refetch}
                            ></MyCart>)
                        }
                    </tbody>
                </table>
            </div>
    );
};

export default MyCarts;