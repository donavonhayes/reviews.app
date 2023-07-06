import './App.css';
import React from 'react';
import MovieList from './Components/movie-list';
import Header from './Components/header'
import '../node_modules/bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieList />
    </div>
  );
}

export default App;