import * as React from "react";
import Task from "../models/Task";
import RiskContainer from "../containers/RiskContainer";

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
                <RiskContainer />
            </div>
        );
    }
}

export default TaskComponent;