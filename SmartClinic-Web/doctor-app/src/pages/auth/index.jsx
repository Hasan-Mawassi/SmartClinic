import React from 'react';
import './style.css';
import InputField from '../../components/Basic/inputField';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import PersonIcon from '@mui/icons-material/Person';
import CustomCard from '../../components/Basic/authCard';
import CustomButton from '../../components/Basic/Button';
const Auth = () => {
    return (
        <div className='auth-body'>
        <div className='top-right-circle'></div>
          <CustomCard title='Login'>
              <InputField inputLabel='Email' type="email" variant="outlined" fullWidth={true} icon={EmailIcon} />
              <InputField inputLabel='Password' type="password" variant="outlined" fullWidth={true} icon={LockIcon} />
             
              <CustomButton
                className='register-button'
                label="Login"
                onClick={() => { 
                }}
                loading={false}
                />
           </CustomCard>
                    
                <div className="bottom-left-circle"></div>
          
        </div>
    );
};

export default Auth;