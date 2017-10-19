import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import queryReducer from './reducer_queries';

const rootReducer = combineReducers({
  queries: queryReducer,
  form: formReducer
});

export default rootReducer;
