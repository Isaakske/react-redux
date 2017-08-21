import {List} from "immutable";
import Task from "../models/Task";

export interface State extends Immutable.Map<string, any> {
    tasks: List<Task>
}