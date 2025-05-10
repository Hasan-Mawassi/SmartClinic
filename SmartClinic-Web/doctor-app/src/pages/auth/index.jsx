import React, { useState } from 'react';
import './style.css';
import LoginCard from '../../components/Auth/LoginCard';
import SignupCard from '../../components/Auth/SignupCard';
const Auth = () => {
    const [isLogin, setIsLogin] = useState(true);
    return (
        <div className='auth-body'>
        <div className='top-right-circle'></div>
          {isLogin ? (<LoginCard linkClick={() => setIsLogin(false)} loginClick={() => console.log('login clicked')}/>) 
            : (
               <SignupCard linkClick={() => setIsLogin(true)} SignupClick={() => console.log('signup clicked')}/>
            )  
        }
                    
                <div className="bottom-left-circle"></div>
          
        </div>
    );
};

export default Auth;