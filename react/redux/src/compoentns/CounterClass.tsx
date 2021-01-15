import {RootState} from "../redux/states";
import {decrement, increment} from "../redux/actions";
import {connect, ConnectedProps} from "react-redux";
import React from "react";

const mapState = (state: RootState): RootState => ({
    counter: state.counter
})

const mapDispatch = {
    increment: () => increment(),
    decrement: () => decrement()
}

const connector = connect(mapState, mapDispatch)

type PropsFromRedux = ConnectedProps<typeof connector>

export type Props = PropsFromRedux & {}

interface State {

}

class CounterClass extends React.Component<Props, State> {
    render() {
        return (<>
            <div>{this.props.counter.value}</div>
            <input type={"button"} value={"+"} onClick={this.props.increment}/>
            <input type={"button"} value={"-"} onClick={this.props.decrement}/>
        </>);
    }
}

export default connector(CounterClass);