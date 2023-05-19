import React, { useState, createContext, useEffect } from "react";
import MovieFinder from "../apis/MovieFinder";

export const MoviesContext = createContext();

export const MoviesContextProvider = (props) => {
  const [movies, setMovies] = useState([]);

  const storeData = (value) => {
    const serializedData = JSON.stringify(value);
    sessionStorage.setItem("data", serializedData);
    setMovies(value);
  };

  const getData = () => {
    const storedData = JSON.parse(sessionStorage.getItem("data"));
    if (storedData) {
      setMovies(storedData);
      console.log(storedData);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await MovieFinder.get("/");
        const dataToStore = response.data.movies;
        storeData(dataToStore);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
    getData();
  }, [setMovies]);

  return (
    <MoviesContext.Provider value={{ movies }}>
      {props.children}
    </MoviesContext.Provider>
  );
};
