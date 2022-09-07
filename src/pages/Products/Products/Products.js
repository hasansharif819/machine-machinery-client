import React from 'react';
import useProduct from '../../../hooks/useProduct';
import Product from '../Product/Product';

const Products = () => {
    const [products] = useProduct([]);
    return (
        <div className='bg-base-300'>
             <div>
            <h2 className='title font-bold text-4xl py-2 text-red-800'>Machine & Machinery</h2>
            <h2 className='title font-bold text-3xl py-2 text-red-800'>LATEST FROM INVENTORY</h2>
            <h2 className='title font-semibold text-xl py-2 text-red-900'>You can view different types of parts & products</h2>
            </div>
                <div className='grid grid-cols-1md:grid-cols-2 lg:grid-cols-3 gap-10 mx-5 p-5'>
                    {
                        products.map(product => <Product
                            key={product._id}
                            product={product}
                        ></Product>)
                    }
                </div>
            </div>
    );
};

export default Products;