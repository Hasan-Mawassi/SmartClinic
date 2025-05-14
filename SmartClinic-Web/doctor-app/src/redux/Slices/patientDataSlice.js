import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    patientId:null,
}

export const patientDataSlice = createSlice({
  name: 'patientData',
  initialState,
  reducers: {
   setPatientId: (state, action) => {
      state.patientId = action.payload
    },
    
  },
})


export const {setPatientId  } = patientDataSlice.actions

export default patientDataSlice.reducer