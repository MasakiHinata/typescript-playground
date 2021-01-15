import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../redux/state";
import {decrement, increment} from "../redux/actions";

export default function Counter(){
    const counter = useSelector((state: RootState) => state.counter.value)
    const dispatch = useDispatch()

    return (<>
        <div>{counter}</div>
        <input type={"button"} value={"+"} onClick={() => dispatch(increment(10))}/>
        <input type={"button"} value={"-"} onClick={() => dispatch(decrement())}/>
    </>)
}
