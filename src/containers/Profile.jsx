import * as React from "react";

import Favourites from "../components/Favourites";
import { Box, Flex } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/react";
import SearchUsers from "../components/SearchUsers";
import useInputUser from "../hooks/useInputUser";

//ESTA LA BARRA DE BUSQUEDA

const Profile = () => {
  const inputs = useInputUser();
  const { searchBar, setSearchBar } = inputs;
  return (
    <Box borderWidth="1px" borderRadius="lg">
      {searchBar ? (
        <Box
          mt={10}
          w={{ sm: "20%" }}
          mb={2}
          position={{ md: "fixed" }}
          left={{ md: "10" }}
        >
          <SearchUsers />
        </Box>
      ) : (
        <Button
          mt={10}
          mb={2}
          position={{ md: "fixed" }}
          left={{ md: "10" }}
          onClick={() => setSearchBar(true)}
        >
          Buscar otros usuarios
        </Button>
      )}

      <Flex>
        <Favourites />
      </Flex>
    </Box>
  );
};
export default Profile;
