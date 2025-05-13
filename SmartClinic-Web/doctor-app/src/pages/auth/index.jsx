import React, { useState } from 'react';
import './style.css';
import LoginCard from '../../components/Auth/LoginCard';
import SignupCard from '../../components/Auth/SignupCard';
import { request } from '../../utils/request';
import { useNavigate } from 'react-router-dom';
const Auth = () => {
    const navigate = useNavigate();
    const [isLogin, setIsLogin] = useState(true);
    const [loading, setLoading] = useState(false)
    const handleLogin = async ({ email, password }) => {
        try {
          setLoading(true);
          const response = await request({
            method: "POST",
            route: `/auth/doctor/login`,
            body: { email, password },
            auth: false,
          })
          if(response.success){
            localStorage.setItem('access_token',response.data.token )
            navigate('/doctor/dashboard')
          }
          console.log(response)
        } catch (error) {
          // show error
          console.error(error);
        } finally {
          setLoading(false);
        }
      };
      const handleLinkClick = () => {
        setIsLogin(false)
      }
    return (
        <div className='auth-body'>
        <div className='top-right-circle'></div>
          {isLogin ? (<LoginCard  onLogin={handleLogin}
      onLinkClick={handleLinkClick}
      loading={loading}  />) 
            : (
               <SignupCard linkClick={() => setIsLogin(true)} SignupClick={() => console.log('signup clicked')}/>
            )  
        }
                    
                <div className="bottom-left-circle"></div>
          
        </div>
    );
};

export default Auth;