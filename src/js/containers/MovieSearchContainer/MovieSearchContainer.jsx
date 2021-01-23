import React from 'react';
import { updateMovieInput, getMovie, getMovieDetails } from './searchActions';
import { NavLink } from 'react-router-dom';

export default class MovieSearchContainer extends React.Component {
  constructor(props) {
    super(props);

    this.handleSearchInput = this.handleSearchInput.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleSearchInput(event) {
    // dispatch was provided by connect()
    const { dispatch } = this.props;
    const { value } = event.target;
    dispatch(updateMovieInput(value));
  }

  handleClick(event) {
    event.preventDefault();
    const { input, dispatch } = this.props;
    dispatch(getMovie(input));
    console.log(input);
  }

  render() {
    // these values were also provided by connect()
    const { input, movies } = this.props;

    return (
      <div>
        <h1>Movie Finder</h1>
        <div className="container">
          <div className="row">
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <button
                  className="btn btn-info "
                  type="button"
                  id="button"
                  onClick={this.handleClick}
                >
                  Search
                </button>
              </div>

              <input
                type="text"
                className="form-control glyphicon glyphicon-search"
                placeholder="Search for a  Movie Title..."
                value={input}
                onChange={this.handleSearchInput}
              />
              <i className="material-icons" id="search-icon">
                search
              </i>
            </div>
          </div>

          {movies.slice(0, 10).map((movies, i) => {
            return (
              <div className="card mb-3" key={i}>
                <div className="row no-gutters">
                  <div className="col-md-4">
                    <img src={`${movies.Poster}`} width="75%" />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{`${movies.Title}`}</h5>
                      <h6>{`${movies.Year}`}</h6>
                      <hr />
                      <NavLink to={`/movie/${movies.imdbID}`}>
                        <button
                          className="btn btn-info flex-right"
                          type="button"
                        >
                          More Information
                        </button>
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
