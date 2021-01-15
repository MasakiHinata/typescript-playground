import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import store from "./redux/store";
import Counter from "./compoent/Counter";

ReactDOM.render(
    <Provider store={store}>
        <Counter/>
    </Provider>,
    document.getElementById('root')
);