import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { movieRequest } from "../store/movie";
import BounceLoader from "react-spinners/BounceLoader";
import useRecomendeds from "../hooks/useRecomendeds";
import { Link } from "react-router-dom";
import {
  Box,
  Flex,
  Center,
  Heading,
  Text,
  Stack,
  Image,
  SimpleGrid,
} from "@chakra-ui/react";

const Main = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { recList, loadRecs } = useRecomendeds();

  useEffect(() => {}, []);

  const textTruncate = (value) => {
    return value.substring(0, 120);
  };

  useEffect(() => {
    loadRecs();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <React.Fragment>
      {loading ? (
        <Flex mt="20%" alignSelf="center" justifyContent="center">
          <BounceLoader size={100} color={"#ECC94B"} loading={loading} />
        </Flex>
      ) : (
        <Box>
          <Box>
            <Flex pt={12} justifyContent="center">
              <Heading as="h2" size="3xl">
                Peliculario
              </Heading>
            </Flex>
            <Flex justifyContent="center" pb={10}>
              <Heading as="h6" size="xs">
                Your movie dictionary
              </Heading>
            </Flex>

            <Flex ml={10} mr={10}>
              <Heading as="h3" size="lg">
                Our recommendations of the week:
              </Heading>
            </Flex>
          </Box>
          <Box>
            <SimpleGrid minChildWidth="305px" spacing={0} ml={10} mr={10}>
              {recList &&
                recList.map((movie) => {
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
                              <Text color={"gray.500"}>{`${textTruncate(
                                movie.Plot
                              )}`}</Text>
                            </Stack>
                          </Box>
                        </Center>
                      </Flex>
                    </Link>
                  );
                })}
            </SimpleGrid>
          </Box>
        </Box>
      )}
    </React.Fragment>
  );
};

export default Main;
