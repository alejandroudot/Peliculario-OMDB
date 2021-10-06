import { useState } from "react";

const useInputsMovies = () => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setValue(value);
  };
  return {
    handleChange,
    value,
    setValue,
  };
};
export default useInputsMovies;
