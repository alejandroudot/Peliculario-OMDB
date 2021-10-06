import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import BounceLoader from "react-spinners/BounceLoader";
import { movieRequest } from "../store/movie";
import {
  Box,
  Flex,
  Center,
  Stack,
  Heading,
  Text,
  Image,
  SimpleGrid,
} from "@chakra-ui/react";
//ACA SE DEPLOYAN LAS PELIS QUE PASAMOS POR LA BARRA DE BUSQUEDA

const MovieList = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const movies = useSelector((state) => state.movies);
  const value = useSelector((state) => state.searchMovie);

  console.log(`,dasdsadsadsad`, value);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  return (
    <Box pt={20} p={12} rounded={6}>
      <Heading pl={20}>Results of {value}</Heading>
      {loading ? (
        <Flex mt="10%" alignSelf="center" justifyContent="center">
          <BounceLoader size={100} color={"#ECC94B"} loading={loading} />
        </Flex>
      ) : (
        <Box>
          <SimpleGrid minChildWidth="305px" spacing={0} ml={10} mr={10}>
            {movies &&
              movies.map((movie) => {
                return (
                  <Link to={`/title/${movie.imdbID}`} key={movie.imdbID}>
                    <Flex p={2} onClick={() => dispatch(movieRequest(movie))}>
                      <Center py={6}>
                        <Box
                          maxW={"300px"}
                          w={"full"}
                          bg={("white", "gray.900")}
                          rounded={6}
                          p={6}
                          overflow={"hidden"}
                        >
                          <Image src={`${movie.Poster}`} layout={"fill"} />{" "}
                          <Stack pt={5}>
                            <Heading
                              color={("gray.700", "white")}
                              fontSize={"md"}
                              fontFamily={"body"}
                              alignItems="center"
                              justifyContent="center"
                            >
                              {`${movie.Title}`}
                            </Heading>
                            <Text color={"gray.500"}>{`${movie.Year}`}</Text>
                          </Stack>
                        </Box>
                      </Center>
                    </Flex>
                  </Link>
                );
              })}
          </SimpleGrid>
        </Box>
      )}
    </Box>
  );
};
export default MovieList;
