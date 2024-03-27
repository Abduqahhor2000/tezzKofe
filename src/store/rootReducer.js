import alldataReducer from './reducer/alldata'
import imagesReducer from './reducer/images'

// rootReducer.js
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  allData: alldataReducer,
  images: imagesReducer,
  // Add more reducers as needed
});

export default rootReducer;
