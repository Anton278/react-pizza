import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import thunk from "redux-thunk";
import {
    categoriesReducer,
    pizzaReducer,
    appReducer,
    basketReducer,
} from "./reducers";

const rootReducer = combineReducers({
    categoriesReducer,
    pizzaReducer,
    appReducer,
    basketReducer,
});

export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);
