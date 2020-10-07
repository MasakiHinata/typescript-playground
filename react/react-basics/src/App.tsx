import React from 'react';
import MyList from './MyList'
import MyProps from './MyProps'
import Counter from './Counter'

function App() {
    const message: string = "Hello World";
    return (
        <div className="App">
            <h1>{message}</h1>
            <MyList/>
            <MyProps title="Message from App">Hello</MyProps>
            <Counter/>
        </div>
    );
}

export default App;
