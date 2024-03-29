import { combineReducers, createStore } from "redux";
import {todoReducer} from "./TodoReducer";
import { composeWithDevTools } from "@redux-devtools/extension";

const rootReducer = combineReducers({
    todo: todoReducer
})

export const store = createStore(rootReducer, composeWithDevTools())