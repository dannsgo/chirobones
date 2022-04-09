import React, { Component } from "react";
import "./TabMenu.css";
export default class TabContanier extends Component {
    renderTab = (tab, i) => {
        const { updateIndex = () => {} } = this.props;
        const onClick = () => updateIndex(i);
        const color = colorChange("tabTit", i === this.index ? "active" : "primary");

        function colorChange(...arg) {
            return arg.filter(Boolean).join(" ");
        }
        return (
            <button className="tabBtn" key={i}>
                <span onClick={onClick} className={color}>
                    {tab.props.title}
                </span>
            </button>
        );
    };
    render() {
        const { children, index = 0 } = this.props;
        this.index = index;
        if (index >= children.length) {
            this.index = children.length - 1;
        } else if (index <= 0) {
            this.index = 0;
        }
        const kid = children[index];
        const tabs = children.map(this.renderTab);
        return (
            <div className="tabContainer">
                <div className="tabBtn">{tabs}</div>
                <div className="tabKid">{kid}</div>
            </div>
        );
    }
}
