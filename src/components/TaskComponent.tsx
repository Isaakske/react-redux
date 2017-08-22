import * as React from "react";
import Task from "../models/Task";
import RisksComponent from "./RisksComponent";

interface TaskProps {
    onClick: (taskId: number, text: string) => (event: any) => void,
    task: Task
}

class TaskComponent extends React.Component<TaskProps, {}>{
    render() {
        let input;
        return (
            <div>
                <h1>{this.props.task.id}: {this.props.task.text}</h1>
                <input type="text" ref={node => {
                    input = node;
                }} />
                <button onClick={(event: any) => {
                    this.props.onClick(this.props.task.id, input.value)(event);
                    input.value = '';
                }}>Add Risk</button>
                <RisksComponent risks={this.props.task.risks} />
            </div>
        );
    }
}

export default TaskComponent;