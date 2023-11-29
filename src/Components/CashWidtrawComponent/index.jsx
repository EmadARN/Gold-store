import React from "react";

import { DataGrid, faIR } from "@mui/x-data-grid";
import { Grid, Box, Typography, Button } from "@mui/material";
import { TablePagination } from "@mui/material";
import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";
import * as locales from "@mui/material/locale";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Paper from "@mui/material/Paper";
import { Container } from "@mui/material";

const CashWidtrawComponent = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const rows = [
    {
      id: 1,
      lastName: "احمدی",
      firstName: "علی",
      phonenumber: "09190978042",
      widtrawdate: 20,
      widtrawamout: "2",
      situation: "تایید شده",
    },
    {
      id: 2,
      lastName: "حسینی",
      firstName: "ممد",
      phonenumber: "09190978042",
      widtrawdate: 20,
      widtrawamout: "",
      situation: "تایید شده",
    },
    {
      id: 3,
      lastName: "رضصایی",
      firstName: "ساغر",
      phonenumber: "09190978042",
      widtrawdate: 20,
      widtrawamout: "",
      situation: "تایید شده",
    },
    {
      id: 4,
      lastName: "خضری",
      firstName: "رضا",
      phonenumber: "09190978042",
      widtrawdate: 20,
      widtrawamout: "",
      situation: "تایید شده",
    },
    {
      id: 5,
      lastName: "حسینی",
      firstName: "جانی",
      phonenumber: "09190978042",
      widtrawdate: 20,
      widtrawamout: "",
      situation: "تایید شده",
    },
    {
      id: 6,
      lastName: "محمدی",
      firstName: " مانی",
      phonenumber: "09190978042",
      cashamount: 20,
      widtrawamout: "",
      situation: "تایید شده",
    },
    {
      id: 7,
      lastName: "صادقی",
      firstName: "فریبرز",
      phonenumber: "09190978042",
      widtrawdate: 20,
      widtrawamout: "",
      situation: "تایید شده",
    },
    {
      id: 8,
      lastName: "سالمی",
      firstName: "حسن",
      phonenumber: "09190978042",
      widtrawdate: 20,
      widtrawamout: "",
      situation: "تایید شده",
    },
    {
      id: 9,
      lastName: "احمدی",
      firstName: "جواد",
      phonenumber: "09190978042",
      widtrawdate: 20,
      widtrawamout: "",
      situation: "تایید شده",
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
      field: "widtrawdate",
      headerName: " تاریخ برداشت   ",

      type: "number",
      width: 190,
    },
    {
      field: "widtrawamout",
      headerName: "  مقدار برداشت  ",

      type: "number",
      width: 190,
    },
    {
      field: "situation",
      headerName: "   وضعیت  ",

      width: 190,
    },
    {
      description: "Actions column.",
      sortable: false,
      width: 180,
      renderCell: (params) => {
        return (
          <Box display="flex" mr={3}>
            <Button
              sx={{
                mr: 2,
                backgroundColor: "#41B62A",
                fontWeight:"bold",
                color: "#111",
                "&:hover": { backgroundColor: "rgba(65, 182, 42,0.8)" },
              }}
              onClick={(e) => onButtonClick(e, params.row)}
              variant="standard"
            >
              تایید
            </Button>
            <Button
              sx={{
                backgroundColor: "#FF3F3F",
                fontWeight:"bold",
                color: "#111",
                "&:hover": { backgroundColor: "rgba(247, 0, 45,0.7)" },
              }}
              onClick={(e) => onButtonClick(e, params.row)}
              variant="standard"
            >
              لغو
            </Button>
          </Box>
        );
      },
    },
  ];
  const [clickedRow, setClickedRow] = React.useState();

  const existingTheme = useTheme();

  const theme = React.useMemo(
    () =>
      createTheme({}, faIR, existingTheme, {
        direction: "rtl",
      }),
    [existingTheme]
  );
  return (
    <>
      <Box display="flex" justifyContent="center">
        <Typography color="#fff" variant="h3" fontFamily="Yekan" mb={3}>
          برداشت پول
        </Typography>
      </Box>

      <ThemeProvider theme={theme}>
        <Container>
          <Box
            sx={{
              width: "100%",
              bgcolor: "#fff",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Tabs value={value} onChange={handleChange} centered>
              <Tab
                sx={{
                  "&.MuiButtonBase-root": { color: "#111" },
                  fontWeight: "bold",
                  fontSize: "20px",
                  fontFamily: "Yekan",
                }}
                label="درخواست های تایید نشده"
              />
              <Tab
                sx={{
                  "&.MuiButtonBase-root": { color: "#111" },
                  fontWeight: "bold",
                  fontSize: "20px",
                  fontFamily: "Yekan",
                }}
                label="همه ی درخواست ها "
              />
            </Tabs>
          </Box>
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
                "& .muirtl-rtrcn9-MuiTablePagination-root": {
                  color: "white",
                },
                "& .muirtl-ptiqhd-MuiSvgIcon-root": {
                  color: "white",
                },
                "& .MuiSvgIcon-root": {
                  color: "white",
                },

                bgcolor: "#272523",
                color: "#fff",
                maxWidth: { xs: "100%" },
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
          </Paper>
        </Container>
      </ThemeProvider>
    </>
  );
};

export default CashWidtrawComponent;
