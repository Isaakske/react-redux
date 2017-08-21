import {List} from "immutable";

interface Task {
    'id': number,
    'text': string,
    'risks': List<Risk>
}

export default Task;