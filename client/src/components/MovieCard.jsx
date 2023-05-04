import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";

function MovieCard({ title, date, video_id }) {
  const navigate = useNavigate();

  return (
    <Card style={{ width: "18rem" }}>
      <img alt={title} src={`https://img.youtube.com/vi/${video_id}/0.jpg`} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Button
          variant="primary"
          onClick={() => navigate(`/watch/${video_id}`)}
        >
          Watch movie
        </Button>
      </Card.Body>
    </Card>
  );
}

export default MovieCard;
