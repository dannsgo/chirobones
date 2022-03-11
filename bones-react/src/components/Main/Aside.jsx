import React, { useState, useRef } from "react";

function Aside() {
    return (
        <div>
            <aside class="aside">
                <div id="asideAiBtn" class="aside_btn">
                    <button id="btnAI" class="btn_ai" type="button">
                        ChiroBones
                    </button>
                </div>
                <div id="tabMenu" class="tab_menu">
                    <ul id="tabBtn" class="tab_btn">
                        <li class="tab_menus">
                            <a href="#checkup" class="tab_btns">
                                {" "}
                                환자진찰{" "}
                            </a>
                            <div id="checkup" class="tab_cont">
                                환자진찰영역
                            </div>
                        </li>
                        <li class="tab_menus">
                            <a href="#patient" class="tab_btns">
                                {" "}
                                환자정보{" "}
                            </a>
                            <div id="patient" class="tab_cont">
                                환자정보영역
                            </div>
                        </li>
                        <li class="tab_menus">
                            <a href="#platform" class="tab_btns">
                                {" "}
                                공유플랫폼{" "}
                            </a>
                            <div id="platform" class="tab_cont">
                                공유플랫폼영역
                            </div>
                        </li>
                    </ul>
                </div>
            </aside>
        </div>
    );
}

export default Aside;
