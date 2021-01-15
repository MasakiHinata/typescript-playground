import React from "react";
import {RootState} from "../redux/states";
import {decrement, increment} from "../redux/actions";
import {connect, ConnectedProps} from "react-redux";

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

function CounterConnect(props: Props) {
    return (<>
        <div>{props.counter.value}</div>
        <input type={"button"} value={"+"} onClick={props.increment}/>
        <input type={"button"} value={"-"} onClick={props.decrement}/>
    </>)
}

export default connector(CounterConnect);