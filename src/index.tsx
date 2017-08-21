import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./components/AppComponent";
import {createStore} from "redux";
import reducer from "./reducers/Reducer";
import {Provider} from "react-redux";

let store = createStore(reducer);

let render = () => {
    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
        document.getElementById('root')
    );
};

store.subscribe(render);
render();