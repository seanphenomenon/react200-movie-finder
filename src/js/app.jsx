import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import MovieSearchContainer from './containers/MovieSearchContainer';
import MovieDetailContainer from './containers/MovieDetailContainer';

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={MovieSearchContainer} />
        <Route path="/movie/:id" component={MovieDetailContainer} />
      </Router>
    );
  }
}
