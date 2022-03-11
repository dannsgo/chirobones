import React from "react";

function Header() {
    const value = new Date().toISOString().substring(0, 10);

    return (
        <div>
            <header>
                <nav id="boneNavbar" className="navbar">
                    <ul id="boneNav" className="nav_info">
                        <li>
                            Name
                            <input type="text" id="nav_name" className="nav_box" minlength="2" size="5" />
                        </li>
                        <span className="nav_vl"></span>
                        <li>
                            Gender
                            <select id="nav_gender" className="nav_box">
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        </li>
                        <span className="nav_vl"></span>
                        <li>
                            Age
                            <input type="text" id="nav_age" className="nav_box" minlength="1" size="3" />
                        </li>
                        <span className="nav_vl"></span>
                        <li>
                            Date of Birth <input type="date" id="nav_birth" className="nav_box" value="2000-01-01" />
                        </li>
                        <span className="nav_vl"></span>
                        <li>
                            Hospital <input type="text" id="nav_hospital" className="nav_box" minlength="2" size="10" />
                        </li>
                        <span className="nav_vl"></span>
                        <li>
                            Date
                            <input type="date" id="nav_date" className="nav_box" value={value} />
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    );
}

export default Header;
