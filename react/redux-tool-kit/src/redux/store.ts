import {rootReducer} from "./slice";
import {configureStore} from "@reduxjs/toolkit";

export const store = configureStore({reducer: rootReducer})

export type AppDispatch = typeof store.dispatch

// import {applyMiddleware, createStore} from "@reduxjs/toolkit";
// import thunk from "redux-thunk";
// export const store = createStore(rootReducer, applyMiddleware(thunk))

// import {rootReducer} from "./reducers";
// export const store = createStore(rootReducer)