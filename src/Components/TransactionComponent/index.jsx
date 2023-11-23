import React from 'react'

import { DataGrid,faIR } from "@mui/x-data-grid";
import { Box, Button, TextField,Grid } from "@mui/material";

import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';


const TransactionComponent = () => {
    
  const existingTheme = useTheme();

  const theme = React.useMemo(
    () =>
      createTheme({}, faIR, existingTheme, {
        direction: 'rtl',
      }),
    [existingTheme],
  );






  const rows = [
    {
      id: 1,
      lastName: "احمدی",
      firstName: "علی",
      idnumber: "09190978042",
      amount: 20,
      time: "10.10",
      day:"2",
      mounth:3
    },
    {
      id: 2,
      lastName: "حسینی",
      firstName: "ممد",
      idnumber: "09190978042",
      amount: 20,
      time: "10.10",
      day:"1",
      mounth:4
    },
    {
      id: 3,
      lastName: "رضصایی",
      firstName: "ساغر",
      idnumber: "09190978042",
      amount: 20,
      time: "10.10",
      day:"1",
      mounth:5
    },
    {
      id: 4,
      lastName: "خضری",
      firstName: "رضا",
      idnumber: "09190978042",
      amount: 20,
      time: "10.10",
      day:"22"
    },
    {
      id: 5,
      lastName: "حسینی",
      firstName: "جانی",
      idnumber: "09190978042",
      amount: 20,
      time: "10.10",
      day:"02",
      mounth:5
    },
    {
      id: 6,
      lastName: "محمدی",
      firstName: " مانی",
      idnumber: "09190978042",
      amount: 20,
      time: "10.10",
      day:"1/2/02",
      mounth:21
    },
    {
      id: 7,
      lastName: "صادقی",
      firstName: "فریبرز",
      idnumber: "09190978042",
      amount: 20,
      time: "10.10",
      day:"1/2/02",
      mounth:3
    },
    {
      id: 8,
      lastName: "سالمی",
      firstName: "حسن",
      idnumber: "09190978042",
      amount: 20,
      time: "10.10",
      day:"1/2/02",
      mounth:12
    },
    {
      id: 9,
      lastName: "احمدی",
      firstName: "جواد",
      idnumber: "09190978042",
      amount: 20,
      time: "10.10",
      day:"1/2/02",
      mounth:34
    },
  ];

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "firstName", headerName: "نام", width: 130, editable: false },
    { field: "lastName", headerName: "نام خانوادگی", width: 130 },
    {
      field: "idnumber",
      headerName: " شناسه تراکنش ",
      type: "number",
      width: 190,
    },
    {
      field: "amount",
      headerName: "مبلغ ",

      type:"number",
      width: 190,
    
    },
    {
        field: "time",
        headerName: "  ساعت  ",
  
        type:"number",
        width: 140,
      
      },
      {
        field: "day",
        headerName: "  روز ",
  
        type:"number",
        width: 150,
      
      },
      {
        field: "mounth",
        headerName: "ماه",
  
        type:"number",
        width: 150,
      
      },
  ];
  return (
   <>
   <Grid container display="flex" justifyContent="center" alignItems="center"height="100vh">
      <Box sx={{ height: 400, width: "70%", backgroundColor: "white" }}>
        
        <ThemeProvider theme={theme}>
          <DataGrid
            sx={{
              "& .css-t89xny-MuiDataGrid-columnHeaderTitle": { margin: "0 25px" },
              "& .MuiDataGrid-cellContent": {
                margin: "0 25px",
                textAlign: "center !important",
              },
            }}
            density="comfortable"
            rows={rows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 5 },
               
                
              },
            }}
            pageSizeOptions={[5, 10]}
            checkboxSelection
        
          />
           </ThemeProvider>
        </Box>
        </Grid>
       </>
  )
}

export default TransactionComponent