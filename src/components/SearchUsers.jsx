import React from "react";
import useInputUser from "../hooks/useInputUser";
import { InputGroup, InputLeftElement, Input } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

//ESTA LA BARRA DE BUSQUEDA

const SearchUsers = () => {
  const inputs = useInputUser();
  const { handleChange, value, findUserSearched } = inputs;

  return (
    <InputGroup
      onKeyPress={(e) => {
        if (e.charCode === 13) {
          findUserSearched(e);
        }
      }}
    >
      <InputLeftElement
        pointerEvents="none"
        children={<SearchIcon mt={4} color="gray.300" />}
      />
      <Input
        type="text"
        className="search-form"
        placeholder="Search other for User (Case Sensitive)"
        onChange={handleChange}
        value={value}
        width="100%"
      />
    </InputGroup>
  );
};
export default SearchUsers;
