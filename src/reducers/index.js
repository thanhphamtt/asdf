import { combineReducers } from 'redux';
import imageReducers from './imageReducers';

const rootReducer = combineReducers({
  imageReducers : imageReducers,
});

export default rootReducer;
