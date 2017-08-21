import {List} from "immutable";
import Risk from "../models/Risk";

interface Task {
    'id': number,
    'text': string,
    'risks': List<Risk>
}

export default Task;