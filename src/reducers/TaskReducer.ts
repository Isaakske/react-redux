import {List} from "immutable";
import Task from "../models/Task";
import Risk from "../models/Risk";

let nextTaskId = 0;

export default (state: List<Task> = <List<Task>>List.of(), action) => {
    console.log(action);
    switch(action.type) {
        case 'ADD_TASK':
            let task = {id: nextTaskId++, text: action.text, risks: <List<Risk>>List.of(), nextRiskId: 0};

            return  state.push(task);
        case 'ADD_RISK':
            let newState = state;
            let foundtask = newState.get(action.taskId);
            let risk = {id: foundtask.nextRiskId++, text: action.text};
            foundtask.risks = foundtask.risks.push(risk);

            return newState.set(action.taskId, foundtask);
        default:
            return state;
    }
}