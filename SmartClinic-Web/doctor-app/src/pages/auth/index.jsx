import React from 'react';
import './style.css';
import InputField from '../../components/Basic/inputField';
import EmailIcon from '@mui/icons-material/Email';
import CustomCard from '../../components/Basic/authCard';
import CustomButton from '../../components/Basic/Button';
const Auth = () => {
    return (
        <div className='auth-body'>
            
        <CustomCard title='Login'>
              <InputField inputLabel='Email' type="email" variant="outlined" fullWidth={true} icon={EmailIcon} />
              <InputField inputLabel='Email' type="email" variant="outlined" fullWidth={true} icon={EmailIcon} />
              <InputField inputLabel='Email' type="email" variant="outlined" fullWidth={true} icon={EmailIcon} />
              <CustomButton
                className='register-button'
                label="Register"
                onClick={() => { 
                }}
                loading={false}
                />
        </CustomCard>
                    

          
        </div>
    );
};

export default Auth;