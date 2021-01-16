import {combineReducers, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {incrementAsync} from "./actions";

export interface CounterState {
    value: number
}

const initialState: CounterState = {
    value: 0
}


export const counterSlice = createSlice({
    name: 'counter',
    initialState: initialState,
    reducers: {
        increment: state => {
            state.value += 1
        },
        incrementBy: (state, action: PayloadAction<number>) => {
            state.value += action.payload
        }
    },
    extraReducers: builder => {
        builder
            .addCase(incrementAsync.pending, () => console.log('Pending'))
            .addCase(incrementAsync.rejected, (state, action) => console.log(action.error))
            .addCase(incrementAsync.fulfilled, (state, action) => {
                state.value += action.payload
            })
    }
})

export const rootReducer = combineReducers({
    counter: counterSlice.reducer
})

export const {increment, incrementBy} = counterSlice.actions