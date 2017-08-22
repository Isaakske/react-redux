import {connect} from "react-redux";
import {Dispatch} from "redux";
import AppComponent from "../components/AppComponent";

interface AppDispatchProps {
    onClick: (text: string) => (event: any) => void
}

const mapStateToProps = () => {return {}};

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