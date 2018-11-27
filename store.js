import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk' 
import rootReducer from "./store/rootReducer";
//console.log(rootReducer);

// REDUCERS
//import common from "./store/reducers/common";


// ACTIONS

export function initializeStore () {
  return createStore(
    rootReducer
    , composeWithDevTools(applyMiddleware(thunkMiddleware)))

}
