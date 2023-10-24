import React from 'react';

interface TableProps {
  data: { name: string; age: number }[];
}

const Table: React.FC<TableProps> = ({ data }) => (
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Age</th>
      </tr>
    </thead>
    <tbody>
      {data.map((item, index) => (
        <tr key={index}>
          <td>{item.name}</td>
          <td>{item.age}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default Table;
