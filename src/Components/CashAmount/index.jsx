import React from "react";
import { DataGrid,faIR } from "@mui/x-data-grid";
import { Box, Button, TextField } from "@mui/material";

import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';


const CashAmount = () => {
  const [clickedRow, setClickedRow] = React.useState();



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
      phonenumber: "09190978042",
      cashamount: 20,
      goldamount: "",
    },
    {
      id: 2,
      lastName: "حسینی",
      firstName: "ممد",
      phonenumber: "09190978042",
      cashamount: 20,
      goldamount: "",
    },
    {
      id: 3,
      lastName: "رضصایی",
      firstName: "ساغر",
      phonenumber: "09190978042",
      cashamount: 20,
      goldamount: "",
    },
    {
      id: 4,
      lastName: "خضری",
      firstName: "رضا",
      phonenumber: "09190978042",
      cashamount: 20,
      goldamount: "",
    },
    {
      id: 5,
      lastName: "حسینی",
      firstName: "جانی",
      phonenumber: "09190978042",
      cashamount: 20,
      goldamount: "",
    },
    {
      id: 6,
      lastName: "محمدی",
      firstName: " مانی",
      phonenumber: "09190978042",
      cashamount: 20,
      goldamount: "",
    },
    {
      id: 7,
      lastName: "صادقی",
      firstName: "فریبرز",
      phonenumber: "09190978042",
      cashamount: 20,
      goldamount: "",
    },
    {
      id: 8,
      lastName: "سالمی",
      firstName: "حسن",
      phonenumber: "09190978042",
      cashamount: 20,
      goldamount: "",
    },
    {
      id: 9,
      lastName: "احمدی",
      firstName: "جواد",
      phonenumber: "09190978042",
      cashamount: 20,
      goldamount: "",
    },
  ];

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "firstName", headerName: "نام", width: 130, editable: false },
    { field: "lastName", headerName: "نام خانوادگی", width: 130 },
    {
      field: "phonenumber",
      headerName: "شماره همراه ",
      type: "number",
      width: 190,
    },
    {
      field: "cashamount",
      headerName: " موجودی کیف پول ",

      type:"number",
      width: 190,
    
    },
    {
        field: "goldamount",
        headerName: " موجودی طلا  ",
  
        type:"number",
        width: 190,
      
      },
  ];
  return (
    <>
    
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
     
    </>
  );
};

export default CashAmount;
