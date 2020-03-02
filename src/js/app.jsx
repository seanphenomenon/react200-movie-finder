import React from 'react';
import {HashRouter as Router,Route} from 'react-router-dom';
import MovieSearchContainer from './containers/MovieSearchContainer';
import MovieDetailContainer from './containers/MovieDetailContainer';


export default class App extends React.Component {

  render() {

    return (
      <div>
        <h1 className='text-center' id='header'>Movie Finder</h1>
        <hr id="line-break"/>
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
