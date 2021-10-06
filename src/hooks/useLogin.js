import { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { success } from "../utils/logs";
import { userLogged } from "../store/userLogged";
import { useHistory } from "react-router-dom";

const useLogin = () => {
  const [loginEmail, setLoginEmail] = useState(``);
  const [loginPassword, setLoginPassword] = useState(``);
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    // POST user credentials
    await axios
      .post("/api/auth/login", {
        email: loginEmail,
        password: loginPassword,
      })
      .then((data) => {
        dispatch(userLogged(data.data));
        success(`logged user ${data.data.email}`);
        setIsLoading(false);
        history.push("/");
      })
      .catch((err) => {
        setIsLoading(false);
        console.error(err);
      });
  };

  const handleLogout = async () => {
    await axios
      .post("/api/auth/logout")
      .then((data) => {
        console.log(`done`);
        dispatch(userLogged({}));
        history.push(`/`);
      })
      .catch((err) => console.error(err));
  };

  return {
    handleSubmit,
    loginEmail,
    loginPassword,
    setLoginEmail,
    setLoginPassword,
    handleLogout,
    isLoading,
  };
};

export default useLogin;
