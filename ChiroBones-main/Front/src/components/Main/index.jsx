import React, { useEffect, useState } from "react";
import Header from "./Header";
import Main from "./Main";
import "./index.css";
import axios from 'axios'

function MainPage() {

    // 데이터 받을떄
    // 요청받은 정보를 담아줄 변수 선언
    const [patient, setPatient] = useState([]);

    const res_data = async () => {
      const res = await axios({
                                url: '/patient',
                                method: 'POST'
                              });
      const data = await res.data;
      return res;
    }
    
    useEffect(()=>{
      // console.log(Promise.resolve(res_data()));
      res_data().then((res) => setPatient(res.data))
        .catch((err) => console.log('err',err));
    },[]);
    
    console.log(patient);

    return (
        
        <div className="bodyStyle">
            <Header patient_info={patient} />
            <Main patient_info={patient} />
        </div>
    );
}

export default MainPage;
