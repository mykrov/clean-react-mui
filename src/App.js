import { useEffect, useState } from 'react';
import {
  Button,
  Grid,
  Box
} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import './App.css';

const cols = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'name', headerName: 'Nombre', width: 90 },
  { field: 'ced', headerName: 'Cédula', width: 90 },
];



function App() {

  const [rowsShow, setRowShow] = useState([]);
  axios.get('')


  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1} padding={3}>
          <Grid container spacing={1} >
            {/* <Grid item md={6} sm={6} sx={{ background: '#CCC' }}>
              <Button
                variant='filled'
              >
                Click
              </Button>
            </Grid>
            <Grid item md={6} sm={6} sx={{ height: '40vh' }} >
              <DataGrid
                columns={cols}
                rows={rowsShow}
              />
            </Grid> */}
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default App;
