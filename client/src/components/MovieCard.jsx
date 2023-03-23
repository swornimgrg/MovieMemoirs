import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function MovieCard({ title, date, link }) {
  return (
    <Card style={{ width: "18rem" }}>
      <iframe src={link} title={title} allowFullScreen />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Button variant="primary">Watch movie</Button>
      </Card.Body>
    </Card>
  );
}

export default MovieCard;
