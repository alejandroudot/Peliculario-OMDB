import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const useRegister = () => {
  const [name, setName] = useState(``);
  const [email, setEmail] = useState(``);
  const [password, setPassword] = useState(``);
  const [confirmPassword, setConfirmPassword] = useState(``);
  const [error, setError] = useState(``);
  const [nameError, setNameError] = useState(``);
  const [emailError, setEmailError] = useState(``);
  const [disabled, setDisabled] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  const onSingUp = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    const data = {
      name: name,
      email: email,
      password: password,
    };
    await axios
      .post(`/api/auth/register`, data)
      .then((data) => {
        history.push("/login");
        setIsLoading(false);
      })
      .catch((err) => {
        setEmailError("That email is already registered.");
        setIsLoading(false);
      });
  };

  const nameValidation = (e) => {
    if (/\s/.test(e)) setNameError("It cannot have spaces.");
    else {
      setName(e);
      setNameError("");
    }
  };

  const checkValidation = (e) => {
    setConfirmPassword(e);
    if (confirmPassword.length >= 8) {
      if (password !== e) {
        setError(`Confirm Password should be match with Password`);
        setDisabled(true);
      } else {
        setError(``);
        setDisabled(false);
      }
    } else {
      setError(`Password should be more 8 characters`);
      setDisabled(true);
    }
  };

  return {
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    confirmPassword,
    onSingUp,
    checkValidation,
    error,
    disabled,
    nameValidation,
    nameError,
    emailError,
    isLoading,
  };
};

export default useRegister;
