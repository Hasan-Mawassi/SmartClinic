import { configureStore } from '@reduxjs/toolkit'
import { createLogger } from "redux-logger";
import doctorInfoReducer from './Slices/doctorInfoSlice'
import kpiDataReducer from './Slices/kpiSlice.js'

const logger = createLogger();

export const store = configureStore({
  reducer: {
    doctorInfo:doctorInfoReducer,
    kpisData:kpiDataReducer
  },
  middleware: (defaultMiddleware) => defaultMiddleware().concat(logger),
})