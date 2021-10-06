import { useState } from "react";
import axios from "axios";

const useRecomendeds = () => {
  const [recList, setRecList] = useState([]);
  const movieList = [];
  const weeklyList = [
    "https://www.omdbapi.com/?apikey=b2b4b54d&i=tt2953050",
    "https://www.omdbapi.com/?apikey=b2b4b54d&i=tt9032400",
    "https://www.omdbapi.com/?apikey=b2b4b54d&i=tt0870154",
    "https://www.omdbapi.com/?apikey=b2b4b54d&i=tt5109280",
    "https://www.omdbapi.com/?apikey=b2b4b54d&i=tt3480822",
  ];

  const loadRecs = () => {
    weeklyList.map((movie) => {
      return axios
        .get(`${movie}`)
        .then((data) => data.data)
        .then((data) => movieList.push(data))
        .catch((err) => console.error(err));
    });
    setTimeout(() => {
      setRecList(movieList);
    }, 1000);
  };

  return {
    recList,
    loadRecs,
  };
};

export default useRecomendeds;
