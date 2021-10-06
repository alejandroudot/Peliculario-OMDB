import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { findUserFav } from "../store/findUser";

const useInputUser = () => {
  //Global
  const distpach = useDispatch();
  const history = useHistory();
  //Locales
  const [value, setValue] = useState("");
  const [userFavs, setUserFavs] = useState([]);
  const [searchBar, setSearchBar] = useState(false);

  const handleChange = (e) => {
    const value = e.target.value;
    setValue(value);
  };

  const findUserSearched = async (e) => {
    await distpach(findUserFav(e));
    setTimeout(() => {
      history.push("/userFavs");
    }, 2000);
  };

  const findFavs = async (data) => {
    const id = data.id;
    await axios
      .get(`api/users/${id}`)
      .then((data) => data.data)
      .then((data) => {
        setUserFavs(data);
        setSearchBar(false);
      })
      .catch((err) => console.log(err));
  };

  return {
    handleChange,
    value,
    findUserSearched,
    userFavs,
    findFavs,
    searchBar,
    setSearchBar,
  };
};
export default useInputUser;
