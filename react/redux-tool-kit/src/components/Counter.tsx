import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../redux/state";
import {increment, incrementBy} from "../redux/slice";
import {incrementAsync} from "../redux/actions";


export default function Counter(){
    const counter = useSelector((state: RootState) => state.counter.value)
    const dispatch = useDispatch()

    return (<>
        <div>{counter}</div>
        <input type={"button"} value={"+"} onClick={() => dispatch(increment())}/>
        <input type={"button"} value={"+10"} onClick={() => dispatch(incrementBy(10))}/>
        <input type={"button"} value={"+Async"} onClick={() => dispatch(incrementAsync(10))}/>
    </>)
}