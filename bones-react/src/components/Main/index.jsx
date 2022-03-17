import React from "react";
// import React, { useState, useEffect } from "react";
import Header from "./Header";
import Main from "./Main";
import "./index.css";

function MainPage() {
    return (
        <div className="bodyStyle">
            <Header />
            <Main />
        </div>
    );
}

export default MainPage;
