import { combineReducers } from 'redux';

import carsReducer from './carsReducer';
import trafficSignalReducer from './trafficSignalReducer';

const rootReducer = combineReducers({
  carsReducer,
  trafficSignalReducer,
});

export default rootReducer;
