"use client"
import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import './AllTrainees.css'; 
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
    { field: 'Id', headerName: 'ID',type: 'number', width: 130 },
    { field: 'UserName', headerName: 'UserName', width: 70 },
    { field: 'Place', headerName: 'Training place', width: 130 },
    { field: 'Goal', headerName: 'Goal', width: 130 },
    { field: 'Level_Train', headerName: 'Level', width: 90},
    { field: 'Subscription_Status', headerName: 'Sub_Status', width: 90},
    { field: 'Subscription_Duration', headerName: 'Sub_Duration', width: 90},
    { field: 'Name_Coach', headerName: 'Coach', width: 90},
    { field: 'Time_Start', headerName: 'Start of sub',type: 'date',dateSetting: {format: 'dd/MM/yyyy'} ,width: 90},
    { field: 'Time_End', headerName: 'End of sub',type: 'date',dateSetting: {format: 'dd/MM/yyyy'}, width: 90},
    { field: 'Rest', headerName: 'Remaining sessions',type: 'number', width: 90},
  ];

  const tryrows = [
    { 
        Id: 1,
        UserName: 'user1',
        Place: 'Gym A',
        Goal: 'Muscle gain',
        Level_Train: 'Advanced',
        Subscription_Status: 'Active',
        Subscription_Duration: 'Monthly',
        Name_Coach: 'John Doe',
        Time_Start: new Date(2024, 3, 1), // تمثل 1 مايو 2024
        Time_End: new Date(2024, 4, 1), // تمثل 1 يونيو 2024
        Rest: 10
    },
    { 
        Id: 2,
        UserName: 'user2',
        Place: 'Gym B',
        Goal: 'Weight loss',
        Level_Train: 'Beginner',
        Subscription_Status: 'Inactive',
        Subscription_Duration: 'Annual',
        Name_Coach: 'Jane Smith',
        Time_Start: new Date(2024, 2, 15), // تمثل 15 أبريل 2024
        Time_End: new Date(2025, 2, 15), // تمثل 15 أبريل 2025
        Rest: 20
    },
    // يمكنك إضافة المزيد من الصفوف هنا حسب الحاجة
];

  const getRowId = (row) => row.Id;
  return (
    <div style={{ height: 510, width: '99%', textAlign: "center", border: "2px solid var(--second-color)" ,marginTop: "10px"}}>
      <DataGrid rows={tryrows} columns={columns} getRowId={getRowId} pageSize={5} />
    </div>
  );
}
