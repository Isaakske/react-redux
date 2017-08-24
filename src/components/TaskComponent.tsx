import * as React from "react";
import Task from "../models/Task";
import RisksComponent from "./RisksComponent";

interface TaskProps {
    onClick: (taskId: number, text: string) => (event: any) => void,
    toggleVisible: (taskId: number) => (event: any) => void,
    task: Task
}

class TaskComponent extends React.Component<TaskProps, {}>{
    render() {
        let input;
        let button;
        return (
            <div>
                <h1>{this.props.task.id}: {this.props.task.text}</h1>
                <input type="text" ref={node => {
                    input = node;
                }} onKeyDown={(event: any) => {
                    if(event.keyCode === 13) {
                        button.click();
                    }
                }} />
                <button ref={node => {
                    button = node;
                }} onClick={(event: any) => {
                    this.props.onClick(this.props.task.id, input.value)(event);
                    input.value = '';
                }}>Add Risk</button>
                <button onClick={(event: any) => {
                    this.props.toggleVisible(this.props.task.id)(event);
                }}>Toggle Risks</button>
                <RisksComponent risks={this.props.task.risks} visible={this.props.task.risksVisible} />
            </div>
        );
    }
}

export default TaskComponent;