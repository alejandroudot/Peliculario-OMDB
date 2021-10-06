import { createReducer, createAction } from "@reduxjs/toolkit";

const initialState = "";

export const searchMovie = createAction("SET_SEARCHMOVIE");

export const searchMovieReducer = createReducer(initialState, (builder) => {
  builder.addCase(searchMovie, (state, action) => {
    return (state = action.payload);
  });
});
