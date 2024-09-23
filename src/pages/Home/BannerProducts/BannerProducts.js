import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BannerProduct from './BannerProduct';
import Loading from '../../Shared/Loading/Loading';

const BannerProducts = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const getAllProducts = async () => {
        try {
            const response = await axios.get('https://hello-tools-updated-server.vercel.app/api/v1/products');
            // console.log('Response:', response.data);
            if (Array.isArray(response.data.data)) {
                setProducts(response.data.data);
            } else if (response.data.data && Array.isArray(response.data.data)) {
                setProducts(response.data.data);
            } else {
                throw new Error('Unexpected response format');
            }
            setLoading(false);
        } catch (error) {
            console.error('Error fetching products:', error);
            setError(error);
            setLoading(false);
        }
    };

    useEffect(() => {
        getAllProducts();
    }, []);

    if (loading) return <Loading />;
    if (error) return <p>Error loading products: {error.message}</p>;

    return (
        <div className='bg-base-300 py-[50px]'>
            <div>
                <h2 className='title font-bold text-4xl py-2 text-orange-400'>HELLO TOOLS</h2>
                <h2 className='title font-bold text-3xl py-2 text-orange-400'>LATEST FROM INVENTORY</h2>
                <h2 className='title font-semibold text-xl py-2 text-orange-400'>You can view different types of parts & products</h2>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-5 mt-5 p-5'>
                {products.slice(0, 6)?.map(product => (
                    <BannerProduct
                        key={product._id}
                        product={product}
                    />
                ))}
            </div>
        </div>
    );
};

export default BannerProducts;
