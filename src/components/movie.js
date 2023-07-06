import './App.css';
import React from 'react';
import MovieList from './components/movie-list';
import Header from './components/header'
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