import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    patientId:null,
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
aiReport:'',
newMedicine:[]
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
      state.aiReport = action.payload;
    },
    setNewMedicine: (state, action) => {
       state.newMedicine.push(action.payload);;
    },
    resetPatientData: () => initialState,
  },
})


export const {setPatientId ,setPatientInfo ,setPatientPastMedicines,setVotalData ,setAiReport,setNewMedicine, resetPatientData} = patientDataSlice.actions

export default patientDataSlice.reducer