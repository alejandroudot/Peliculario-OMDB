import React from "react";
import useInputUser from "../hooks/useInputUser";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Box, Heading, Text, Divider } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { movieRequest } from "../store/movie";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

//ACA SE DEPLOYAN LAS PELIS QUE PASAMOS POR LA BARRA DE BUSQUEDA

const UserFavs = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.findUserFav);
  const params = useInputUser();
  const { userFavs, findFavs } = params;

  console.log(userFavs);

  React.useEffect(() => {
    findFavs(user);
  }, []);

  return (
    <Box m="2%">
      <Button
        pb={0}
        position={{ md: "absolute" }}
        left={{ md: "10" }}
        onClick={() => history.push(`/profile`)}
      >
        Back
      </Button>
      <Heading mb="5" textAlign="center">
        {`${user.name} Watchlist`}
      </Heading>
      <Divider orientation="horizontal" />
      {userFavs &&
        userFavs.map((fav) => {
          return (
            <Box>
              <Divider orientation="horizontal" />
              <Box
                p={4}
                display={{ md: "flex" }}
                key={fav.id}
                onClick={() => dispatch(movieRequest(fav.movie))}
              >
                <Box flexShrink={0}>
                  <Link to={`/title/${fav.movie.imdbID}`}>
                    <Image
                      borderRadius="lg"
                      width={{ md: 40 }}
                      src={fav.movie.imdbID ? fav.movie.Poster : ""}
                      alt="Woman paying for a purchase"
                    />
                  </Link>
                </Box>
                <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
                  <Text
                    fontWeight="bold"
                    textTransform="uppercase"
                    fontSize="sm"
                    letterSpacing="wide"
                    color="teal.600"
                  >
                    {fav.movie.Genre}
                  </Text>
                  <Link to={`/title/${fav.movie.imdbID}`}>
                    <Text
                      mt={2}
                      mb={5}
                      display="block"
                      fontSize="lg"
                      lineHeight="normal"
                      fontWeight="semibold"
                    >
                      {fav.movie.Title}
                      {` (${fav.movie.Year})`}
                    </Text>
                  </Link>

                  <Text mt={2} color="gray.500">
                    {fav.movie.Plot}
                  </Text>
                </Box>
              </Box>
              <Divider orientation="horizontal" />
            </Box>
          );
        })}
    </Box>
  );
};
export default UserFavs;
