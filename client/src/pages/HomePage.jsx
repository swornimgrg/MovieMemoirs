import React, { useContext } from "react";
import MovieCard from "../components/MovieCard";
import { MoviesContext } from "../context/MoviesContext";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/esm/Container";
import "./HomePage.css";

function HomePage(props) {
  const { movies } = useContext(MoviesContext);

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
