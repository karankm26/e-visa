import { configureStore } from '@reduxjs/toolkit'
import formStep2Slicer from './formStep2Slicer/formStep2Slicer'

export const store = configureStore({
  reducer: {
    formStep2: formStep2Slicer
  },
})