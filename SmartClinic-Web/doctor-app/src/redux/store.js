import { configureStore } from '@reduxjs/toolkit'
import { createLogger } from "redux-logger";
import doctorInfoReducer from './Slices/doctorInfoSlice'
import kpiDataReducer from './Slices/kpiSlice.js'
import grapsDataRedicer from './Slices/graphsDataSlice.js'
import appointmentRedicer from './Slices/appointmentSlice.js'
import patientDataReducer from './Slices/patientDataSlice.js'

const logger = createLogger();

export const store = configureStore({
  reducer: {
    doctorInfo:doctorInfoReducer,
    kpisData:kpiDataReducer,
    grapsData:grapsDataRedicer,
    appointments:appointmentRedicer,
    patientData: patientDataReducer,
  },
  middleware: (defaultMiddleware) => defaultMiddleware().concat(logger),
})