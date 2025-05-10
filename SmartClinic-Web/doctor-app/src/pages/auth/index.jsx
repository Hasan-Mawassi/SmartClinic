import React from 'react';
import InputField from '../../components/Basic/inputField';
import EmailIcon from '@mui/icons-material/Email';
const Auth = () => {
    return (
        <div>
           <InputField inputLabel='Email' type="email" variant="outlined" fullWidth={true} icon={EmailIcon} />
        </div>
    );
};

export default Auth;