import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <div className="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {/* <h2 className='text-2xl font-bold text-purple-500'>Welcome to Dashboard</h2> */}
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
                    { admin && <>
                        <li><Link to="/dashboard">USER</Link></li>
                        <li><Link to="/dashboard/addProduct">ADD PRODUCT</Link></li>
                        <li><Link to="/dashboard/manageProduct">MANAGE</Link></li>
                        <li><Link to="/dashboard/orders">ORDER</Link></li>
                        <li><Link to="/dashboard/addblogs">ADD BLOG</Link></li>
                    </>}
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;