import {List} from "immutable";
import Risk from "../models/Risk";

export default (state: List<Risk> = <List<Risk>>List.of(), action) => {
    switch(action.type) {
        case 'ADD_RISK':
            let risk = {id: action.id, text: action.text};

            return  state.push(risk);
        default:
            return state;
    }
};