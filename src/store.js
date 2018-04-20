import {createStore, applyMiddleware, combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import thunk from 'redux-thunk';
import {loadAuthToken} from './local-storage';
import authReducer from './reducers/auth';
import protectedDataReducer from './reducers/protected-data';
import {setAuthToken, authSuccess, refreshAuthToken} from './actions/auth';
import questionReducer from './reducers/question'

const store = createStore(
    combineReducers({
        form: formReducer,
        auth: authReducer,
        protectedData: protectedDataReducer,
        question: questionReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
);

// Hydrate the authToken from localStorage if it exist
const authToken = loadAuthToken();
const user = JSON.parse(localStorage.getItem('user'));

if (authToken) {
    store.dispatch(setAuthToken(authToken));
    store.dispatch(authSuccess(user));
}

export default store;
