import React, { useState } from "react";
import { DataGrid, faIR } from "@mui/x-data-grid";
import { Box, Button, TextField, Grid, Typography } from "@mui/material";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";
import Paper from "@mui/material/Paper";
import { Container } from "@mui/material";

import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";

const CashAmount = () => {
  const [cash, setCash] = useState(false);
  const [goldPopUp, setGoldPopUp] = useState(false);

  const handleClose = () => {
    setCash(false);
  };

  const GoldPopUpClose = () => {
    setGoldPopUp(false);
  };

  const existingTheme = useTheme();

  const theme = React.useMemo(
    () =>
      createTheme({}, faIR, existingTheme, {
        direction: "rtl",
      }),
    [existingTheme]
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

      type: "number",
      width: 190,
    },
    {
      field: "goldamount",
      headerName: " موجودی طلا  ",

      type: "number",
      width: 190,
    },
    {
      description: "Actions column.",
      sortable: false,
      width: 220,
      renderCell: (params) => {
        return (
          <Box display="flex" width="100%">
            <Button
              sx={{
                width: "45%",
                padding: "6px 2px",
                mr: 2,
                backgroundColor: "green",
                color: "#fff",
                fontWeight:"bold",
                "&:hover": { backgroundColor: "rgba(20, 112, 44,0.7)" },
              }}
              onClick={() => setCash(true)}
              variant="standard"
            >
              تغییر کیف پول
            </Button>
            <Button
              sx={{
                width: "45%",
                padding: "0 20px",
                backgroundColor: "rgb(255, 196, 54)",
                color: "black",
                fontWeight:"bold",
                "&:hover": { backgroundColor: "rgba(255, 196, 54,0.7)" },
              }}
              onClick={() => setGoldPopUp(true)}
              variant="standard"
            >
              تغییر کیف طلا
            </Button>
          </Box>
        );
      },
    },
  ];
  return (
    <>

        {cash ? (
          <Dialog open={open} onClose={handleClose}>
            <DialogTitle sx={{ backgroundColor: "#272523", color: "#FFC436" }}>
              تغییر کیف پول کاربر
            </DialogTitle>
            <DialogContent sx={{ backgroundColor: "#272523" }}>
              <FormControl
                sx={{
                  width: "100%",

                  input: { color: "#FFC436", direction: "rtl", pr: 2 },

                  "& .MuiInput-underline:after": {
                    borderBottomColor: "#FFC436",
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#fff",
                      borderRadius: "10px",
                    },
                    "&:hover fieldset": {
                      borderColor: "#fff",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#FFC436",
                    },
                  },
                }}
              >
                <OutlinedInput
                  id="outlined-adornment-amount"
                  endAdornment={
                    <InputAdornment
                      sx={{
                        "& .MuiTypography-root": {
                          color: "#fff",
                        },
                      }}
                      position="start"
                    >
                      ریال
                    </InputAdornment>
                  }
                  label="Amount"
                />
              </FormControl>
            </DialogContent>
            <DialogActions sx={{ backgroundColor: "#272523" }}>
              <Button sx={{ color: "red" }} onClick={handleClose}>
                خروج
              </Button>
              <Button sx={{ color: "#FFC436" }} onClick={handleClose}>
                تایید
              </Button>
            </DialogActions>
          </Dialog>
        ) : null}

        {goldPopUp ? (
          <Dialog open={open} onClose={GoldPopUpClose}>
            <DialogTitle sx={{ backgroundColor: "#272523", color: "#FFC436" }}>
              تغییر کیف طلا کاربر
            </DialogTitle>
            <DialogContent sx={{ backgroundColor: "#272523" }}>
              <FormControl
                sx={{
                  width: "100%",

                  input: { color: "#FFC436", direction: "rtl", pr: 2 },

                  "& .MuiInput-underline:after": {
                    borderBottomColor: "#FFC436",
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#fff",
                      borderRadius: "10px",
                    },
                    "&:hover fieldset": {
                      borderColor: "#fff",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#FFC436",
                    },
                  },
                }}
              >
                <OutlinedInput
                  id="outlined-adornment-amount"
                  endAdornment={
                    <InputAdornment
                      sx={{
                        "& .MuiTypography-root": {
                          color: "#fff",
                        },
                      }}
                      position="start"
                    >
                      گرم
                    </InputAdornment>
                  }
                  label="Amount"
                />
              </FormControl>
            </DialogContent>
            <DialogActions sx={{ backgroundColor: "#272523" }}>
              <Button sx={{ color: "red" }} onClick={GoldPopUpClose}>
                خروج
              </Button>
              <Button sx={{ color: "#FFC436" }} onClick={handleClose}>
                تایید
              </Button>
            </DialogActions>
          </Dialog>
        ) : null}
       
          <ThemeProvider theme={theme}>
          <Container sx={{mt:10}} >
          <Paper
          sx={{
            width: "100%",
            overflow: "hidden",
            display: "grid",
            placeItems: "center",
          }}
        >
            <DataGrid
              sx={{
                "& .css-t89xny-MuiDataGrid-columnHeaderTitle": {
                  margin: "0 25px",
                },
                "& .MuiDataGrid-cellContent": {
                  marginRight: "5px",
                  textAlign: "center !important",
                },
                '& .muirtl-rtrcn9-MuiTablePagination-root':{
                  color:"white"
                },
                '& .muirtl-ptiqhd-MuiSvgIcon-root':{
                  color:'white',
                 
                },
                '& .MuiSvgIcon-root':{
                  color:"white"
                                },
                width:"100%",
                bgcolor: "#272523", color: "#fff",
                maxWidth:{xs:"100%"}
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
            
            />
            </Paper>
            </Container>
          </ThemeProvider>

    </>
  );
};

export default CashAmount;
