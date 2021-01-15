import {ThunkAction} from "redux-thunk";
import {RootState} from "./state";

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

interface IncrementAction {
    type: typeof INCREMENT,
    value: number
}

interface DecrementAction {
    type: typeof DECREMENT,
}

export type CounterActions = IncrementAction | DecrementAction

export const increment = (value: number): ThunkAction<void, RootState, unknown, IncrementAction> => async dispatch => {
    return dispatch(
        {
            type: INCREMENT,
            value: value
        }
    )
}

export const decrement = (): ThunkAction<void, RootState, unknown, DecrementAction> => async dispatch => {
    return dispatch(
        {
            type: DECREMENT,
        }
    )
}
