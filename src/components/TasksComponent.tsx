import * as React from "react";
import {List} from "immutable";
import Task from "../models/Task";
import TaskContainer from "../containers/TaskContainer";

interface TasksProps {
    tasks: List<Task>
}

export default class TasksComponent extends React.Component<TasksProps, {}> {
    render() {
        return (
            <div>
                {this.props.tasks.map((task: Task) =>
                    <TaskContainer task={task} key={task.id} />
                )}
            </div>
        );
    }
}