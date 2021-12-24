import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MovieList from "./components/movieList/MovieList";
import { moviedata } from "./data";
import { useState } from "react";
import Filter from "./components/filter/Filter";
import AddMovie from "./components/addMovie/AddMovie";
import MovieDetails from "./components/movieDetails/MovieDetails";
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
    setMovies([...movies, newMovie]);
  };
  const handleDelete = (id) => {
    setMovies(movies.filter((elt) => elt.id !== id));
  };

  return (
    <div className="App">
      <Router>
        <Route
          path="/" exact
          render={() => (
            <Filter
              handleChange={handleChange}
              title={title}
              ratingChanged={ratingChanged}
            />
          )}
        />
        <Route
          path="/" exact
          render={() => (
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
          )}
        />
        <Route path="/" exact render={()=> (<AddMovie handleAdd={handleAdd}/>)}/>
        
        <Route
          path="/moviedetails/:id" exact
          render={(props) => <MovieDetails {...props} movies={movies} />}
        />
      </Router>
    </div>
  );
}

export default App;
