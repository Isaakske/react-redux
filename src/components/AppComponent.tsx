import * as React from "react";
import {List} from "immutable";
import TaskContainer from "../containers/TaskContainer";
import Task from "../models/Task";

interface AppComponentProps {
    onClick: (text: string) => (event: any) => void,
    tasks: List<Task>
}

export default class App extends React.Component<AppComponentProps, {}>{
    render() {
        let input;
        return (
            <div>
                <input type="text" ref={node => {
                    input = node;
                }} />
                <button onClick={this.props.onClick(input.value)}>Add Task</button>
                <TaskContainer />
            </div>
        );
    }
}