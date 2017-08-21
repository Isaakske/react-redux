import {State} from "../reducers/State";
import {connect} from "react-redux";
import RisksComponent from "../components/RisksComponent";
import Risk from "../models/Risk";
import {List} from "immutable";

interface ContentStateProps {
    risks: List<Risk>
}

const mapStateToProps = (state: State): ContentStateProps => {
    let risks = state.risks;

    return {
        risks
    }
};

export default connect(mapStateToProps)(RisksComponent)
