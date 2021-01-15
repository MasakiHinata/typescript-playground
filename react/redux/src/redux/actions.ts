export const INCREMENT = 'INCREMENT';
export const INCREMENT_BY_VALUE = 'INCREMENT_BY_VALUE';
export const DECREMENT = 'DECREMENT';

interface IncrementAction {
    type: typeof INCREMENT,
}

interface IncrementByValueAction {
    type: typeof INCREMENT_BY_VALUE,
    value: number
}

interface DecrementAction {
    type: typeof DECREMENT,
}

export type CounterActions = IncrementAction | IncrementByValueAction | DecrementAction

export const increment = (): IncrementAction => {
    return {
        type: INCREMENT
    }
}

export const incrementByTen = (value: number): IncrementByValueAction => {
    return {
        type: INCREMENT_BY_VALUE,
        value: value
    }
}

export const decrement = (): DecrementAction => {
    return {
        type: DECREMENT
    }
}