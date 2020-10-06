import {combineReducers, createStore} from "redux";
import modal from './reducers/modal'
import items from './reducers/items'



const reducers = combineReducers({
    modal:modal,
    items:items
})

const store = createStore(reducers,window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;