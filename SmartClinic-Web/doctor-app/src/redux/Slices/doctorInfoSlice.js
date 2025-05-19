import { createSlice } from '@reduxjs/toolkit'

const initialState = {
 name:"",
 email:"",
 id:null
}

export const doctorInfoSlice = createSlice({
  name: 'doctorInfo',
  initialState,
  reducers: {
    setDoctorInfo: (state, action) => {
        const { name, email, id } = action.payload;
        state.name = name;
        state.email = email;
        state.id = id;
      },
      clearDoctorInfo: (state) => {
        state.name = "";
        state.email = "";
        state.id = null;
      }
    
  },
})


export const { setDoctorInfo, clearDoctorInfo } = doctorInfoSlice.actions

export default doctorInfoSlice.reducer