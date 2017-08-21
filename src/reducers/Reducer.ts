import {combineReducers, Reducer} from "redux";
import {List} from "immutable";
import TaskReducer from "./TaskReducer";
import RiskReducer from "./RiskReducer";
import Task from "../models/Task";

interface State extends Immutable.Map<string, any> {
    tasks: List<Task>
}

export default <Reducer<State>>combineReducers({TaskReducer, RiskReducer});