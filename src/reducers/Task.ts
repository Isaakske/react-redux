import {List} from "immutable";
import Task from "../models/Task";

export default (state: List<Task> = <List<Task>>List.of(), action) => {
    switch(action.type) {
        case 'ADD_TASK':
            let task = {id: action.id, text: action.text};
            state.push(task);

            return state;
        default:
            return state;
    }
};