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
        <div>
            {
                blogs.map(blog => (
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
