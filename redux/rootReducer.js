import { combineReducers } from 'redux'
import indexReducer from './reducers/Index/reducer';



//combines all reducers so that they can be put in the store as rootReducer
const rootReducer = combineReducers({
  index: indexReducer
});

export default rootReducer;