import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import MovieList from "../movieList/MovieList";

const AddMovie = ({ handleAdd }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [url, setUrl] = useState();
  const [rate, setRate] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newMovie = { id: Math.random(), title, date, rate, posterUrl: url };
    if (title && date && url && rate) {handleAdd(newMovie);
        setDate("")
        setRate(0)
        setTitle("")
        setUrl()
        handleClose();}
        else alert("Field is empty, fill the blanks.")
  };

  return (
    <div>
        <div className="add-btn">

      <Button variant="secondary" onClick={handleShow} >
        Add Movie
      </Button>
        </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className="modalz">
          <Modal.Title className="formu">
            <h3>Add your movie.</h3>
          </Modal.Title>
        </Modal.Header>
        <div className="modalz">
          <Modal.Body>
            <form className="formulaire" onSubmit={handleSubmit}>
              <h4>Title:</h4>{" "}
              <input
                type="text"
                placeholder="Enter movie title"
                className="form-control"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
              />
              <h4>Movie Cover:</h4>{" "}
              <input
                type="text"
                placeholder="Enter cover url"
                className="form-control"
                onChange={(e) => setUrl(e.target.value)}
                value={url}
              />
              <h4>Release Date:</h4>{" "}
              <input
                type="text"
                placeholder="Enter movie date"
                className="form-control"
                onChange={(e) => setDate(e.target.value)}
                value={date}
              />
              <h4>Rating:</h4>{" "}
              <input
                type="text"
                placeholder="Enter movie rating"
                className="form-control"
                onChange={(e) => setRate(e.target.value)}
                value={rate}
              />
              <Button variant="primary" type="submit" className="bouton">
                Add Movie
              </Button>
            </form>
          </Modal.Body>
        </div>
        <Modal.Footer className="modalz">
          <Button variant="secondary" onClick={handleClose} className="close-btn">
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddMovie;
