import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddBlogs = () => {
    const {register, formState: { errors },reset, handleSubmit} = useForm();
    const [user] = useAuthState(auth);
    const email = user?.email;
    const imageStorageKey = '4fb1911cd7fea07ca539c23c89d490db';

    const onSubmit = async data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(result => {
            if(result.success){
                const image = result.data.url;
                const item = {
                    email: email,
                    name:data.name,
                    des: data.des,
                    docs: data.docs,
                    img: image
                }
                fetch('https://hello-tools-server.vercel.app/blogs', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(item)
                })
                .then(res => res.json())
                .then(result => {
                    if(result.success){
                        toast('Successfully Added New Blog');
                        reset();
                    }
                })
            }
        })
    }
    return (
        <div id='backgroundImage'>
            <h2 className='text-center text-5xl font-bold text-red-400'>Add blog</h2>
            <form onSubmit={handleSubmit(onSubmit)}
            className='grid grid-cols-1 justify-items-center py-5'>


                <div className='form-control w-full max-w-xs'>
                    <input 
                    type="text" 
                    placeholder='Blog Name'
                    className='input input-bordered w-full max-w-xs'
                    {...register('name', {
                        required: {
                            value: true,
                            message: 'Name is required'
                        }
                    })}
                    />
                    <label className='label'>
                        {errors.name?.type === 'required' && <span className='label-text-alt text-red-400'>{errors.name.message}</span>}
                    </label>
                </div>
                
                <div className='form-control w-full max-w-xs'>
                <textarea rows={6} cols={30}
                    type="text" 
                    placeholder='Description'
                    className='input input-bordered w-full max-w-xs h-28'
                    {...register('des', {
                        required: {
                            value: true,
                            message: 'Description is required'
                        }
                    })}
                    />
                    <label className='label'>
                        {errors.des?.type === 'required' && <span className='label-text-alt text-red-400'>{errors.des.message}</span>}
                    </label>
                </div>

                <div className='form-control w-full max-w-xs'>
                    <input 
                    type="text" 
                    placeholder='Document link'
                    className='input input-bordered w-full max-w-xs'
                    {...register('docs', {
                        required: {
                            value: true,
                            message: 'Documents link is required'
                        }
                    })}
                    />
                    <label className='label'>
                        {errors.docs?.type === 'required' && <span className='label-text-alt text-red-400'>{errors.docs.message}</span>}
                    </label>
                </div>
                <div className='form-control w-full max-w-xs'>
                    <input 
                    type="file" 
                    placeholder='Image of Product'
                    className='input input-bordered w-full max-w-xs'
                    {...register('image', {
                        required: {
                            value: true,
                            message: 'Image is required'
                        }
                    })}
                    />
                    <label className='label'>
                        {errors.image?.type === 'required' && <span className='label-text-alt text-red-400'>{errors.image.message}</span>}
                    </label>
                </div>
                <input type="submit" value="ADD BLOG"  className='btn bg-red-800 w-full max-w-xs'/>
            </form>
        </div>
    );
};

export default AddBlogs;