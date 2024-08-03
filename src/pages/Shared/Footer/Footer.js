import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer p-10 text-orange-400 " id='footer'>
          <div>
            <h2 className='text-2xl font-bold text-start text-orange-400'>HELLO TOOLS</h2>
            <p className=' font-semibold text-start text-orange-400'>We provide different types of Tools all over the world. All of our tools are invented by our experienced engineer. We always try to maintain the best quality of every tool</p>
          </div>
  <div>
    <span className="footer-title">Services</span> 
    <a href='/product' className="link link-hover">Tools</a> 
    <a href='/product' className="link link-hover">Products</a> 
    <a href='/product' className="link link-hover">Selling</a> 
    <a href='/product' className="link link-hover">Marketing</a> 
    <a href='/product' className="link link-hover">Export</a> 
    <a href='/product' className="link link-hover">Advertisement</a>
  </div> 
  <div>
    <span className="footer-title">Company</span> 
    <a href='/contact' className="link link-hover">About us</a> 
    <a href='/contact' className="link link-hover">Contact</a> 
    <a href='/contact' className="link link-hover">Jobs</a> 
    <a href='/contact' className="link link-hover">Press kit</a>
  </div> 
  <div>
    <span className="footer-title">Legal</span> 
    <a href='/' className="link link-hover">Terms of use</a> 
    <a href='/' className="link link-hover">Privacy policy</a> 
    <a href='/' className="link link-hover">Cookie policy</a>
  </div> 
  <div className='flex flex-col'>
    <span className="footer-title mx-auto">HELLO TOOLS</span> 
    <div className="form-control w-80">
      <label className="label mx-auto">
        <span className="label-text text-orange-400">Enter your email address</span>
      </label> 
      <div className="relative">
        <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" /> 
        <button className="btn bg-orange-400 absolute top-0 right-0 rounded-l-none">Subscribe</button>
      </div>
    </div>
    
    <div className='w-[100%] mx-auto my-5'>
      <div className="flex justify-center items-center gap-8">
        <a href="https://www.facebook.com/profile.php?id=100012993934707&mibextid=kFxxJD" target="_blank" rel="noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
            <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
          </svg>
        </a>
        <a href="https://www.linkedin.com/in/sharif-hasan-073a58218/" target="_blank" rel="noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.281c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.281h-3v-5.5c0-1.104-.896-2-2-2s-2 .896-2 2v5.5h-3v-10h3v1.5c.825-1.218 2.355-1.5 3.5-1.5 2.206 0 4 1.794 4 4v6z"></path>
          </svg>
        </a>
        <a href="https://github.com/hasansharif819" target="_blank" rel="noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.234c-3.338.725-4.042-1.415-4.042-1.415-.546-1.387-1.333-1.757-1.333-1.757-1.089-.744.083-.729.083-.729 1.205.085 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.775.418-1.305.76-1.605-2.665-.305-5.466-1.335-5.466-5.93 0-1.31.467-2.381 1.236-3.221-.123-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.004-.403 1.02.004 2.047.137 3.004.403 2.292-1.552 3.301-1.23 3.301-1.23.653 1.653.241 2.873.118 3.176.77.84 1.236 1.911 1.236 3.221 0 4.61-2.805 5.625-5.475 5.921.43.37.823 1.096.823 2.211v3.282c0 .319.219.694.825.576 4.765-1.588 8.205-6.084 8.205-11.386 0-6.627-5.373-12-12-12z"></path>
          </svg>
        </a>
        <a href="https://www.youtube.com/channel/UCWkTngyHHIhNSUkZ9tBnStA" target="_blank" rel="noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
            <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
          </svg>
        </a>
      </div>
    </div>

    <div>
    <p>Copyright © 2024 - All right reserved by HELLO TOOLS Authority</p>
  </div>
  </div>
</footer>
    );
};

export default Footer;