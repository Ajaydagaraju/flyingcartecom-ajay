import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 'auto' },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 162,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 162,
    editable: true,
  },
  {
    field: 'status',
    headerName: 'Status',
    type: 'boolean',
    width: 162,
    editable: true,
  },
  {
    field: 'order',
    headerName: 'Order',
    type: 'string',
    width: 162,
    editable: true,
  },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 150,
    editable: true,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 162,
    valueGetter: (params) =>
      `${params.getValue(params.id, 'firstName') || ''} ${
        params.getValue(params.id, 'lastName') || ''
      }`,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', order: 'success', status:   true ,age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', order: 'success', status:   true ,age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', order: 'success', status:   true ,age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', order: 'success', status:   true ,age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', order: 'unsuccess', status:   false ,age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, order: 'success', status:   true ,age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', order: 'success', status:   true ,age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', order: 'success', status:   true ,age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', order: 'success', status:   true ,age: 65 },
];

export default function DataGridDemo() {
  return (
    <div style={{ height: 400 }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}
