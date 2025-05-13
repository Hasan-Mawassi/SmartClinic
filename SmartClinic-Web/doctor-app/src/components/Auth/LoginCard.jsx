import React, { useState } from 'react';
import InputField from '../../components/Basic/inputField';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import CustomCard from '../../components/Basic/authCard';
import CustomButton from '../../components/Basic/Button';
import { Link , Typography} from '@mui/material';
const LoginCard = ({ onLogin, onLinkClick, loading ,message, showMessage}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleLoginClick = () => {
        onLogin({ email, password });
    };
    return (
        <CustomCard title='Login'>
              {showMessage && (
                    <Typography
                      variant="body2"
                      color="error"
                      sx={{  textAlign: "center" }}
                    >
                      {message}
                    </Typography>
                  )}
              <InputField inputLabel='Email' placeholder="Enter your email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} variant="outlined" fullWidth={true} icon={EmailIcon} />
              <InputField inputLabel='Password' placeholder="Enter your password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} variant="outlined" fullWidth={true} icon={LockIcon} />
             
              <CustomButton
                className='register-button'
                label="Login"
                onClick={handleLoginClick}
                loading={loading}
                />
               <div className='link'>
               Create an account?{' '}
                <Link
                component="button"
                variant="body2"
                onClick={onLinkClick}
                sx={{ textDecoration: 'underline', cursor: 'pointer' }}
                >
                Sign up
                </Link>
               </div>
           </CustomCard>
    );
};

export default LoginCard;