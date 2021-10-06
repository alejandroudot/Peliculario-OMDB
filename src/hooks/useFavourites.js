import { useState } from "react";
import axios from "axios";
import { useToast } from "@chakra-ui/toast";

const useFavourites = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [favAdded] = useState("");
  const [favRemoved, setFavRemoved] = useState("");
  const [favList, setFavList] = useState([]);
  const toast = useToast();

  const handleSubmitFav = async (movie, userId) => {
    setIsLoading(true);
    await axios
      .post("/api/favourites/fav", {
        movie: movie,
        userId: userId,
      })
      .then((data) => {
        setIsLoading(false);
        toast({
          title: "Added to Fav!",
          status: "success",
          duration: 9000,
          position: "bottom",
          isClosable: true,
        });
      })
      .catch((err) => {
        setIsLoading(false);
        console.error(err);
      });
  };

  const loadFavs = async (userId) => {
    await axios
      .post("/api/favourites/favList", userId)
      .then((data) => data.data)
      .then((data) => setFavList(data))
      .catch((err) => console.error(err));
  };

  const removeFav = async (data) => {
    await axios
      .delete(`/api/favourites/${data}`)
      .then((id) => {
        setFavRemoved(`Removed to Fav id: ${data}!`);
      })
      .catch((err) => console.error(err));
  };

  return {
    handleSubmitFav,
    favAdded,
    removeFav,
    favList,
    setFavList,
    loadFavs,
    favRemoved,
    isLoading,
  };
};

export default useFavourites;
