import React, { useMemo, useState } from "react";


import FirstTab_01input from "./TabMenu2/FirstTab_01input";
import FirstTab_02diagnosis from "./TabMenu2/FirstTab_02diagnosis";
import FirstTab_03info from "./TabMenu2/FirstTab_03info";
import Table from "./TabMenu2/FirstTab_table";

import SecondTab_01list from "./TabMenu2/SecondTab_01list";
import SecondTab_02create from "./TabMenu2/SecondTab_02create";
import SecondTab_03detail from "./TabMenu2/SecondTab_03detail";

import TabContainer from "./TabMenu/TabContainer";
import TabMenu from "./TabMenu/TabMenu";
import "./Aside.css";


function Aside2() {
    const columns = ["Code", "Name", "Registeration"];



    const data = Array(53)
        .fill()
        .map(() => ({
        name: '박현민',
        email: 'dndb4902',
        phone: '1111111',
        }));

    const [dsc,setdsc] = useState(true);
    const [index, setIndex] = useState(0);
    const [pindex, setPindex] = useState(0);

    const updateIndex = (index) => {
        setIndex(index);
        if(index==0){
            setdsc(true);
        }else{
            setdsc(false);
        }
    };
    const updatePindex = (pindex) => {
        setPindex(pindex);
    };

    return (
      <aside className="aside">
      <div id="asideAiBtn" className="aside_btn">
          <button id="btnAI" className="btn_ai" type="button">
              ChiroBones
          </button>
      </div>
      
      <div id="tabMenu" className="tab_menu">
          <TabContainer index={index} updateIndex={updateIndex}>
              <TabMenu title="Patient Care" className="list_Box">
                    {/* 환자목록 */}
                    <Table columns={columns} data={data} />
              </TabMenu>
              <TabMenu title="Sharing" className="list_Box">
                    {/* 게시판 목록 */}
                    <SecondTab_01list />
              </TabMenu>
          </TabContainer> 
        {dsc?
          <TabContainer index={pindex} updateIndex={updatePindex}>
              <TabMenu title="Registration" className="list_Box">
                    {/* 환자 등록 */}
                    <FirstTab_01input />
              </TabMenu>
              <TabMenu title="Diagnosis" className="list_Box">
                    {/* 환자 진단 */}
                    <FirstTab_02diagnosis />
              </TabMenu>
              <TabMenu title="Info" className="list_Box">
                    {/* 환자 정보 */}
                    <FirstTab_03info />
              </TabMenu>
          </TabContainer>
        :null}
      </div>
  </aside>
    );
}

export default Aside2;
