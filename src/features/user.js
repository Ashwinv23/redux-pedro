import { createSlice } from "@reduxjs/toolkit";

const userInitial = { name: "", age: 0, email: "" };

export const userSlice = createSlice({
  name: "user",
  initialState: { value: userInitial },
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
    },
    logout: (state) => {
      state.value = userInitial;
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice.reducer;
