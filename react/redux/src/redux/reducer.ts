import {combineReducers} from "redux";
import {CounterActions, DECREMENT, INCREMENT} from "./actions";

export interface CounterState {
    value: number
}

const initialState: CounterState = {
    value: 0
}

export const counterReducer = (state = initialState, action: CounterActions): CounterState => {
    switch (action.type) {
        case INCREMENT:
            return {
                value: state.value + 1
            }
        case "INCREMENT_BY_VALUE":
            return {
                value: state.value + action.value
            }
        case DECREMENT:
            return {
                value: state.value - 1
            }
        default:
            return state
    }
}

export default combineReducers({
    counter: counterReducer
})