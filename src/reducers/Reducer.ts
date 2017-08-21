import {combineReducers, Reducer} from "redux";
import {List} from "immutable";
import {State} from "./State";
import TaskReducer from "./TaskReducer";
import RiskReducer from "./RiskReducer";

export default <Reducer<State>>combineReducers({TaskReducer, RiskReducer});