import { combineReducers } from 'redux';
import imageReducers from './imageReducers';

const rootReducer = combineReducers({
  images : imageReducers,
});

export default rootReducer;
