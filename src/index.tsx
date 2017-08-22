import * as React from "react";
import * as ReactDOM from "react-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";
import AppContainer from "./containers/AppContainer";
import reducer from "./reducers/Reducer";

let render = () => {
    ReactDOM.render(
        <Provider store={createStore(reducer)}>
            <AppContainer />
        </Provider>,
        document.getElementById('root')
    );
};

render();