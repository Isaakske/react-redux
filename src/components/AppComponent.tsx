import * as React from "react";
import TaskContainer from "../containers/TaskContainer";

class App extends React.Component<{}, {}>{
    render() {
        return (
            <div>
                <input type="text" />
                <button>Add Task</button>
                <TaskContainer />
            </div>
        );
    }
}

export default App;