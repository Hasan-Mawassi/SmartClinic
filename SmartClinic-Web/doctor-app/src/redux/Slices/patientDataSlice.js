import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    patientId:2,
    patientInfo:{},
    pastMedicines:[
        {
            "date": "2025-05-14T00:00:00.000Z",
            "prescriptions": [
                {
                }
            ]
        }
    ]
        
       
            
        
    
}

export const patientDataSlice = createSlice({
  name: 'patientData',
  initialState,
  reducers: {
   setPatientId: (state, action) => {
      state.patientId = action.payload
    },
     setPatientInfo: (state, action) => {
      state.patientInfo = action.payload;
    },
    setPatientPastMedicines: (state, action) => {
      state.pastMedicines = action.payload;
    },
  },
})


export const {setPatientId ,setPatientInfo ,setPatientPastMedicines } = patientDataSlice.actions

export default patientDataSlice.reducer