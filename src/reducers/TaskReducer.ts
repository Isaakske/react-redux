import {List} from "immutable";
import Task from "../models/Task";
import Risk from "../models/Risk";

let nextTaskId = 0;

export default (state: List<Task> = <List<Task>>List.of(), action) => {
    console.log(action);
    switch(action.type) {
        case 'ADD_TASK':
            let task = {id: nextTaskId++, text: action.text, risks: <List<Risk>>List.of(), nextRiskId: 0, risksVisible: true};

            return  state.set(task.id, task);
        case 'ADD_RISK':
            let foundtask = state.get(action.taskId);
            let risk = {id: foundtask.nextRiskId++, text: action.text};
            let risks = foundtask.risks.set(risk.id, risk);

            //make new object with new risks, impossible to update risks property of old object
            let newTask = {id: foundtask.id, nextRiskId: foundtask.nextRiskId, text: foundtask.text, risks: risks, risksVisible: foundtask.risksVisible};

            return state.set(action.taskId, newTask);
        default:
            return state;
    }
}