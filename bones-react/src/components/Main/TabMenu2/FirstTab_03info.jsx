import React from "react";
import "./FirstTab_table.css"

function firstTab_03info() {
    return (
        <div>
            {/* 표 2개로 만들자 위에는 포인트값 3x17 / 벨류값 2x11  */}
            <table className="scrolltable" style={{border:'1px solid', margin:'5px'}}>
                <thead>
                    <tr>
                        <th></th>
                        <th>X-axis</th>
                        <th>Y-axis</th>
                    </tr>
                </thead>
                <tbody style={{height:"150px"}}>
                    <tr>
                        <td>Point1</td>
                        <td>1</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>Point1</td>
                        <td>1</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>Point1</td>
                        <td>1</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>Point1</td>
                        <td>1</td>
                        <td>1</td>
                    </tr><tr>
                        <td>Point1</td>
                        <td>1</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>Point1</td>
                        <td>1</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>Point1</td>
                        <td>1</td>
                        <td>1</td>
                    </tr><tr>
                        <td>Point1</td>
                        <td>1</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>Point1</td>
                        <td>1</td>
                        <td>1</td>
                    </tr>
                        
                </tbody>
            </table>
            <table className="scrolltable" style={{border:'1px solid', margin:'5px'}}>
                <thead>
                    <tr>
                        <th></th>
                        <th style={{width:'203px'}}>Value</th>
                    </tr>
                </thead>
                <tbody style={{height:"120px"}}>
                    <tr>
                        <td>value1</td>
                        <td style={{width:'203px'}}>1</td>
                    </tr>
                    <tr>
                        <td>value1</td>
                        <td style={{width:'203px'}}>1</td>
                    </tr>
                    <tr>
                        <td>value1</td>
                        <td style={{width:'203px'}}>1</td>
                    </tr>
                    <tr>
                        <td>value1</td>
                        <td style={{width:'203px'}}>1</td>
                    </tr>
                    <tr>
                        <td>value1</td>
                        <td style={{width:'203px'}}>1</td>
                    </tr>
                    <tr>
                        <td>value1</td>
                        <td style={{width:'203px'}}>1</td>
                    </tr>
                </tbody>
         </table>
        </div>
    );
}

export default firstTab_03info;
