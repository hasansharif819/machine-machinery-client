import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';

const UpdateProfile = () => {
    const [user] = useAuthState(auth);
    const { register, reset, handleSubmit } = useForm();


    const { data: users, isLoading, refetch } = useQuery('users', () => fetch(`http://localhost:5000/profile?email=${user?.email}`).then(res => res.json()))
    if (isLoading) {
        return <Loading />
    }
    const imageStorageKey = '4fb1911cd7fea07ca539c23c89d490db';

    const updateName = async data => {
        const name = {
            name: data.name,
        }
        const url = `http://localhost:5000/user/${users.email}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(name)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
        refetch();
    }
    const updateAddress = async data => {
        const address = {
            address: data.address,
        }
        const url = `http://localhost:5000/user/${users.email}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(address)
        })
            .then(res => res.json())
        refetch();
    }

    const updateEducation = async data => {
        const education = {
            education: data.education,
        }
        const url = `http://localhost:5000/user/${users.email}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(education)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
        refetch();
    }

    const updateAge = async data => {
        const age = {
            age: data.age,
        }
        const url = `http://localhost:5000/user/${users.email}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(age)
        })
            .then(res => res.json())
            .then(data => {
                toast('Updated')
            })
        refetch();
    }

    const updateGender = async data => {
        const gender = {
            gender: data.gender,
        }
        const url = `http://localhost:5000/user/${users.email}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(gender)
        })
            .then(res => res.json())
            .then(data => {
                toast('Updated')
            })
        refetch();
    }
    //profile picture
    const updateProfilePic = async data => {
        const image = data.image1[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const image = result.data.url;
                    const profilePic = {
                        img1: image
                    }

                    fetch(`http://localhost:5000/user/${users.email}`, {
                        method: 'PUT',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(profilePic)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result)
                            if (result.success) {
                                toast('Profile picture upload Successfully');
                                reset();
                            }
                            refetch();
                        })
                }
            })
            
    }

//cover photo
const updateCoverPic = async data => {
    const image2 = data.image2[0];
    console.log('click', image2)
    const formData = new FormData();
    formData.append('image2', image2);
    // const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
    fetch(`https://api.imgbb.com/1/upload?key=${imageStorageKey}`, {
        method: 'POST',
        body: formData
    })
        .then(res => res.json())
        .then(result => {
            if (result.modifiedCount > 0) {
                const image = result.data.url;
                const coverPic = {
                    img2: image
                }
console.log(image)
                fetch(`http://localhost:5000/user/${users.email}`, {
                    method: 'PUT',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(coverPic)
                })
                    .then(res => res.json())
                    .then(result => {
                        console.log(result)
                        if (result.modifiedCount > 0) {
                            toast('Cover photo upload Successfully');
                            reset();
                        }
                        refetch();
                    })
            }
        })  
}

    return (
        <div>
            <form onSubmit={handleSubmit(updateName)}
                className='flex justify-center items-center py-2 gap-2'>
                <div className='form-control w-full max-w-xs'>
                    <input
                        type="text"
                        placeholder='Name'
                        className='input input-bordered w-full max-w-xs'
                        {...register('name')}
                    />
                </div>
                <input type="submit" value="UPDATE" className='btn bg-green-800 btn-sm' />
            </form>

            <form onSubmit={handleSubmit(updateAddress)}
                className='flex justify-center items-center py-2 gap-2'>
                <div className='form-control w-full max-w-xs'>
                    <input
                        type="text"
                        placeholder='Address'
                        className='input input-bordered w-full max-w-xs'
                        {...register('address')}
                    />
                </div>
                <input type="submit" value="UPDATE" className='btn bg-green-800 btn-sm' />
            </form>

            <form onSubmit={handleSubmit(updateEducation)}
                className='flex justify-center items-center py-2 gap-2'>
                <div className='form-control w-full max-w-xs'>
                    <input
                        type="text"
                        placeholder='Education'
                        className='input input-bordered w-full max-w-xs'
                        {...register('education')}
                    />
                </div>
                <input type="submit" value="UPDATE" className='btn bg-green-800 btn-sm' />
            </form>

            <form onSubmit={handleSubmit(updateAge)}
                className='flex justify-center items-center py-2 gap-2'>
                <div className='form-control w-full max-w-xs'>
                    <input
                        type="text"
                        placeholder='Age'
                        className='input input-bordered w-full max-w-xs'
                        {...register('age')}
                    />
                </div>
                <input type="submit" value="UPDATE" className='btn bg-green-800 btn-sm' />
            </form>

            <form onSubmit={handleSubmit(updateGender)}
                className='flex justify-center items-center py-2 gap-2'>
                <div className='form-control w-full max-w-xs'>
                    <input
                        type="text"
                        placeholder='Gender'
                        className='input input-bordered w-full max-w-xs'
                        {...register('gender')}
                    />
                </div>
                <input type="submit" value="UPDATE" className='btn bg-green-800 btn-sm' />
            </form>

            <form onSubmit={handleSubmit(updateProfilePic)}
                className='flex justify-center items-center py-2 gap-2'>
                <div className='form-control w-full max-w-xs'>
                    <input
                        type="file"
                        placeholder='Profile Photo'
                        className='input input-bordered w-full max-w-xs'
                        {...register('image1')}
                    />
                </div>
                <input type="submit" value="UPDATE" className='btn bg-green-800 btn-sm' />
            </form>

            <form onSubmit={handleSubmit(updateCoverPic)}
                className='flex justify-center items-center py-2 gap-2'>
                <div className='form-control w-full max-w-xs'>
                    <input
                        type="file"
                        placeholder='Cover Photo'
                        className='input input-bordered w-full max-w-xs'
                        {...register('image2')}
                    />
                </div>
                <input type="submit" value="UPDATE" className='btn bg-green-800 btn-sm ' />
            </form>
        </div>

    );
};

export default UpdateProfile;