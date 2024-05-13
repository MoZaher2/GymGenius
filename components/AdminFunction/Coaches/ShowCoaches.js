// "use server"
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
// import './Datacollage.css'; 

const columns = [
  { field: 'points_not_working', headerName: 'Points not working', width: 70 },
  { field: 'points_work', headerName: 'Points Work',type: 'number', width: 130 },
  { field: 'nom_of_points', headerName: 'Num of ports',type: 'number', width: 130 },
  { field: 'switch', headerName: 'His switch', width: 90},
  { field: 'room_name', headerName: 'Room name', width: 90},
  { field: 'departement', headerName: 'Department', width: 90},
  { field: 'room_nom', headerName: 'Room num', width: 90},
  { field: 'round', headerName: 'Round', width: 90},
];
const rows = [
  { id: 1, points_not_working: null, points_work: 2, nom_of_points: 35, switch:"HP", room_name:"Library", departement:"CS", room_nom:"107", round:"first"},
  { id: 2, points_not_working: null, points_work: 3, nom_of_points: 35, switch:"HP", room_name:"Library", departement:"CS", room_nom:"107", round:"first"},
  { id: 3, points_not_working: null, points_work: 4, nom_of_points: 35, switch:"HP", room_name:"Library", departement:"CS", room_nom:"107", round:"first"},
  { id: 4, points_not_working: null, points_work: 5, nom_of_points: 35, switch:"HP", room_name:"Library", departement:"CS", room_nom:"107", round:"first"},
  { id: 5, points_not_working: null, points_work: 2, nom_of_points: 35, switch:"HP", room_name:"Library", departement:"CS", room_nom:"107", round:"first"},
  { id: 6, points_not_working: null, points_work: 2, nom_of_points: 35, switch:"HP", room_name:"Library", departement:"CS", room_nom:"107", round:"first"},
  { id: 7, points_not_working: null, points_work: 2, nom_of_points: 35, switch:"HP", room_name:"Library", departement:"CS", room_nom:"107", round:"first"},
  { id: 8, points_not_working: null, points_work: 2, nom_of_points: 35, switch:"HP", room_name:"Library", departement:"CS", room_nom:"107", round:"first"}
];

export default function ShowCoaches() {
  return (
    <div style={{ height: 500, width: '75%' ,border: "2px solid #4e73df"}}>
      <DataGrid rows={rows} columns={columns} pageSize={5}  />
    </div>
    );
}