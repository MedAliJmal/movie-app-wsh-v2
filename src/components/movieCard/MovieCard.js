import React from "react";
import { Button, Card } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";

const MovieCard = ({ movie , handleDelete }) => {
  return (
    <div>
      <Card className="movie" style={{ width: "18rem" }}>
        <Card.Img className="movie-img" variant="top" src={movie.posterUrl} />
        <Card.Body className="movie-over">
          <Card.Title>{movie.title}</Card.Title>
          <Card.Text className="movie-info">
            <h5>Release date : {movie.date}</h5>
            <ReactStars
              count={movie.rate}
              size={24}
              isHalf={true}
              color="#ffd700"
            />
          </Card.Text>
          <div className="buttons">
            <Button variant="primary" className="watch-btn">
              Watch Movie
            </Button>
            <Button variant="danger" className="delete-btn" onClick={()=> handleDelete(movie.id)}>
              Delete
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MovieCard;
