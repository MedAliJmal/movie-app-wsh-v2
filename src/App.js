import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MovieList from "./components/movieList/MovieList";
import { moviedata } from "./data";
import { useState } from "react";
import Filter from "./components/filter/Filter";
import AddMovie from "./components/addMovie/AddMovie";
function App() {
  const [movies, setMovies] = useState(moviedata);
  const [title, setTitle] = useState("");
  const [rate, setRate] = useState(0);
  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const ratingChanged = (rate) => {
    setRate(rate);
  };

  const handleAdd = (newMovie) => {
    setMovies([...movies,newMovie])
}
const handleDelete = (id) => {
  setMovies(movies.filter(elt => elt.id!==id))
}

  return (
    <div className="App">
      <Filter
        handleChange={handleChange}
        title={title}
        ratingChanged={ratingChanged}
      />
      <MovieList
        movies={movies.filter(
          (elt) =>
            elt.title
              .trim()
              .toUpperCase()
              .includes(title.trim().toUpperCase()) && elt.rate >= rate
        )}
        handleDelete={handleDelete}
      />
      <AddMovie handleAdd={handleAdd}/>
    </div>
  );
}

export default App;
