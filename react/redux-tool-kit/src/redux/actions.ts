import {createAction, createAsyncThunk} from "@reduxjs/toolkit";

export const INCREMENT = 'INCREMENT'
export const INCREMENT_BY = 'INCREMENT_BY'
export const INCREMENT_ASYNC = 'INCREMENT_ASYNC'

export const increment = createAction(INCREMENT)
export const incrementBy = createAction<number>(INCREMENT_BY)
export const incrementAsync = createAsyncThunk(
    INCREMENT_ASYNC,
    async (value: number) => {
        return value
    }
)