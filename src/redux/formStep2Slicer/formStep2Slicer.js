import { createSlice } from '@reduxjs/toolkit'

const initialState = {
 step2:{},
 step1:{},
 step3:{}
}

export const formStep2Slice = createSlice({
  name: 'formStep2',
  initialState,
  reducers: {
    add: (state, action) => {
      state.step2 = {...action.payload}
    },
    add1: (state, action) => {
        state.step1 = {...action.payload}
      },
    add3: (state, action) => {
        state.step3 = {...action.payload}
      },
  },
})

// Action creators are generated for each case reducer function
export const { add, add1, add3 } = formStep2Slice.actions

export default formStep2Slice.reducer