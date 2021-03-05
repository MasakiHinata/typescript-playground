import {
    CaseReducer,
    combineReducers,
    configureStore,
    createSlice,
    getDefaultMiddleware,
    PayloadAction
} from "@reduxjs/toolkit";
import {Provider, useDispatch, useSelector} from "react-redux";
import {combineEpics, createEpicMiddleware, Epic} from 'redux-observable';
import {timer} from "rxjs";
import {filter, map, mergeMap} from 'rxjs/operators';

type TimerStart = PayloadAction<{}>;
type TimerStartFulfilled = PayloadAction<{ counter: number }>;
type Actions = TimerStart | TimerStartFulfilled

export type TimerState = {
    counter: number
}

const timerStartReducer: CaseReducer<TimerState, TimerStart> = (state, {}) => ({
    ...state,
})

const timerStartFulfilledReducer: CaseReducer<TimerState, TimerStartFulfilled> = (state, {payload}) => ({
    ...state,
    counter: payload.counter
});

const timerSlice = createSlice({
    name: 'timer',
    initialState: {counter: 0} as TimerState,
    reducers: {
        timerStart: timerStartReducer,
        TimerStartFulfilled: timerStartFulfilledReducer
    }
})

const timerStartAction = timerSlice.actions.timerStart;
const timerStartFulfilledAction = timerSlice.actions.TimerStartFulfilled;
const timerEpic: Epic<TimerStart, TimerStartFulfilled, RootState> = (action$) => action$.pipe(
    filter(timerStartAction.match),
    mergeMap(() => timer(0, 1000).pipe(
        map((value): TimerStartFulfilled => ({
            type: timerStartFulfilledAction.type,
            payload: {
                counter: value
            }
        }))
    ))
)

const timerReducer = timerSlice.reducer;
const rootReducer = combineReducers({
    timer: timerReducer
})

const rootEpic = combineEpics(timerEpic);
const epicMiddleware = createEpicMiddleware<Actions, Actions, RootState>();

const store = configureStore({
    reducer: rootReducer,
    devTools: true,
    middleware: [
        epicMiddleware,
        ...getDefaultMiddleware({})
    ],
});

type RootState = ReturnType<typeof rootReducer>;

epicMiddleware.run(rootEpic);

const Timer = () => {
    const dispatcher = useDispatch();
    const counter = useSelector((state: RootState) => state.timer.counter)

    return (<div>
        <div>{counter}</div>
        <button onClick={() => dispatcher(timerStartAction({}))}>start</button>
    </div>)
}

export const TimerApp = () => {
    return (<Provider store={store}>
        <Timer/>
    </Provider>)
}
