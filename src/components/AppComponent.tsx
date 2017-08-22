import * as React from "react";
import TasksContainer from "../containers/TasksContainer";

interface AppComponentProps {
    onClick: (text: string) => (event: any) => void
}

export default class App extends React.Component<AppComponentProps, {}>{
    render() {
        let input;
        return (
            <div>
                <input type="text" ref={node => {
                    input = node;
                }} />
                <button onClick={() => {
                    this.props.onClick(input.value);
                    input.value = '';
                }}>Add Task</button>
                <TasksContainer />
            </div>
        );
    }
}