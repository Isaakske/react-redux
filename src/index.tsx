import * as React from "react";
import * as ReactDOM from "react-dom";
import {Router, Route, browserHistory} from "react-router";
import * as Task from "./components/Task";

ReactDOM.render(
    <Task />,
    document.getElementById('root')
);