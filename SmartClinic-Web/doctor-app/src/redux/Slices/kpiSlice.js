import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    completedToday: 0,
    totalPatients: 0,
    upcomingAppointments:0,
    pendingReports: 0,
}

export const kpisDataSlice = createSlice({
  name: 'kpisData',
  initialState,
  reducers: {
    setKpisData: (state, action) => {
        return {
          ...state,
          ...action.payload, 
        };
      },
    
  },
})


export const {setKpisData } = kpisDataSlice.actions

export default kpisDataSlice.reducer