import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import './Blog.css';


const Blog = ({ blog, refetch }) => {
    const {name, des, img, docs} = blog;
    const [user] = useAuthState(auth);


    const handleComment = async event => {
        event.preventDefault();
    
        if (!user) {
            alert("You need to be logged in to comment.");
            return;
        }
    
        try {
            const token = await user.getIdToken();
    
            const comment = {
                email: user?.email,
            name: user?.displayName,
            img: user?.photoURL,
                comment: event.target.comment.value,
                blogId: blog._id
            };
    
            // console.log("Comment being sent: ", comment);
    
            const response = await fetch('https://hello-tools-updated-server.vercel.app/api/v1/comments/create-comment', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(comment)
            });
    
            const data = await response.json();
            // console.log("Response data: ", data);
    
            if (data.success === true) {
                event.target.reset();
            } else {
                console.error("Failed to submit comment: ", data.message);
            }
        } catch (error) {
            console.error("Error occurred: ", error);
        }
    };
    
    //load comment
    const [comments, setComments] = useState([]);
    useEffect( () => {
        fetch(`https://hello-tools-updated-server.vercel.app/api/v1/comments/blog/${blog._id}`)
    .then(res => res.json())
    .then(data => setComments(data.data))
    }, [user, blog, comments])

    return (
        <div>
            <div className='outerBlog bg-gray-900'>
                <div className='inner11'>
                    <img className='fluid' src={img} alt="" />
                </div>
                <div className='inner22 justify-center text-start'>
                    <div className="card w-96 text-red-50 shadow-xl sm:justify-center">
                        <div className="card-body">
                            <h2 className="card-title text-red-400">{name}</h2>
                            <p>{des}</p>
                            <div className="card-actions justify-center">
                                <a href={docs} target='_blank' without rel="noreferrer"><button className="btn btn-sm bg-red-900">DETAILS</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='inner33 text-center align-center text-red-200 border-red-200'>
                    {
                        comments.map(com => <div
                            key={com._id}
                        >
                        <div id='comment'>
                        <div id='comment_user'>

                        {com?.img ? 
                        <img height={30} width={30} src={com.img} alt="" /> : 
                        <img height={30} width={30} className='rounded-full' src="https://i.ibb.co/48vFpdg/avatar.png" alt="" />
                    }

                        <h2>
                            {com?.name ? com?.name : 'User name'}
                            </h2>
                        </div>
                        <span className='text-start ml-10'>{com.comment}</span>
                        </div>
                        </div>)
                    }
            
                <form
                            onSubmit={handleComment}
                            className='grid grid-cols-1 gap-3 justify-items-center mt-2'>
                            <input type="text" name="comment" placeholder='Write a comment...' className="input input-bordered w-full max-w-xs rounded-lg text-black" required/>
                            <input type="submit" value="Comment" className="btn bg-red-900 w-full max-w-xs" />
                        </form>
                </div>
            </div>
        </div>
    );
};

export default Blog;