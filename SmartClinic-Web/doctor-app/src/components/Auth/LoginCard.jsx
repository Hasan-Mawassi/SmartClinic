import React from 'react';
import InputField from '../../components/Basic/inputField';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import PersonIcon from '@mui/icons-material/Person';
import CustomCard from '../../components/Basic/authCard';
import CustomButton from '../../components/Basic/Button';
import { Link } from '@mui/material';
const LoginCard = ({linkClick , loginClick}) => {
    return (
        <CustomCard title='Login'>
              <InputField inputLabel='Email' placeholder="Enter your email" type="email" variant="outlined" fullWidth={true} icon={EmailIcon} />
              <InputField inputLabel='Password' placeholder="Enter your password" type="password" variant="outlined" fullWidth={true} icon={LockIcon} />
             
              <CustomButton
                className='register-button'
                label="Login"
                onClick={loginClick}
                loading={false}
                />
               <div className='link'>
               Create an account?{' '}
                <Link
                component="button"
                variant="body2"
                onClick={linkClick}
                sx={{ textDecoration: 'underline', cursor: 'pointer' }}
                >
                Sign up
                </Link>
               </div>
           </CustomCard>
    );
};

export default LoginCard;