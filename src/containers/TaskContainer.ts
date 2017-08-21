import {State} from "../reducers/State";
import {connect} from "react-redux";
import TasksComponent from "../components/TasksComponent";
import Task from "../models/Task";
import {List} from "immutable";

interface ContentStateProps {
    tasks: List<Task>
}

const mapStateToProps = (state: State): ContentStateProps => {
    let tasks = state.tasks;

    return {
        tasks
    }
};

export default connect(mapStateToProps)(TasksComponent)
