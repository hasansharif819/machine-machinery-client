import React from 'react';
import useProduct from '../../../hooks/useProduct';
import BannerProduct from './BannerProduct';

const BannerProducts = () => {
    const [products] = useProduct([]);
    return (
        <div className='mt-5 bg-base-300'>
             <div>
            <h2 className='title font-bold text-4xl py-2 text-orange-400'>HELLO TOOLS</h2>
            <h2 className='title font-bold text-3xl py-2 text-orange-400'>LATEST FROM INVENTORY</h2>
            <h2 className='title font-semibold text-xl py-2 text-orange-400'>You can view different types of parts & products</h2>
            </div>
                <div className='grid grid-cols-1md:grid-cols-2 lg:grid-cols-3 gap-10 mx-5 mt-5 p-5'>
                    {
                        products.slice(0, 6).map(product => <BannerProduct
                            key={product._id}
                            product={product}
                        ></BannerProduct>)
                    }
                </div>
            </div>
    );
};

export default BannerProducts;