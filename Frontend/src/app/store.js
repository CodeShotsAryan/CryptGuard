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

// Define file slice
const fileSlice = createSlice({
  name: 'files',
  initialState: [],
  reducers: {
    addFile: (state, action) => {
      state.push(action.payload);
    },
    resetFiles: (state) => {
      state.pop()
    },
    // cancelFile: (state, action) => {
    //   // Remove the specified file from the state
    //   return state.filter(file => file !== action.payload);
    // },
  },
});

// Extract action creators and reducer from file slice for isLogin / navBarHandler
export const { makeFalse, makeTrue } = navbarHandlerSlice.actions;
export const navbarHandlerReducer = navbarHandlerSlice.reducer;

// Extract action creators and reducer from file slice for file
export const { addFile, resetFiles, cancelFile } = fileSlice.actions;
const fileReducer = fileSlice.reducer;

export default configureStore({
  reducer: {
    navbarHandler: navbarHandlerReducer,
    files: fileReducer,
  },
});
