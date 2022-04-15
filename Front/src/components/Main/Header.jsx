import React from "react";
import "./Header.css";

function Header({patient_info}) {
    const dateValue = new Date().toISOString().substring(0, 10);
    //console.log(patient_info);
    var p_name = " ";
    var p_gender = " ";
    var p_age = " ";
    var p_birthdate = " ";
    var p_hospital = " ";
    var p_registdate = " ";

    if(Array.isArray(patient_info) && patient_info.length === 0){
        
    }else{
        p_name = patient_info[0].p_name;
        p_gender = patient_info[0].p_gender;
        // const p_age = patient_info[0].p_age;
        p_birthdate = patient_info[0].p_birthdate;
        p_hospital = patient_info[0].p_hospital;
        p_registdate = patient_info[0].p_registdate;
    }
    
    return (
        <header>
            <nav id="boneNavbar" className="navbar">
                <ul id="boneNav" className="nav_info">
                    <li>
                        Name
                        <input type="text" id="nav_name" className="nav_box" size="5" value={p_name} readOnly />
                    </li>
                    <span className="nav_vl"></span>
                    <li>
                        Gender
                        <select id="nav_gender" className="nav_box">
                            <option defaultValue="male">{p_gender}</option>
                        </select>
                    </li>
                    <span className="nav_vl"></span>
                    <li>
                        Age
                        <input type="text" id="nav_age" className="nav_box" size="3" />
                    </li>
                    <span className="nav_vl"></span>
                    <li>
                        Date of Birth <input type="date" id="nav_birth" className="nav_box" defaultValue={p_birthdate} />
                    </li>
                    <span className="nav_vl"></span>
                    <li>
                        Hospital <input type="text" id="nav_hospital" className="nav_box" size="10" value={p_hospital} />
                    </li>
                    <span className="nav_vl"></span>
                    <li>
                        Date
                        <input type="date" id="nav_date" className="nav_box" defaultValue={p_registdate} />
                    </li>
                </ul>
            </nav>
        </header>
    );
}
export default Header;
