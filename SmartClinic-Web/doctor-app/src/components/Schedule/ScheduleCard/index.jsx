import React from 'react';
import CustomCard from '../../Basic/authCard';
import InputField from '../../Basic/inputField';
import CustomButton from '../../Basic/Button';
const SheduleCard = () => {
    return (
        <CustomCard title='Schedule'>
            <InputField inputLabel='Start Time' placeholder="Enter Start Time" type="text" variant="outlined" fullWidth={true}/>
            <InputField inputLabel='End Time' placeholder="Enter End Time" type="text" variant="outlined" fullWidth={true} />
            <InputField inputLabel='Slot Duration' placeholder="Enter Slot Duration in Min" type="text" variant="outlined" fullWidth={true} />
            <InputField inputLabel='Off Day' placeholder="Enter Off Day" type="text" variant="outlined" fullWidth={true} />
            < CustomButton label={'Save'} sx={{alignSelf:"center", fontSize:'18px'}}/>
        </CustomCard>
    );
};

export default SheduleCard;