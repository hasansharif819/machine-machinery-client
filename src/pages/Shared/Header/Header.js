import React from 'react';
import './Header.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';
import { useQuery } from 'react-query';
import useAdmin from '../../../hooks/useAdmin';
import b9 from '../../../assets/Banner/b9.jpg';

const Header = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);

    const email = user?.email;
    const logout = () => {
        signOut(auth);
    }

    // const { data: carts } = useQuery(['carts', email], () => fetch(`https://hello-tools-updated-server.vercel.app/api/v1/mycart?email=${email}`).then(res => res.json()))


    const menu = <>
        <li><Link to='/products'>PRODUCTS</Link></li>
        <li><Link to="/blogs">BLOG</Link></li>
        <li><Link to="/contact">CONTACT US</Link></li>
        {admin && <li><Link to="/dashboard">ADMIN</Link></li>}
        {!user && <li><Link to="/login">LOGIN</Link></li>}
        {!user && <li><Link to="/signup">SIGNUP</Link></li>}

    </>
    return (
        <div>
            <div className='navbar font-bold text-black fixed top-0 text-white shadow-2xl bg-black z-[999]' id='navHeader'>
                <div className='navbar-start ml-[140px]'>
                    <div className='dropdown'>
                        <label tabIndex='0' className='btn btn-ghost lg:hidden'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-start menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menu}
                        </ul>
                    </div>
                    <img height={40} width={40} src={b9} alt="" className='dropdown-logo rounded mr-3' />
                    <Link to='/' className='dropdown-link text-2xl'>HELLO TOOLS</Link>
                </div>
                <div className='navbar-center hidden lg:flex text-white'>
                    <ul className="menu menu-horizontal p-0 text-white">
                        {menu}
                    </ul>
                </div>

                <div className="navbar-end navbar-nav-none">
                    <label tabIndex="1" htmlFor="dashboard-sidebar" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                </div>

                <div className="navbar-end mr-[140px]">
                    {user &&
                        <div className="flex-none">
                            <div className="dropdown dropdown-end">
                                <label tabIndex="0" className="btn btn-ghost btn-circle">
                                    <div className="indicator">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                        {/* <span className="badge badge-sm indicator-item">{carts?.length}</span> */}
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
                                <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52 text-white bg-base-100">

                                    <li>
                                        <Link to='/profile'><button className='btn bg-gray-400 w-full text-white'>{user?.displayName ? user.displayName : 'User name'}</button></Link>
                                    </li>

                                    <li>
                                        {!admin && <Link to='/myorder'><button className='btn bg-gray-400 w-full text-white'>MY ORDER</button></Link>}
                                    </li>

                                    <li>
                                        {!admin && <Link to='/myreview'><button className='btn bg-gray-400 w-full text-white'>REVIEW</button></Link>}
                                    </li>
                                    <li>
                                        <Link to='/login'><button className='btn bg-gray-400 text-white w-[100%]' onClick={logout}>Logout</button></Link>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;
