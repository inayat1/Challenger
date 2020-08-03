import { createStore, combineReducers, applyMiddleware } from 'redux';
import NameReducer from '../reducers/NameReducer';
import Thunk from 'redux-thunk';

const rootReducer = combineReducers({
    NameReducer
});

const store = createStore(rootReducer, applyMiddleware(Thunk));

export default store;