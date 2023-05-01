import React from "react";
import Container from "react-bootstrap/esm/Container";
import { useParams } from "react-router-dom";

export default function WatchMoviePage() {
  let { id } = useParams();

  return (
    <Container>
      <iframe src={`https://www.youtube.com/embed/${id}`} allowFullScreen />
    </Container>
  );
}
