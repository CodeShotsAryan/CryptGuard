import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: true,
  userData: null,
};

const userStore = createSlice({
  name: "User",
  initialState,
  reducers: {
    login: (state, action) => {
      state.status = true;
      state.userData = action.payload.userData;
    },
    logout: (state) => {
      state.status = false;
      state.userData = null;
    },
  },
});

export const {login, logout} = userStore.actions;

export default userStore.reducer;
