import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import BounceLoader from "react-spinners/BounceLoader";
import useFavourites from "../hooks/useFavourites";
import { useHistory } from "react-router";
import { Box } from "@chakra-ui/layout";
import {
  Image,
  Text,
  Link,
  Badge,
  List,
  ListItem,
  ListIcon,
  Flex,
  Button,
} from "@chakra-ui/react";
import { ChevronRightIcon, AddIcon } from "@chakra-ui/icons";

const Movie = () => {
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const { handleSubmitFav, favAdded, isLoading } = useFavourites();
  const movie = useSelector((state) => state.movie);
  let genre = "";
  movie.Genre ? (genre = movie.Genre.split(",")) : (genre = "");
  const user = useSelector((state) => state.userLogged);
  console.log(movie);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <React.Fragment>
      {loading ? (
        <Flex mt="10%" alignSelf="center" justifyContent="center">
          <BounceLoader size={100} color={"#ECC94B"} loading={loading} />
        </Flex>
      ) : (
        <Box display={{ md: "flex" }} pt="20" pl={10} pr={10}>
          <Box flexShrink={0}>
            <Image
              borderRadius="lg"
              width={{ md: 300 }}
              src={movie.Poster}
              alt={`${movie.Title}`}
            />
          </Box>
          <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
            {genre
              ? genre.map((e, i) => (
                  <Badge
                    mr={2}
                    mb={2}
                    pl={2}
                    pr={2}
                    key={i}
                    colorScheme="purple"
                  >
                    {e}
                  </Badge>
                ))
              : ""}
            <Link
              mt={1}
              display="block"
              fontSize="3xl"
              lineHeight="normal"
              fontWeight="semibold"
              href="#"
            >
              {movie.Title}
            </Link>

            <Text mt={2} display="block" textAlign="justify">
              {movie.Plot}
            </Text>
            <Flex mt="5%">
              <List spacing={3}>
                <ListItem color="gray.500">
                  <ListIcon as={ChevronRightIcon} color="green.500" />
                  Director : {movie.Director}
                </ListItem>
                <ListItem color="gray.500">
                  <ListIcon as={ChevronRightIcon} color="green.500" />
                  Writers : {movie.Writer}
                </ListItem>
                <ListItem color="gray.500">
                  <ListIcon as={ChevronRightIcon} color="green.500" />
                  Stars : {movie.Actors}
                </ListItem>
              </List>
            </Flex>

            <Box mt="10" alignSelf="auto">
              <Button
                h="8"
                isLoading={isLoading}
                leftIcon={<AddIcon />}
                colorScheme="yellow"
                variant="outline"
                onClick={() => {
                  if (user.id) handleSubmitFav(movie, user.id);
                  else history.push(`/login`);
                }}
              >
                Add to Favs
              </Button>
              <Box>{favAdded} </Box>
            </Box>
          </Box>
        </Box>
      )}
    </React.Fragment>
  );
};

export default Movie;
