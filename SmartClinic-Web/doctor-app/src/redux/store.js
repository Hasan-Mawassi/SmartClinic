import { configureStore } from '@reduxjs/toolkit'
import { createLogger } from "redux-logger";
import doctorInfoReducer from './Slices/doctorInfoSlice'

const logger = createLogger();

export const store = configureStore({
  reducer: {
    doctorInfo:doctorInfoReducer,
  },
  middleware: (defaultMiddleware) => defaultMiddleware().concat(logger),
})