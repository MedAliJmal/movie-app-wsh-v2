import React from "react";
import { Form, FormControl, Navbar } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

const Filter = ({ handleChange, title ,ratingChanged}) => {
  

  return (
    <div>
      <Navbar bg="dark" variant="dark">
      <Link to="/">
        <Navbar.Brand href="#home" className="jmovie">
          {" "}
          <h3 data-text="J.Movies">J.Movies</h3>
        </Navbar.Brand>
        </Link>
        <div className="searchbar">
          <Form inline>
            <FormControl
              type="text"
              placeholder="Search"
              className="mr-sm-2"
              onChange={handleChange}
              value={title}
            />
          </Form>
          <ReactStars
            count={5}
            onChange={ratingChanged}
            size={24}
            isHalf={true}
            activeColor="#ffd700"
          />
        </div>
      </Navbar>
    </div>
  );
};

export default Filter;
