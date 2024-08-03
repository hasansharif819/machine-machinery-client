import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import b1 from '../../../assets/Banner/b1.jpg';
import b2 from '../../../assets/Banner/b2.jpg';
import camera from '../../../assets/summary/camera-icon.jpg';
import './Profile.css';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading/Loading';
import { Link } from 'react-router-dom';

const Profile = () => {
  const [user] = useAuthState(auth);
  const email = user?.email;

  const { data: users, isLoading } = useQuery('users', () => fetch(`https://hello-tools-server.vercel.app/profile?email=${email}`).then(res => res.json()))
  if (isLoading) {
    return <Loading />
  }
  // console.log(users);

  return (
    <div className='bg-base-200'>
      <div className='cover-photo'>
        {users.img2 ? <img src={users?.img2} alt="" /> : <img src={b1} alt="" />}
      </div>
      <div>
        <div className='profile-photo'>
          {users.img1 ? <img src={users.img1} alt="" /> : <img src={b2} alt="" />}
        </div>
        <div className='camera-icon'>
          <img src={camera} alt="" />
        </div>
      </div>
      <div className='user-profile'>
        <h2 className='text-3xl font-bold pt-5'>{user?.displayName}</h2>
        <h3 className='text-xl font-semibold pt-5'>{user?.email}</h3>
      </div>
      <div className='text-start ml-32 mt-10'>
        <h2 className='text-2xl'>Name: {users?.name} ({users?.role})</h2>
        <h2 className='taxt-xl pt-2'>Address: {users?.address}</h2>
        <h2 className='taxt-xl pt-2'>Gender: {users?.gender}</h2>
        <h2 className='taxt-xl pt-2'>Age: {users?.age}</h2>
        <h2 className='taxt-xl pt-2'>Degree: {users?.education}</h2>
        <Link to='/updateprofile'><button className='btn my-3 bg-gradient-to-r from-orange-500 to-red-400'>Edit profile</button>
      </Link>
      </div>
      
    </div>
  );
};

export default Profile;
