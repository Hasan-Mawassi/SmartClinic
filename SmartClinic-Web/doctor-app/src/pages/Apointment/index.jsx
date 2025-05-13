import React from 'react';
import AppointmentsTable from '../../components/Appointment/Table';
import { useSelector } from 'react-redux'
const Appointment = () => {
      const appointments = useSelector(state => state.appointments.rows);
    return (
        <div>
                < AppointmentsTable rows={appointments}/>
        </div>
    );
};

export default Appointment;