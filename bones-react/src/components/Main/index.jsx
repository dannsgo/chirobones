import React, { useState, useEffect } from "react";
import "./index.css";
import Header from "./Header";
import Main from "./Main";
import Aside from "./Aside";

function IndexPage() {
    return (
        <div>
            <Header />
            <Main />
            <Aside />
        </div>
    );
}

export default IndexPage;
