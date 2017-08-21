import * as React from "react";
import {List} from "immutable";
import Task from "../models/Task";
import TaskComponent from "./TaskComponent";

interface TasksProps {
    onMount: (tasks: List<Task>) => void,
    tasks: List<Task>
}

export default class TasksComponent extends React.Component<TasksProps, {}> {
    componentDidMount() {
        this.props.onMount(this.props.tasks)
    }

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