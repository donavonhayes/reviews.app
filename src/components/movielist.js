import './MovieList.css';
import Movie from './components/movie.js'

const movies = [
  {movieTitle: 'Deadpool'},
  {movieTitle: 'Happy Gilmore'},
  {movieTitle: 'Step Brothers'},
];

const movieComponents = movies.map((movie, key) => 
<Movie key={key} movieTitle={movie.movieTitle}/>);


function MovieList() {
  return (
    <div className="App">
      {movieComponents}
    </div>
  );
}

export default MovieList;