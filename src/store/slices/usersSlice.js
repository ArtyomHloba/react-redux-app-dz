import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [
    {
      firstName: "Test",
      lastName: "Testovich",
      phoneNumber: "0777777777",
    },
    {
      firstName: "Ivo",
      lastName: "Testovich",
      phoneNumber: "0777777770",
    },
  ],
};

const usersSlice = createSlice({
  initialState,
  name: "users",
  reducers: {
    deleteUser: (state, { payload }) => {
      state.users = state.users.filter((u) => u.phoneNumber !== payload);
    },
  },
});

const { reducer, actions } = usersSlice;

export const { deleteUser } = actions;

export default reducer;
