import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = [];

export const movieRequest = createAsyncThunk("SET_MOVIE", (movie) => {
  return axios
    .get(
      `https://www.omdbapi.com/?apikey=b2b4b54d&t=${movie.Title}&plot=full&y=${movie.Year}`
    )
    .then((r) => r.data);
});

export const movieReducer = createReducer(initialState, (builder) => {
  builder.addCase(movieRequest.fulfilled, (state, action) => {
    return (state = action.payload);
  });
});
