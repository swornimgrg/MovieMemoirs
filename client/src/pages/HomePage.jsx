import React, { useContext, useEffect } from "react";
import MovieFinder from "../apis/MovieFinder";
import MovieCard from "../components/MovieCard";
import { MoviesContext } from "../context/MoviesContext";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/esm/Container";
import "./HomePage.css";

function HomePage(props) {
  const { movies, setMovies } = useContext(MoviesContext);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await MovieFinder.get("/");
        setMovies(response.data.movies);
        console.log(response);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [setMovies]);
  return (
    <Container bsPrefix="container">
      <Row xs={1} md={4} className="g-4">
        {movies.map((movie) => (
          <Col key={movie.id}>
            <MovieCard
              title={movie.name}
              date={movie.release_date}
              video_id={movie.video_id}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default HomePage;
