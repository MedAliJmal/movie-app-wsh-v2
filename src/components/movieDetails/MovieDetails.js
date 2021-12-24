import React from "react";
import { Navbar } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

const MovieDetails = ({ match, movies }) => {
  const movie = movies.find((movie) => movie.id == match.params.id);
  console.log(movie);
  return (
    <div>
      <Navbar bg="dark" variant="dark" style={{ height: "90px" }}>
        <Link to="/">
        <Navbar.Brand href="#home" className="jmovie">
          {" "}
          <h3 data-text="J.Movies">J.Movies</h3>
        </Navbar.Brand>
        </Link>
      </Navbar>
      <div className="details">
       <h1> {movie.title} </h1>
        <div className="videocontainer">
          <img
            src={movie.posterUrl}
            alt="Movie Cover"
            style={{ height: "400px" }}
            className="movimg"
          />
          <iframe
            src={movie.trailer}
            frameborder="2px"
            className="video"
            style={{ height: "400px", width: "700px" }}
          ></iframe>
        </div>
        <p className="description"> <h2>Movie Description :</h2> {movie.description}
        <p> Released on : {movie.date}</p>
        <p> Movie Rate :</p>{" "}
        <ReactStars
          classNames="stars"
          count={movie.rate}
          size={24}
          isHalf={true}
          color="#ffd700"
        />
        </p>
      </div>
    </div>
  );
};

export default MovieDetails;
