import React, { Component } from "react";
import TabContainer from "./TabMenu/TabContainer";
import TabMenu from "./TabMenu/TabMenu";
import Registration from "./TabMenu/Registration";
import Examination from "./TabMenu/Examination";
import Patient from "./TabMenu/Patient";
import Platform from "./TabMenu/Platform";
import "./Aside.css";
export default class Aside extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0,
        };
    }

    updateIndex = (index) => {
        this.setState({ index });
    };

    render() {
        const { index } = this.state;

        return (
            <aside className="aside">
                <div id="asideAiBtn" className="aside_btn">
                    <button id="btnAI" className="btn_ai" type="button">
                        ChiroBones
                    </button>
                </div>
                <div id="tabMenu" className="tab_menu">
                    <TabContainer index={index} updateIndex={this.updateIndex}>
                        <TabMenu title="Registration" className="list_Box">
                            <Registration />
                        </TabMenu>
                        <TabMenu title="Diagnosis" className="list_Box">
                            <Examination />
                        </TabMenu>
                        <TabMenu title="Info" className="list_Box">
                            <Patient />
                        </TabMenu>
                        <TabMenu title="Sharing" className="list_Box">
                            <Platform />
                        </TabMenu>
                    </TabContainer>
                </div>
            </aside>
        );
    }
}
