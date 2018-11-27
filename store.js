import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk' 
//import rootReducer from "./store/reducers/rootReducer";
//console.log(rootReducer);

// REDUCERS
import common from "./store/reducers/common";


// ACTIONS

export function initializeStore () {
  return createStore(
    common
    , composeWithDevTools(applyMiddleware(thunkMiddleware)))

}
