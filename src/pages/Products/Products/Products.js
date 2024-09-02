import React from 'react';
import useProduct from '../../../hooks/useProduct';
import Product from '../Product/Product';
import Loading from '../../Shared/Loading/Loading';

const Products = () => {
    const [products, loading] = useProduct([]);

    if(loading){
        <Loading />
    }

    return (
        <div className='bg-base-300 py-[50px]'>
                <div className='grid grid-cols-1md:grid-cols-2 lg:grid-cols-3 gap-10 mx-5 p-5'>
                    {
                        products?.map(product => <Product
                            key={product._id}
                            product={product}
                        ></Product>)
                    }
                </div>
            </div>
    );
};

export default Products;