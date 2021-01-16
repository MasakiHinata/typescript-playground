import {combineReducers, createReducer} from "@reduxjs/toolkit";
import {increment, incrementBy} from "./actions";

export interface CounterState {
    value: number
}

const initialState: CounterState = {
    value: 0
}

export const counterReducer = createReducer(initialState, builder => {
    builder
        .addCase(increment, (state) => {
            state.value += 1
        })
        .addCase(incrementBy, (state, action) => {
            return {
                value: state.value + action.payload
            }
        })
})

export const rootReducer = combineReducers({
    counter: counterReducer
})