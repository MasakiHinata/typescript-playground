export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

interface IncrementAction {
    type: typeof INCREMENT,
}

interface DecrementAction {
    type: typeof DECREMENT,
}

export type CounterActions = IncrementAction | DecrementAction

export const increment = (): IncrementAction => {
    return {
        type: INCREMENT
    }
}

export const decrement = (): DecrementAction => {
    return {
        type: DECREMENT
    }
}