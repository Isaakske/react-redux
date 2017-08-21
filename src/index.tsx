import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./components/AppComponent";
import {createStore} from "redux";
import reducer from "./reducers/Reducer";

let render = () => {
    ReactDOM.render(
        <App />,
        document.getElementById('root')
    );
};

let store = createStore(reducer);
store.subscribe(render);