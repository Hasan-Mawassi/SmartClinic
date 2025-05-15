import { createSlice } from '@reduxjs/toolkit'

const initialState = {
 rows:[],
 upcommingPatients:[]
}

export const appointmentSlice = createSlice({
  name: 'appointments',
  initialState,
  reducers: {
     setAppointments: (state, action) => {
      state.rows = action.payload;
    },
    setUpcommingPatients: (state, action) => {
      state.upcommingPatients = action.payload;
    }
  },
})


export const { setAppointments, setUpcommingPatients } = appointmentSlice.actions

export default appointmentSlice.reducer