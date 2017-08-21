import * as React from "react";
import Risk from "../models/Risk";

interface RiskProps {
    risk: Risk
}

class RiskComponent extends React.Component<RiskProps, {}>{
    render() {
        return (
            <li>
                {this.props.risk.text}
            </li>
        );
    }
}

export default RiskComponent;