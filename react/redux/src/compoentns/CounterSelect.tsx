import React from "react";
import {useSelector} from "react-redux";
import {RootState} from "../redux/states";

export default function CounterSelect() {

    const selectCounter = (state: RootState) => state.counter.value
    const counter = useSelector(selectCounter)

    return (<div>{counter}</div>)
}