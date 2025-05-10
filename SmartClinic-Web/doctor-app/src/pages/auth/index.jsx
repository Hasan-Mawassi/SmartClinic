import React, { useState } from 'react';
import './style.css';
import LoginCard from '../../components/Auth/LoginCard';
const Auth = () => {
    const [isLogin, setIsLogin] = useState(true);
    return (
        <div className='auth-body'>
        <div className='top-right-circle'></div>
          {isLogin &&(<LoginCard linkClick={() => setIsLogin(false)} loginClick={() => console.log('login clicked')}/>)}
                    
                <div className="bottom-left-circle"></div>
          
        </div>
    );
};

export default Auth;