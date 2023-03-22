import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function MovieCard({ title, date, link }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{link}</Card.Text>
        <Button variant="primary">Watch movie</Button>
      </Card.Body>
    </Card>
  );
}

export default MovieCard;
