import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Join from "./components/Join";
import Login from "./components/Login";
import Main from "./components/Main";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Login />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/join" element={<Join />} />
                    <Route path="/main" element={<Main />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
