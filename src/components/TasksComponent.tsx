import * as React from "react";
import Task from "../models/Task";
import {List} from "immutable";
import TaskComponent from "./TaskComponent";

interface TasksProps {
    tasks: List<Task>
}

export default class TasksComponent extends React.Component<TasksProps, {}> {
    render() {
        return (
            <div>
                {this.props.tasks.map(task =>
                    <TaskComponent task={task} />
                )}
            </div>
        );
    }
}