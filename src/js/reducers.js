import { combineReducers } from 'redux';
import MovieSearchReducer from './containers/MovieSearchReducer';

const reducers = combineReducers({
search: MovieSearchReducer,

// this is where the reducer props are being held. Only one reducer for search input is needed.
});

export default reducers;
