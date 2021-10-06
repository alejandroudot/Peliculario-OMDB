import React from "react";
import useFavourites from "../hooks/useFavourites";
import { useSelector } from "react-redux";
import { Box, Heading, Text } from "@chakra-ui/layout";
import { Image, Button, Divider } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { movieRequest } from "../store/movie";

//ACA SE DEPLOYAN LAS PELIS QUE PASAMOS POR LA BARRA DE BUSQUEDA

const Favourites = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userLogged);
  const params = useFavourites();
  const { removeFav, favList, loadFavs, favRemoved } = params;

  React.useEffect(() => {
    if (user.id) loadFavs({ userId: user.id });
  }, []);

  React.useEffect(() => {
    loadFavs({ userId: user.id });
  }, [favRemoved]);

  return (
    <Box m="2%">
      <Heading mb="5" textAlign="center">
        Your Favorites
      </Heading>
      <Divider orientation="horizontal" />
      {favList &&
        favList.map((fav) => {
          return (
            <Box key={fav.id}>
              <Divider orientation="horizontal" />
              <Box
                p={4}
                display={{ md: "flex" }}
                key={fav.id}
                onClick={() => dispatch(movieRequest(fav.movie))}
              >
                <Box flexShrink={0}>
                  <Link to={`/title/${fav.movie.imdbID}`}>
                    {" "}
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
                <Button
                  mt={1}
                  position={{ md: "absolute" }}
                  right="10"
                  onClick={() => removeFav(fav.id)}
                >
                  Remove
                </Button>
              </Box>
              <Divider orientation="horizontal" />
            </Box>
          );
        })}
    </Box>
  );
};
export default Favourites;
