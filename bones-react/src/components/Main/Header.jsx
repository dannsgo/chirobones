import React from "react";
import "./Header.css";

export default function Header() {
    const dateValue = new Date().toISOString().substring(0, 10);

    return (
        <header>
            <nav id="boneNavbar" className="navbar">
                <ul id="boneNav" className="nav_info">
                    <li>
                        Name
                        <input type="text" id="nav_name" className="nav_box" size="5" />
                    </li>
                    <span className="nav_vl"></span>
                    <li>
                        Gender
                        <select id="nav_gender" className="nav_box">
                            <option defaultValue="male">Male</option>
                            <option defaultValue="female">Female</option>
                        </select>
                    </li>
                    <span className="nav_vl"></span>
                    <li>
                        Age
                        <input type="text" id="nav_age" className="nav_box" size="3" />
                    </li>
                    <span className="nav_vl"></span>
                    <li>
                        Date of Birth <input type="date" id="nav_birth" className="nav_box" defaultValue="2000-01-01" />
                    </li>
                    <span className="nav_vl"></span>
                    <li>
                        Hospital <input type="text" id="nav_hospital" className="nav_box" size="10" />
                    </li>
                    <span className="nav_vl"></span>
                    <li>
                        Date
                        <input type="date" id="nav_date" className="nav_box" defaultValue={dateValue} />
                    </li>
                </ul>
            </nav>
        </header>
    );
}
