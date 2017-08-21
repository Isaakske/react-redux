import {State} from "../reducers/Reducer";
import {connect, Dispatch} from "react-redux";
import {List} from "immutable";
import TasksComponent from "../components/TasksComponent";
import Task from "../models/Task";

interface ContentStateProps {
    tasks: List<Task>
}

const mapStateToProps = (state: State): ContentStateProps => {
    let tasks = state.tasks;

    return {
        tasks
    }
};

interface TasksDispatchProps {
    onMount: (tasks: List<Task>) => void
}

const mapDispatchToProps = (dispatch: Dispatch<Function>): TasksDispatchProps => {
    return {
        onMount: (tasks: List<Task>) => {

        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TasksComponent)
