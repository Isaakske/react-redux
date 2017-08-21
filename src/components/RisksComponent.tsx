import * as React from "react";
import {List} from "immutable";
import Risk from "../models/Risk";
import RiskComponent from "./RiskComponent";

interface RisksProps {
    risks: List<Risk>
}

export default class RisksComponent extends React.Component<RisksProps, {}> {
    render() {
        return (
            <ul>
                {this.props.risks.map(risk =>
                    <RiskComponent risk={risk} />
                )}
            </ul>
        );
    }
}