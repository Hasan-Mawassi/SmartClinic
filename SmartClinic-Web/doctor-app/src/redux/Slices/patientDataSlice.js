import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    patientId:null,
}

export const patientDataSlice = createSlice({
  name: 'patientData',
  initialState,
  reducers: {
   
    
  },
})


export const { } = patientDataSlice.actions

export default patientDataSlice.reducer