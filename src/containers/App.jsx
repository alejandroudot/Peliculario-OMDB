import * as React from "react";
import axios from "axios";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userLogged } from "../store/userLogged";

import FindUser from "./FindUser";
import Navbar from "../components/Navbar/Navbar";
import MoviesList from "../components/MoviesList";
import Movie from "../components/Movie";
import SingIn from "./SingIn";
import Profile from "./Profile";

import Login from "../components/Login";
import Register from "../components/Register";
import Main from "../components/Main";
import UserFavs from "../components/UserFavs";

export default function App() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    axios
      .get("/api/auth/me")
      .then((res) => res.data)
      .then((user) => {
        dispatch(userLogged(user));
        console.log("userLogged: ", user);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <React.Fragment>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact render={() => <Main />} />
          <Route path="/moviesList" exact render={() => <MoviesList />} />
          <Route path="/title/:id" exact render={() => <Movie />} />
          <Route path="/signin" exact render={() => <SingIn />} />
          <Route path="/login" exact render={() => <Login />} />
          <Route path="/userFavs" exact render={() => <UserFavs />} />
          <Route path="/profile" exact render={() => <Profile />} />
          <Route path="/register" exact render={() => <Register />} />
          <Route path="/findUser" exact render={() => <FindUser />} />
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}
