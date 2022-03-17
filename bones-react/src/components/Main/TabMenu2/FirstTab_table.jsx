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
            {data.map(({ name, email, phone }) => (
               <tr key={name + email + phone}>
                  <td>{name}</td>
                  <td>{email}</td>
                  <td>{phone}</td>
               </tr>
            ))}
            </tbody>
         </table>
     
  );
}

export default Table;