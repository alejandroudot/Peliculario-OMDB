import React from "react";
import { useDispatch } from "react-redux";
import { sendMovieRequest } from "../store/moviesList";
import { searchMovie } from "../store/searchMovie";
import useInputsMovies from "../hooks/useInputsMovies";
import { InputGroup, InputLeftElement, Input } from "@chakra-ui/input";
import { SearchIcon } from "@chakra-ui/icons";
import { useHistory } from "react-router-dom";
//ESTA LA BARRA DE BUSQUEDA

const SearchInput = () => {
  const history = useHistory();
  const inputs = useInputsMovies();

  const { handleChange, value } = inputs;
  const dispatch = useDispatch();
  return (
    <InputGroup
      ml={10}
      onKeyPress={(e) => {
        if (e.charCode === 13) {
          history.push(`/moviesList`);
          console.log(`eeeeeeeeeeeeeeeee`, e.target.value);
          dispatch(searchMovie(e.target.value));
          return dispatch(sendMovieRequest(e));
        }
      }}
    >
      <InputLeftElement
        pointerEvents="none"
        children={<SearchIcon color="gray.300" />}
      />
      <Input
        type="text"
        placeholder="Search Movies"
        onChange={handleChange}
        value={value}
        width="50%"
      />
    </InputGroup>
  );
};
export default SearchInput;
