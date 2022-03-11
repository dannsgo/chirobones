import React, { useState, useEffect } from "react";

function Sidebar() {
    const displayNone = {
        display: "none",
    };

    return (
        <div>
            <sidebar className="sidebar">
                <ul id="leftIcon" className="sidebar_i">
                    <li id="image_upload" className="menu_i">
                        <label for="uploader" className="uploader">
                            <input type="file" id="uploader" style={displayNone} accept="image/*" />
                            <i className="material-icons">add_photo_alternate</i>
                        </label>
                    </li>
                    <li id="coordinate" className="menu_i">
                        <button className="i_btn">
                            <i className="material-icons">grid_4x4</i>
                        </button>
                    </li>
                    <li id="i_point" className="menu_i">
                        <button className="i_btn">
                            <i className="material-icons">adjust</i>
                        </button>
                    </li>
                    <li id="line" className="menu_i">
                        <button className="i_btn">
                            <i className="material-icons">straighten</i>
                        </button>
                    </li>
                    <li id="i_zoomin" className="menu_i">
                        <button className="i_btn">
                            <i className="material-icons">zoom_in</i>
                        </button>
                    </li>
                    <li id="i_zoomout" className="menu_i">
                        <button className="i_btn">
                            <i className="material-icons">zoom_out</i>
                        </button>
                    </li>
                    <li id="i_light" className="menu_i">
                        <button className="i_btn">
                            <i className="material-icons">lightbulb</i>
                        </button>
                    </li>
                </ul>
            </sidebar>
        </div>
    );
}

export default Sidebar;
