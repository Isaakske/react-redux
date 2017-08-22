import * as React from "react";
import TasksContainer from "../containers/TasksContainer";

interface AppComponentProps {
    onClick: (text: string) => (event: any) => void
}

export default class App extends React.Component<AppComponentProps, {}>{
    render() {
        let input;
        let button;
        return (
            <div>
                <input type="text" ref={node => {
                    input = node;
                }} onKeyDown={(event: any) => {
                    if(event.keyCode === 13) {
                        button.click();
                    }
                }} />
                <button ref={node => {
                    button = node;
                }} onClick={(event: any) => {
                    this.props.onClick(input.value)(event);
                    input.value = '';
                }}>Add Task</button>
                <TasksContainer />
            </div>
        );
    }
}