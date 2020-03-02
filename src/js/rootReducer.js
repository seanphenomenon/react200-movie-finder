import { combineReducers } from 'redux';
import searchReducer from './containers/MovieSearchContainer/searchReducer';

const rootReducer = combineReducers({
  // key value (search) is related to where reducers props are located
  search: searchReducer
});


export default rootReducer;
