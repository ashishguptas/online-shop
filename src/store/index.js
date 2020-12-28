import { createStore, combineReducers } from 'redux';
import ProductsReducer from "./reducers/ProductsReducers";

const root = combineReducers({
    ProductsReducer
})

const store = createStore(root)
export default store;