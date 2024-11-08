import { Flex, Input, Typography } from 'antd';
import './LoginPage.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [user, setUser] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    console.log(user)
  },[user])

  return <div className='login-window d-flex align-items-center justify-content-center'>
  <div className="login-container d-flex">
      <div className="login-form">
          <h3 className='mt-2'>{isLogin ? "Login" : "Register"}</h3>
          <div>Doesn't have an account yet? <a onClick={() => {setIsLogin(prev => !prev)}} style={{color : '#9526FF', textDecoration: 'underline', cursor: 'pointer'}}>{isLogin ? "Login" : "Register"}</a></div>
          <div className='mt-4'>
            <div>
              <Typography.Title level={5}>Username/Email</Typography.Title>
              <Input placeholder='your@email.com'/>
            </div>
            <div className = 'mt-3'>
            <Typography.Title level={5}>Password</Typography.Title>
              <Input onChange={(e) => } placeholder='Enter 6 character or more' type='password'/>
            </div>
            <div className = 'mt-3'>
              <input type="checkbox"/><span>Remember me!</span>
            </div>
            <button className='btn login-btn mt-4'>{isLogin ? "Login" : "Register"}</button>
            <div className='d-flex mt-2'>
              <hr style={{width: '50%'}}/><div className='mx-1' style={{whiteSpace: 'nowrap'}}>Or signin with</div> <hr style={{width: '50%'}}/>
            </div>
            <div className='d-flex justify-content-between'>
              <button className='btn-google'><FcGoogle />Google</button>
              <button className='btn-facebook'><FaFacebookF />FaceBook</button>
            </div>
          </div>
      </div>
      <div className = 'login-img'>
        <img src="/img/login.avif" alt="" />
      </div>
  </div>
  </div>
}