import {
  HashRouter as Router,
  Route
} from 'react-router-dom';

import React from 'react';
import MovieSearchContainer from './containers/MovieSearchContainer';
import MovieDetailContainer from './containers/MovieDetailContainer';




export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <Router>
          <div className='container'>
            <Route exact path='/' component={ MovieSearchContainer } />
            <Route path='/movie/:id' component={ MovieDetailContainer } />
          </div>
        </Router>
      </div>
    );
  }
}
