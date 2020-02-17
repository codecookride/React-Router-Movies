import React, { useState } from 'react';
import {Route} from "react-router-dom";
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';


const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />

      <Route path="/" exact component={MovieList} />
      <Route path="/Movies/:id"  render={routeProps => {
          return <Movie {...routeProps} Movie={Movie} />;
        }} />
    </div>
  );
};

export default App;
