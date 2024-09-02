import './App.css';
import {Routes, Route} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './pages/Shared/Header/Header';
import Footer from './pages/Shared/Footer/Footer';
import Login from './pages/Login/Login/Login';
import Signup from './pages/Login/Signup/Signup';
import Home from './pages/Home/Home/Home';
import Products from './pages/Products/Products/Products';
import Purchase from './pages/Purchase/Purchase';
import MyOrders from './pages/Users/MyOrder/MyOrders';
import MyCarts from './pages/Users/MyCart/MyCarts';
import Payment from './pages/Payment/Payment';
import MyReview from './pages/Users/MyReview/MyReview';
import Dashboard from './pages/DashBoard/Dashboard';
import AllUsers from './pages/DashBoard/AllUsers/AllUsers';
import AddProducts from './pages/DashBoard/AddProducts/AddProducts';
import ManageProducts from './pages/DashBoard/ManageProducts/ManageProducts';
import Profile from './pages/DashBoard/Profile/Profile';
import AllOrders from './pages/DashBoard/AllOrders/AllOrders';
import NotFound from './pages/NotFound/NotFound';
import Contact from './pages/Home/Contact/Contact';
import RequireAuth from './pages/Login/RequireAuth/RequireAuth';
import RequireAdmin from './pages/Login/Login/RequireAdmin/RequireAdmin';
import Blogs from './pages/Blog/Blogs';
import AddBlogs from './pages/Blog/AddBlogs';
import UpdateProfile from './pages/DashBoard/Profile/UpdateProfile';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='main-content'>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/products' element={<Products />}></Route>
        <Route path='/products/:purchaseID' element={
        <RequireAuth><Purchase /></RequireAuth>
        }></Route>
        <Route path='/myorder' element={
          <RequireAuth><MyOrders /></RequireAuth>
        }></Route>
        <Route path='/myorder/:paymentID' element={
          <RequireAuth><Payment /></RequireAuth>
        }></Route>
        <Route path='/mycart' element={
          <RequireAuth><MyCarts /></RequireAuth>
        }></Route>
        <Route path='/myreview' element={
          <RequireAuth><MyReview /></RequireAuth>
        }></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/profile' element={
          <RequireAuth><Profile /></RequireAuth>
        }></Route>
        <Route path='/updateprofile' element={
          <RequireAuth><UpdateProfile /></RequireAuth>
        }></Route>

        <Route path='/blogs' element={<Blogs />}></Route>

        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>

        <Route path='/dashboard' element={<RequireAuth><Dashboard /></RequireAuth>}>
        <Route index element={<RequireAdmin><AllUsers></AllUsers></RequireAdmin>}></Route>
        <Route path="orders" element={<RequireAdmin><AllOrders></AllOrders></RequireAdmin>}></Route>
        <Route path="addProduct" element={<RequireAdmin><AddProducts></AddProducts></RequireAdmin>}></Route>
        <Route path="manageProduct" element={<RequireAdmin><ManageProducts></ManageProducts></RequireAdmin>}></Route>
        <Route path="addblogs" element={<RequireAdmin><AddBlogs></AddBlogs></RequireAdmin>}></Route>
        </Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
      </div>

      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
