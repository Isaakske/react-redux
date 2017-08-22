import {connect} from "react-redux";
import {Dispatch} from "redux";
import TaskComponent from "../components/TaskComponent";
import Task from "../models/Task";
import {State} from "../reducers/Reducer";

interface TaskProps {
    task: Task
}

const mapStateToProps = (state: State, ownProps): TaskProps => {
    return {
        task: ownProps.task
    }
};

interface TaskDispatchProps {
    onClick: (taskId: number, text: string) => (event: any) => void
}

const mapDispatchToProps = (dispatch: Dispatch<Function>): TaskDispatchProps => {
    return {
        onClick: (taskId: number, text: string) => (event: any) => {
            dispatch(
                {
                    type: 'ADD_RISK',
                    taskId: taskId,
                    text: text
                }
            )
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskComponent);