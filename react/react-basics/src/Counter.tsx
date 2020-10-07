import React, {useCallback, useState} from 'react'

function Counter() {
    const [count, setCount] = useState<number>(0)

    const handleIncrement = useCallback(() => {
        setCount(value => value + 1)
    }, []);

    const handleDecrement = useCallback(() => {
        setCount(value => value - 1)
    }, [])
    return (<div>
        <div>{count}</div>
        <div>
            <button onClick={() => handleIncrement()}>+1</button>
            <button onClick={() => handleDecrement()}>-1</button>
        </div>
    </div>)
}

export default Counter;