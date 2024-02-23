import { configureStore, createSlice } from '@reduxjs/toolkit';

const navbarHandlerSlice = createSlice({
  name: 'navbarHandler',
  initialState: {
    value: false,
  },
  reducers: {
    makeTrue: state => {
      state.value += 1;
    },
    makeFalse: state => {
      state.value -= 1;
    },
  },
});

export const { makeFalse, makeTrue} = navbarHandlerSlice.actions;
export const navbarHandlerReducer = navbarHandlerSlice.reducer;

export default configureStore({
  reducer: {
    navbarHandler: navbarHandlerReducer,
  },
});
