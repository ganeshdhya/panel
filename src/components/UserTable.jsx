import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import '../assets/styles/usertablestyles.css'

const UserTable = ({ data }) => {
  const [visibility, setVisibility] = useState(data.reduce((acc, item) => ({
    ...acc,
    [item.id]: true
  }), {}));

  const toggleVisibility = (id) => {
    setVisibility(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };
  return (
    <Table responsive="sm" striped bordered hover className='text-center my-4 userTable'>
      <thead>
        <tr className='table-head'>
          <th>Action</th>
          <th>Tree ID</th>
          <th>Date</th>
          <th>Tree Species</th>
          <th>Height (m)</th>
          <th>Diameter (cm)</th>
          <th>Avail (yr)</th>
        </tr>
      </thead>
      <tbody className='table-body'>
      {data.map((item) => (
          <tr key={item.id}>
            <td onClick={() => toggleVisibility(item.id)} style={{cursor: 'pointer'}}>
              {visibility[item.id] ? <FaEye /> : <FaEyeSlash />}
            </td>
            <td>{item.id}</td>
            <td>{item.date}</td>
            <td>{item.species}</td>
            <td>{item.height}</td>
            <td>{item.diameter}</td>
            <td>{item.availability}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default UserTable;
