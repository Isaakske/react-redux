import {connect} from "react-redux";
import {Dispatch} from "redux";
import TaskComponent from "../components/TaskComponent";

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

export default connect(mapDispatchToProps)(TaskComponent);