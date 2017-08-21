import * as React from "react";
import Task from "../models/Task";

interface TaskProps {
    task: Task
}

class TaskComponent extends React.Component<TaskProps, {}>{
    render() {
        return (
            <div>
                <input type="text" />
                <button>Add Risk</button>
            </div>
        );
    }
}

export default TaskComponent;