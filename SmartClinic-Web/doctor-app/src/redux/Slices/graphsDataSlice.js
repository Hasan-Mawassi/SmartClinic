import { createSlice } from '@reduxjs/toolkit'

const initialState = {
 patientsData:[ { month: 'Jan', patients: 24 },
  { month: 'Feb', patients: 18 },
  { month: 'Mar', patients: 32 },
  { month: 'Apr', patients: 22 },],
 genderData:[ { label: 'Male', value: 60 },
  { label: 'Female', value: 40 },],
 ageData:[ { ageRange:10 , count: 12 },
  { ageRange:20 , count: 22 },
  { ageRange:30 , count: 18 },
  { ageRange: 50, count: 8 },]
}

export const graphDataSlice = createSlice({
  name: 'grapsData',
  initialState,
  reducers: {
   setGraphData: (state, action) => {
      const { patientsData, genderData, ageData } = action.payload;
      state.patientsData = patientsData || [];
      state.genderData = genderData || [];
      state.ageData = ageData || [];
    },
  },
})


export const {setGraphData } = graphDataSlice.actions

export default graphDataSlice.reducer