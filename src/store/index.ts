import { createStore, combineReducers } from 'redux';
import NameReducer from '../reducers/NameReducer';

const rootReducer = combineReducers({
    NameReducer
});

const store = createStore(rootReducer);

export default store;