import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading/Loading';
import Blog from './Blog';

const Blogs = () => {
    const {data: blogs, isLoading, refetch} = useQuery('blogs', () => fetch('https://serene-sea-89981.herokuapp.com/blogs')
    .then(res => res.json())
    )
    if(isLoading){
        return <Loading />
    }
    return (
        <div>
            {
                blogs.map(blog => <Blog
                key={blog._id}
                blog={blog}
                refetch={refetch}
                ></Blog>)
            }
        </div>
    );
};

export default Blogs;