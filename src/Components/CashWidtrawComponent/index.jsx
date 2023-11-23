import React from "react";

import { DataGrid, faIR } from "@mui/x-data-grid";
import { Grid, Box, Typography, Button } from "@mui/material";
import { TablePagination } from "@mui/material";
import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";
import * as locales from "@mui/material/locale";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

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
      field: "deleteButton",
      headerName: "Actions",
      description: "Actions column.",
      sortable: false,
      width: 160,
      renderCell: (params) => {
        return (
          <Box display="flex">
            <Button
              sx={{
                ml: 2,
                backgroundColor: "green",
                color: "#fff",
                "&:hover": { backgroundColor: "rgba(20, 112, 44,0.7)" },
              }}
              onClick={(e) => onButtonClick(e, params.row)}
              variant="standard"
            >
              تایید
            </Button>
            <Button
              sx={{
                backgroundColor: "rgb(247, 0, 45)",
                color: "#fff",
                "&:hover": { backgroundColor: "rgba(247, 0, 45,0.7)" },
              }}
              onClick={(e) => onButtonClick(e, params.row)}
              variant="standard"
            >
              تایید
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
      <Grid
        container
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
        flexDirection="column"
      >
        <Typography color="#fff" variant="h3" fontFamily="Yekan" mb={3}>
          برداشت پول
        </Typography>

        <Box sx={{ width: "70%", bgcolor: "black" }}>
          <Tabs value={value} onChange={handleChange} centered>
            <Tab
              sx={{
                "&.MuiButtonBase-root": { color: "white" },
                fontWeight: "bold",
              }}
              label="درخواست های تایید نشده"
            />
            <Tab
              sx={{
                "&.MuiButtonBase-root": { color: "white" },
                fontWeight: "bold",
              }}
              label="همه ی درخواست ها "
            />
          </Tabs>
        </Box>
        <Grid item sx={{ height: 400, width: "70%", backgroundColor: "white" }}>
          <ThemeProvider theme={theme}>
            <DataGrid
              sx={{
                "& .css-t89xny-MuiDataGrid-columnHeaderTitle": {
                  margin: "0 25px",
                },
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
        </Grid>
      </Grid>
    </>
  );
};

export default CashWidtrawComponent;
