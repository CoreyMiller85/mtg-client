import React from "react";

const Table = (props) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Card</th>
            <th>Numb. Owned</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Random Card</td>
            <td>3</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
