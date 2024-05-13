"use client"
import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import './AllCoaches.css'; 
import api from "@/components/API/api";

export default function Datacollage() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('Token');
        const response = await api.get(`/DataCollage/GetDataCollageDetails`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
         // Add a unique id to each row
      const rowsWithIds = response.data.map((row, index) => ({
        ...row,
        id: index + 1 // Assuming index starts from 0, you might need to adjust if not
      }));
      setRows(rowsWithIds);
      // setRows(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const columns = [
    { field: 'Id', headerName: 'ID', type: 'number', width: 130 },
    { field: 'Name', headerName: 'Name', width: 150},
    { field: 'UserName', headerName: 'UserName', width: 70 },
    { field: 'Email', headerName: 'Email', width: 70 },
    { field: 'Age', headerName: 'Age', type: 'number', width: 130 },
    { field: 'Salary', headerName: 'Salary', type: 'number', width: 130 },
    { field: 'Phone', headerName: 'Phone', type: 'number', width: 130 },
    { field: 'TraineesNumber', headerName: 'TraineesNumber', type: 'number', width: 130 },
];

  const tryrows = [
    { Id: 1,  Name: 'John', UserName: 'johndoe', Email: 'john@example.com', Age: 30, Salary: 50000, Phone: '123-456-7890', TraineesNumber: 5 },
    { Id: 2,  Name: 'Jane', UserName: 'janesmith', Email: 'jane@example.com', Age: 28, Salary: 60000, Phone: '987-654-3210', TraineesNumber: 3 },
    { Id: 3,  Name: 'Alice', UserName: 'alicejohnson', Email: 'alice@example.com', Age: 35, Salary: 70000, Phone: '555-555-5555', TraineesNumber: 7 },
    { Id: 4,  Name: 'Alice', UserName: 'alicejohnson', Email: 'alice@example.com', Age: 35, Salary: 70000, Phone: '555-555-5555', TraineesNumber: 7 },
    { Id: 5,  Name: 'Alice', UserName: 'alicejohnson', Email: 'alice@example.com', Age: 35, Salary: 70000, Phone: '555-555-5555', TraineesNumber: 7 },
    { Id: 6,  Name: 'Alice', UserName: 'alicejohnson', Email: 'alice@example.com', Age: 35, Salary: 70000, Phone: '555-555-5555', TraineesNumber: 7 },
    { Id: 7,  Name: 'Alice', UserName: 'alicejohnson', Email: 'alice@example.com', Age: 35, Salary: 70000, Phone: '555-555-5555', TraineesNumber: 7 },
    { Id: 8,  Name: 'Alice', UserName: 'alicejohnson', Email: 'alice@example.com', Age: 35, Salary: 70000, Phone: '555-555-5555', TraineesNumber: 7 },
    { Id: 9,  Name: 'Alice', UserName: 'alicejohnson', Email: 'alice@example.com', Age: 35, Salary: 70000, Phone: '555-555-5555', TraineesNumber: 7 },
    { Id: 10,  Name: 'Alice', UserName: 'alicejohnson', Email: 'alice@example.com', Age: 35, Salary: 70000, Phone: '555-555-5555', TraineesNumber: 7 },
    { Id: 11,  Name: 'Alice', UserName: 'alicejohnson', Email: 'alice@example.com', Age: 35, Salary: 70000, Phone: '555-555-5555', TraineesNumber: 7 },
    { Id: 12,  Name: 'Alice', UserName: 'alicejohnson', Email: 'alice@example.com', Age: 35, Salary: 70000, Phone: '555-555-5555', TraineesNumber: 7 },
    { Id: 13,  Name: 'Alice', UserName: 'alicejohnson', Email: 'alice@example.com', Age: 35, Salary: 70000, Phone: '555-555-5555', TraineesNumber: 7 },
    { Id: 14,  Name: 'Alice', UserName: 'alicejohnson', Email: 'alice@example.com', Age: 35, Salary: 70000, Phone: '555-555-5555', TraineesNumber: 7 },
    { Id: 15,  Name: 'Alice', UserName: 'alicejohnson', Email: 'alice@example.com', Age: 35, Salary: 70000, Phone: '555-555-5555', TraineesNumber: 7 },
    { Id: 16,  Name: 'Alice', UserName: 'alicejohnson', Email: 'alice@example.com', Age: 35, Salary: 70000, Phone: '555-555-5555', TraineesNumber: 7 },
    { Id: 17,  Name: 'Alice', UserName: 'alicejohnson', Email: 'alice@example.com', Age: 35, Salary: 70000, Phone: '555-555-5555', TraineesNumber: 7 },
    { Id: 18,  Name: 'Alice', UserName: 'alicejohnson', Email: 'alice@example.com', Age: 35, Salary: 70000, Phone: '555-555-5555', TraineesNumber: 7 },
    { Id: 19,  Name: 'Alice', UserName: 'alicejohnson', Email: 'alice@example.com', Age: 35, Salary: 70000, Phone: '555-555-5555', TraineesNumber: 7 },
    { Id: 20,  Name: 'Alice', UserName: 'alicejohnson', Email: 'alice@example.com', Age: 35, Salary: 70000, Phone: '555-555-5555', TraineesNumber: 7 },
];
const getRowId = (row) => row.Id;
  return (
    <div style={{ height: 510, width: '90%', textAlign: "center", border: "2px solid var(--second-color)" ,marginTop: "10px"}}>
      <DataGrid rows={tryrows} getRowId={getRowId} columns={columns}/>
    </div>
  );
}
