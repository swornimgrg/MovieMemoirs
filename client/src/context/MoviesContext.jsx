import React, { useState, createContext, useEffect } from "react";
import MovieFinder from "../apis/MovieFinder";

export const MoviesContext = createContext();

export const MoviesContextProvider = (props) => {
  const [movies, setMovies] = useState(sessionStorage.getItem("data") || null);

  const storeData = (value) => {
    const serializedData = JSON.stringify(value);
    sessionStorage.setItem("data", serializedData);
    setMovies(value);
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
  }, [setMovies]);

  return (
    <MoviesContext.Provider value={{ movies }}>
      {props.children}
    </MoviesContext.Provider>
  );
};
