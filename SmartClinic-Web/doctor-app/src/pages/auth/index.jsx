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

    const [message, setMessage] = useState("");
    const [showMessage, setShowMessage] = useState(false);
    const displayMessage = (msg) => {
        setMessage(msg);
        setShowMessage(true);
        setTimeout(() => setShowMessage(false), 3000);
      };
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
      const  handleSignup = async ({ name, email, password })=>{
        try {
            setLoading(true);
            const response = await request({
              method: "POST",
              route: `/auth/doctor/register`,
              body: { name, email, password ,yearsExperience:0, profilePicture:'null' },
              auth: false,
            })
            if(response.success){
              localStorage.setItem('access_token',response.data.token )
              navigate('/doctor/dashboard')
            }else{
                displayMessage(response?.message?.error || response?.message?.errors[0].msg );
            }
            console.log(response)
          } catch (error) {
            displayMessage(error.message || "An error occurred.");
            console.error("Unexpected error:", error);
          } finally {
            setLoading(false);
          }
      }
      const handleLinkClick = () => {
        setIsLogin(()=>{ setIsLogin(!isLogin)})
      }
    return (
        <div className='auth-body'>
        <div className='top-right-circle'></div>
          {isLogin ? (<LoginCard  onLogin={handleLogin}
      onLinkClick={handleLinkClick}
      loading={loading}  />) 
            : (
               <SignupCard 
                onLinkClick={handleLinkClick}
                 onSignup={handleSignup}
                  loading={loading} 
                  message={message}
                 showMessage={showMessage}
                  />
            )  
        }
                    
                <div className="bottom-left-circle"></div>
          
        </div>
    );
};

export default Auth;