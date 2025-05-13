import React, { useState } from 'react';
import './style.css';
import LoginCard from '../../components/Auth/LoginCard';
import SignupCard from '../../components/Auth/SignupCard';
import { useAuthHandler } from '../../hooks/authPage/useAuthHandler';

const Auth = () => {
    const [isLogin, setIsLogin] = useState(true);
    const { handleLogin, handleSignup, loading, message, showMessage } = useAuthHandler();

  const handleLinkClick = () => setIsLogin((prev) => !prev);
    return (
        <div className='auth-body'>
        <div className='top-right-circle'></div>
          {isLogin ? (
            <LoginCard 
             onLogin={handleLogin}
            onLinkClick={handleLinkClick}
            loading={loading} 
            message={message}
            showMessage={showMessage}
            />
           ) 
            : 
            (
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