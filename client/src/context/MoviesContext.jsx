import React, { useState, createContext, useEffect } from "react";
import MovieFinder from "../apis/MovieFinder";

export const MoviesContext = createContext();

export const MoviesContextProvider = (props) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await MovieFinder.get("/");
        setMovies(response.data.movies);
        console.log(movies);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  return (
    <MoviesContext.Provider value={{ movies }}>
      {props.children}
    </MoviesContext.Provider>
  );
};
