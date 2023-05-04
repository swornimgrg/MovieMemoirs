import React from "react";
import Container from "react-bootstrap/esm/Container";
import { useParams } from "react-router-dom";
import "./WatchMoviePage.css";

export default function WatchMoviePage() {
  let { video_id } = useParams();

  return (
    <Container bsPrefix="container">
      <iframe
        className="responsive-iframe"
        src={`https://www.youtube.com/embed/${video_id}`}
        width="100%"
        height="100%"
        allowFullScreen
      />
    </Container>
  );
}
