import React from 'react';
import InputField from '../../components/Basic/inputField';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import PersonIcon from '@mui/icons-material/Person';
import CustomCard from '../../components/Basic/authCard';
import CustomButton from '../../components/Basic/Button';
import { Link } from '@mui/material';
const SignupCard = ({linkClick , SignupClick}) => {
    return (
        <CustomCard title='Register'>
        <InputField inputLabel='Username' placeholder="Enter your username" type="text" variant="outlined" fullWidth={true} icon={PersonIcon} />
        <InputField inputLabel='Email' placeholder="Enter your email" type="email" variant="outlined" fullWidth={true} icon={EmailIcon} />
        <InputField inputLabel='Password' placeholder="Enter your password" type="password" variant="outlined" fullWidth={true} icon={LockIcon} />
       
        <CustomButton
          className='register-button'
          label="Register"
          onClick={SignupClick}
          loading={false}
          />
         <div className='link'>
         Already have an account?{' '}
          <Link
          component="button"
          variant="body2"
          onClick={linkClick}
          sx={{ textDecoration: 'underline', cursor: 'pointer' }}
          >
          Login
          </Link>
         </div>
     </CustomCard>
    );
};

export default SignupCard;