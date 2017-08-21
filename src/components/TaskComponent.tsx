import * as React from "react";
import Task from "../models/Task";
import RisksComponent from "./RisksComponent";

interface TaskProps {
    task: Task
}

class TaskComponent extends React.Component<TaskProps, {}>{
    render() {
        return (
            <div>
                <h1>{this.props.task.text}</h1>
                <input type="text" />
                <button>Add Risk</button>
                <RisksComponent risks={this.props.task.risks} />
            </div>
        );
    }
}

export default TaskComponent;