import { createSlice } from '@reduxjs/toolkit'

const initialState = {
 rows:[]
}

export const appointmentSlice = createSlice({
  name: 'appointments',
  initialState,
  reducers: {
     setAppointments: (state, action) => {
      state.rows = action.payload;
    }
  },
})


export const { setAppointments } = appointmentSlice.actions

export default appointmentSlice.reducer