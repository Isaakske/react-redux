import {combineReducers, Reducer} from "redux";
import TaskReducer from "./Task";
import RiskReducer from "./Risk";
import Task from "../models/Task";
import {List} from "immutable";

interface State extends Immutable.Map<string, any> {
    tasks: List<Task>
}

export default <Reducer<State>>combineReducers({TaskReducer, RiskReducer});