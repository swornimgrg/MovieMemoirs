import React from "react";
import Container from "react-bootstrap/esm/Container";
import { useParams } from "react-router-dom";
import "./WatchMoviePage.css";

export default function WatchMoviePage(props) {
  let { video_id } = useParams();
  const movies = JSON.parse(sessionStorage.getItem("data"));
  const index = movies.findIndex((movie) => video_id === movie.video_id);

  return (
    <Container>
      <h3>{movies[index].name}</h3>
      <div className="movie-container">
        <iframe
          className="responsive-iframe"
          title={movies[index].name}
          src={`https://www.youtube.com/embed/${video_id}?modestbranding=1&autohide=1&&showinfo=0`}
          width="100%"
          height="100%"
          allowFullScreen
        />
      </div>
    </Container>
  );
}
