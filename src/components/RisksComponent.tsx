import * as React from "react";
import {List} from "immutable";
import Risk from "../models/Risk";
import RiskComponent from "./RiskComponent";

interface RisksProps {
    risks: List<Risk>,
    visible: boolean
}

export default class RisksComponent extends React.Component<RisksProps, {}> {
    render() {
        if(this.props.visible) {
            return (
                <ul>
                    {this.props.risks.map((risk: Risk) =>
                        <RiskComponent risk={risk} key={risk.id} />
                    )}
                </ul>
            );
        } else {
            return (
                <ul>
                </ul>
            );
        }
    }
}