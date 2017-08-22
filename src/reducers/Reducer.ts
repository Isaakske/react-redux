import {combineReducers, Reducer} from "redux";
import {List} from "immutable";
import TaskReducer from "./TaskReducer";
import Task from "../models/Task";

export interface State extends Immutable.Map<string, any> {
    tasks: List<Task>
}

export default <Reducer<State>>combineReducers({tasks: TaskReducer});