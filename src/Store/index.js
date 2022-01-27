import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { AlumnoReducer } from "./Alumno/AlumnoReducer";

const composeEnhancers = ( typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ) || compose;

const reducers = combineReducers({
    alumno: AlumnoReducer
});
export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware( thunk )
    )
);