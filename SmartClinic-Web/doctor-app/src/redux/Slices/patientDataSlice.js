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
    ],
    vitalData:{
         "healthPercentage": 0,
    "heartRate": 0,
    "bloodPressure": "",
    "temperature": 0,
    "bloodGlucose": 0,
},
aiReport:''
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
    setVotalData: (state, action) => {
      state.vitalData = action.payload;
    },
    setAiReport: (state, action) => {
      state.vitalData = action.payload;
    },
  },
})


export const {setPatientId ,setPatientInfo ,setPatientPastMedicines,setVotalData ,setAiReport} = patientDataSlice.actions

export default patientDataSlice.reducer