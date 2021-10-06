// STORE CREATION
import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { moviesReducer } from "./moviesList";
import { movieReducer } from "./movie";
import { userLoggedReducer } from "./userLogged";
import { findUserFavReducer } from "./findUser";
import { searchMovieReducer } from "./searchMovie";

const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  reducer: {
    movies: moviesReducer,
    movie: movieReducer,
    userLogged: userLoggedReducer,
    findUserFav: findUserFavReducer,
    searchMovie: searchMovieReducer,
  },
});

export default store;
