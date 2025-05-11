import React from 'react';
import PatientCard from '../../components/Patient/PatientCard'
const Patient = () => {
    const patient = {
        name: 'John Doe',
        age: 45,
        weight: 72,
        gender: 'Male',
        bloodGroup: 'O+',
        image: '/logo.png',
        surgeryName: 'Appendectomy surgery',
        surgeryDate: '2024-08-15'
      };
      
    return (
        <div>
            <h1>patient</h1>
            <PatientCard patient={patient} />
        </div>
    );
};

export default Patient;