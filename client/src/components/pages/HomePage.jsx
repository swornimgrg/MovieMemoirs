import React, { useContext, useEffect } from "react";
import MovieFinder from "../../apis/MovieFinder";
import { MoviesContext } from "../../context/MoviesContext";

function HomePage(props) {
  const { movies, setMovies } = useContext(MoviesContext);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await MovieFinder.get("/");
        console.log(response);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);
  return <div></div>;
}

export default HomePage;
