import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";

function Canvas() {
    const displayNone = {
        display: "none",
    };

    return (
        <div>
            <section className="canvas_area">
                <canvas id="boneCanvas" className="boneCanvas"></canvas>
                <div id="mouseXY"></div>
            </section>
            ;
        </div>
    );
}

export default Canvas;
