import {connect} from "react-redux";
import {State} from "../reducers/Reducer";
import {List} from "immutable";
import {Dispatch} from "redux";
import Task from "../models/Task";
import AppComponent from "../components/AppComponent";

interface AppStateProps {
    tasks: List<Task>
}

const mapStateToProps = (state: State): AppStateProps => {
    return {
        tasks: state.tasks ? state.tasks : <List<Task>>List.of()
    };
};

interface AppDispatchProps {
    onClick: (text: string) => (event: any) => void
}

const mapDispatchToProps = (dispatch: Dispatch<Function>): AppDispatchProps => {
    return {
        onClick: (text: string) => (event: any) => {
            dispatch(
                {
                    type: 'ADD_TASK',
                    text: text
                }
            );
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AppComponent);