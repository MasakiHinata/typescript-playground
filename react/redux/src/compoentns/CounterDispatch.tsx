import React from "react";
import {useDispatch} from "react-redux";
import {decrement, increment, incrementByTen} from "../redux/actions";

export default function CounterDispatch() {

    const dispatch = useDispatch()

    return (<>
        <input type={"button"} value={"+"} onClick={() => dispatch(increment())}/>
        <input type={"button"} value={"-"} onClick={() => dispatch(decrement())}/>
        <input type={"button"} value={"+10"} onClick={() => dispatch(incrementByTen(10))}/>
    </>)
}