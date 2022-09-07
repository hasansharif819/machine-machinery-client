import React from 'react';
import './Header.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';
import { useQuery } from 'react-query';
import Loading from '../Loading/Loading';
import useAdmin from '../../../hooks/useAdmin';

const Header = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);

    const email = user?.email;
    const logout = () => {
        signOut(auth);
    }
        const {data: carts, isLoading, refetch} = useQuery(['carts', email], () => fetch(`http://localhost:5000/mycart?email=${email}`).then(res => res.json()))
        if(isLoading){
            return <Loading />
        }

        refetch();
    const menu = <>
        <li><Link to='/'>HOME</Link></li>
        <li><Link to='/products'>PRODUCTS</Link></li>
        <li><Link to="/blogs">BLOG</Link></li>
        <li><Link to="/contact">CONTACT US</Link></li>
        { admin && <li><Link to="/dashboard">ADMIN</Link></li>}
        {!user && <li><Link to="/login">LOGIN</Link></li>}
        {!user && <li><Link to="/signup">SIGNUP</Link></li>}

    </>
    return (
        <div>
            <div className='navbar font-bold text-black' id='navHeader'>
                <div className='navbar-start'>
                    <div className='dropdown'>
                        <label tabIndex='0' className='btn btn-ghost lg:hidden'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-start menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menu}
                        </ul>
                    </div>
                    {/* <img height={40} width={40} src="https://i.ibb.co/wcjSQ6c/chilly1.webp" alt="" /> */}
                    <Link to='/' className='text-2xl'>MACHINE & MACHINERY</Link>
                </div>
                <div className='navbar-center hidden lg:flex'>
                    <ul className="menu menu-horizontal p-0">
                        {menu}
                    </ul>
                </div>

                <div className="navbar-end">
                {user && 
                    <div className="flex-none">
                        <div className="dropdown dropdown-end">
                            <label tabIndex="0" className="btn btn-ghost btn-circle">
                                <div className="indicator">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                    <span className="badge badge-sm indicator-item">{carts?.length}</span>
                                </div>
                            </label>
                            <div tabIndex="0" className="mt-3 card-compact dropdown-content w-52 bg-base-100 shadow">
                                <div className="card-body">
                                    <div className="card-actions">
                                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-gray-400 rounded-box w-52">
                                        <li>
                                        <Link to='/mycart'><button className="btn bg-green-700 w-full">CART</button></Link>
                                        </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="dropdown dropdown-end">
                            <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    {user ?
                                     user.photoURL ? <img height={30} width={30} className='rounded-full' src={user?.photoURL} alt="" /> : <div className="avatar online placeholder">
                                       <img height={30} width={30} className='rounded-full' src="https://i.ibb.co/48vFpdg/avatar.png" alt="" />
                                     </div>
                                    : <Link to='/login'>Sign</Link>}

                                </div>
                            </label>
                            <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52 text-white">
                                <li>
                                    <button className='btn bg-gray-400'>
                                        <h2>
                                            {user?.displayName ? user.displayName : 'User name'}
                                            </h2>
                                    </button>
                                </li>
                                <li>
                                    <Link to='/profile'><button className='btn bg-gray-400 w-full text-white'>PROFILE</button></Link>
                                </li>
                                
                                <li>
                                   {!admin && <Link to='/myorder'><button className='btn bg-gray-400 w-full text-white'>MY ORDER</button></Link>}
                                </li>
                                
                                <li>
                                    {!admin && <Link to='/myreview'><button className='btn bg-gray-400 w-full text-white'>REVIEW</button></Link>}
                                </li>
                                <li>
                                    <button className='btn bg-gray-400 text-white' onClick={logout}>Logout</button>
                                </li>

                            </ul>
                        </div>
                    </div>
                }
</div>
            </div>
            <div className="navbar-end">
                <label tabIndex="1" htmlFor="dashboard-sidebar" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
            </div>
        </div>
    );
};

export default Header;
