import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = [];

export const findUserFav = createAsyncThunk("SET_USERFAV", (name) => {
  const value = name.target.value;
  name.preventDefault();
  return axios
    .post(`api/users/searchUser`, { name: value })
    .then((data) => data.data);
});

export const findUserFavReducer = createReducer(initialState, (builder) => {
  builder.addCase(findUserFav.fulfilled, (state, action) => {
    return (state = action.payload);
  });
});
