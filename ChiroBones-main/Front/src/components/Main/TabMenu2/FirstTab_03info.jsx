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
                        <td>954</td>
                        <td>1098</td>
                    </tr>
                    <tr>
                        <td>Point2</td>
                        <td>2419</td>
                        <td>1093</td>
                    </tr>
                    <tr>
                        <td>Point3</td>
                        <td>972</td>
                        <td>230</td>
                    </tr>
                    <tr>
                        <td>Point4</td>
                        <td>1194</td>
                        <td>1708</td>
                    </tr>
                    <tr>
                        <td>Point5</td>
                        <td>1</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>Point6</td>
                        <td></td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>Point7</td>
                        <td>1</td>
                        <td>1</td>
                    </tr><tr>
                        <td>Point8</td>
                        <td>1</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>Point9</td>
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
                        <td style={{width:'203px'}}>2.12 mm</td>
                    </tr>
                    <tr>
                        <td>value2</td>
                        <td style={{width:'203px'}}>0.1 °</td>
                    </tr>
                    <tr>
                        <td>value3</td>
                        <td style={{width:'203px'}}>4.12 mm</td>
                    </tr>
                    <tr>
                        <td>value4</td>
                        <td style={{width:'203px'}}></td>
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
