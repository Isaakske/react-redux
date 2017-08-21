import * as React from "react";
import * as ReactDOM from "react-dom";
import Task from "./components/Task";
import {createStore} from "redux";
import reducer from "./reducers/Reducer";

let render = () => {
    ReactDOM.render(
        <Task />,
        document.getElementById('root')
    );
};

let store = createStore(reducer);
store.subscribe(render);