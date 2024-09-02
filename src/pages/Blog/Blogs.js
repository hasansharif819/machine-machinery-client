import React from 'react';
import Loading from '../Shared/Loading/Loading';
import Blog from './Blog';
import useBlogs from '../../hooks/useBlogs';

const Blogs = () => {
    const { blogs, error, loading } = useBlogs();

    if (loading) {
        return <Loading />;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!blogs || blogs.length === 0) {
        return <div>No blogs available</div>;
    }

    return (
        <div className='bg-gray-900 py-[50px]'>
            <h2 className='title font-bold text-4xl py-2 text-orange-400 pb-10'>Blogs</h2>
            {
                blogs?.map(blog => (
                    <Blog
                        key={blog._id}
                        blog={blog}
                    />
                ))
            }
        </div>
    );
};

export default Blogs;
