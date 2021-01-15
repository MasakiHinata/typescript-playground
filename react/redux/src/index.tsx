import React from 'react';
import ReactDOM from 'react-dom';
import store from "./redux/store";
import {Provider} from "react-redux";
import CounterConnect from "./compoentns/CounterConnect";
import CounterSelect from "./compoentns/CounterSelect";
import CounterDispatch from "./compoentns/CounterDispatch";
import CounterClass from "./compoentns/CounterClass";

ReactDOM.render(
    <Provider store={store}>
        <CounterConnect/>
        <CounterSelect/>
        <CounterDispatch/>
        <CounterClass/>
    </Provider>
    , document.getElementById('root')
);
