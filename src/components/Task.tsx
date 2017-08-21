import * as React from "react";

class Task extends React.Component<{}, {}>{
    render() {
        return (
            <div>
                <input type="text" />
                <button>Add</button>
                <Task />
            </div>
        );
    }
}

export default Task;