import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = [];

export const sendMovieRequest = createAsyncThunk("SET_MOVIES", (input) => {
  const value = input.target.value;
  input.preventDefault();
  return axios
    .get(`https://www.omdbapi.com/?apikey=b2b4b54d&s=${value}`)
    .then((r) => r.data)
    .then((data) => {
      return data.Search;
    });
});

export const moviesReducer = createReducer(initialState, (builder) => {
  builder.addCase(sendMovieRequest.fulfilled, (state, action) => {
    return (state = action.payload);
  });
});
