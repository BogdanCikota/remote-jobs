import { createSlice } from "@reduxjs/toolkit";

type User = {
  uid: string;
  name: string | null;
  likedJobs: number[];
}

type UserState = {
  user: User | null;
}

const initialState: UserState = {
  user: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { login, logout } = userSlice.actions;

export const selectUser = (state: UserState) => state.user;

export default userSlice.reducer;
