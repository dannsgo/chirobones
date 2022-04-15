import React from "react";
import "./FirstTab_table.css"

function Table({ columns, data }) {

  return (
         <table className="scrolltable" style={{border:'1px solid'}}>
            <thead>
            <tr>
               {columns.map((column) => (
                  <th key={column}>{column}</th>
               ))}
            </tr>
            </thead>
            <tbody>
            {data.map(({ p_code, p_name, p_registdate }) => (
               <tr key={p_code}>
                  <td>{p_code}</td>
                  <td>{p_name}</td>
                  <td>{p_registdate.substr(0,11)}</td>
               </tr>
            ))}
            </tbody>
         </table>
     
  );
}

export default Table;