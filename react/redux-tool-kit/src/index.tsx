import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {store} from "./redux/store";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";

ReactDOM.render(
    <Provider store={store}>
        <Counter/>
        <ClassCounter/>
    </Provider>,
    document.getElementById('root')
);