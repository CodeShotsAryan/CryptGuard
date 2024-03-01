import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
};

const navbarHandlerSlice = createSlice({
  name: 'navbarHandler',
  initialState, 
  reducers: {
    makeTrue: state => {
      state.isLoggedIn = true;
    },
    makeFalse: state => {
      state.isLoggedIn = false;
    },
  },
});

export const { makeFalse, makeTrue } = navbarHandlerSlice.actions;
export const navbarHandlerReducer = navbarHandlerSlice.reducer;

export default configureStore({
  reducer: {
    navbarHandler: navbarHandlerReducer,
  },
});
