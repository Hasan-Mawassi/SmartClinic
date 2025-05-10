import React from 'react';
import InputField from '../../components/Basic/inputField';
const Auth = () => {
    return (
        <div>
           <InputField label="Email" type="email" variant="outlined" fullWidth={true} />
        </div>
    );
};

export default Auth;