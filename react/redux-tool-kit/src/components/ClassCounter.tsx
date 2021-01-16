import {RootState} from "../redux/state";
import {connect, ConnectedProps} from "react-redux";
import React from "react";
import {increment, incrementBy} from "../redux/slice";
import {incrementAsync} from "../redux/actions";
import {AppDispatch} from "../redux/store";

const mapState = (state: RootState) => ({
    counter: state.counter
})

const mapDispatch = (dispatch: AppDispatch) => ({
    increment: () => dispatch(increment()),
    incrementBy: (value: number) => dispatch(incrementBy(value)),
    incrementAsync: (value: number) => dispatch(incrementAsync(value))
})

const connector = connect(mapState, mapDispatch)

type PropsFromRedux = ConnectedProps<typeof connector>

export type Props = PropsFromRedux & {}

interface State {

}

class CounterClass extends React.Component<Props, State> {
    render() {
        return (<>
            <div>{this.props.counter.value}</div>
            <input type={"button"} value={"+"} onClick={() => this.props.increment()}/>
            <input type={"button"} value={"+10"} onClick={() => this.props.incrementBy(10)}/>
            <input type={"button"} value={"+Async"} onClick={() => this.props.incrementAsync(10)}/>
        </>);
    }
}

export default connector(CounterClass);