import React from "react";
import { useState } from "react";
import { DataGrid, faIR } from "@mui/x-data-grid";
import { Grid, Box, Typography, Button } from "@mui/material";
import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Container } from "@mui/material";
import PropTypes from "prop-types";
import axios from "axios";
import { IPServer } from "@/Config";
import { useCookies } from "react-cookie";
import Swal from "sweetalert2";

const SellGoldTransactionAdmin = ({ sellGoldAdmin }) => {
  const [value, setValue] = React.useState(0);
  const [AllWidthraw] = useState(sellGoldAdmin.data);
  const [un_acc_request] = useState(sellGoldAdmin.unacceptable_data);
  const [un_acc_customer_id, setUn_acc_customer_id] = useState("");
  const [cookies] = useCookies(["token"]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const unAccepthandler = (e) => {
    e.preventDefault();
    setUn_acc_customer_id(e.target.name);

    axios
      .post(
        `${IPServer}/AdminDashboard-BuySale/prove-sale-request/`,
        {
          sale_request_id: un_acc_customer_id,
        },
        {
          headers: {
            Authorization: `Token ${cookies.token}`,
          },
        }
      )
      .then((res) => {
        Swal.fire({
          title: res.data.responseFA,
          text: "در صورت بوجود آمدن مشکل با پشتیبانی تماس بگیرید ",
          icon: "success",
        }).then(() => window.location.reload());
      })
      .catch((err) => {
       
        Swal.fire({
          title: err.response.data.responseFA,
          text: "در صورت بوجود آمدن مشکل با پشتیبانی تماس بگیرید ",
          icon: "error",
        });
      });
  };

  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }
  const AllWidthrawReq = AllWidthraw;
  const UnAcceptReqrows = un_acc_request;

  const UnAcceptedReq = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "first_name", headerName: "نام", width: 130, editable: false },
    { field: "last_name", headerName: "نام خانوادگی", width: 130 },
    {
      field: "phone_number",
      headerName: "شماره همراه ",
      type: "number",
      width: 190,
    },
    {
      field: "sale_date",
      headerName: " تاریخ    ",

      type: "number",
      width: 190,
    },
    {
      field: "money_amount",
      headerName: "مبلغ طلا",

      type: "number",
      width: 190,
    },
    {
      field: "gold_amount",
      headerName: "مقدار طلا",

      type: "number",
      width: 190,
    },
    {
      field: "request_status",
      headerName: "   وضعیت  ",

      width: 190,
    },
    {
      description: "Actions column.",
      sortable: false,
      width: 180,
      renderCell: (params) => {
    
        return (
          <Box display="flex">
            <Button
              name={params.row.id}
              sx={{
                backgroundColor: "#41B62A",
                fontWeight: "bold",
                color: "#111",
                "&:hover": { backgroundColor: "rgba(65, 182, 42,0.8)" },
              }}
              onClick={(e) => {
                unAccepthandler(e);
              }}
              variant="standard"
            >
              تایید
            </Button>
          </Box>
        );
      },
    },
  ];

  const AllReqcolumns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "first_name", headerName: "نام", width: 130, editable: false },
    { field: "last_name", headerName: "نام خانوادگی", width: 130 },
    {
      field: "phone_number",
      headerName: "شماره همراه ",
      type: "number",
      width: 190,
    },
    {
      field: "sale_date",
      headerName: " تاریخ    ",

      type: "number",
      width: 190,
    },
    {
      field: "money_amount",
      headerName: "مبلغ طلا",

      type: "number",
      width: 190,
    },
    {
      field: "gold_amount",
      headerName: "مقدار طلا",

      type: "number",
      width: 190,
    },
    {
      field: "request_status",
      headerName: "   وضعیت  ",

      width: 190,
    },
  ];

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
          فروش طلا
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
                {...a11yProps(0)}
                sx={{
                  "&.MuiButtonBase-root": { color: "#111" },
                  fontWeight: "bold",
                  fontSize: "20px",
                  fontFamily: "Yekan",
                }}
                label="درخواست های تایید نشده"
              />
              <Tab
                {...a11yProps(1)}
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
          <TabPanel value={value} index={0}>
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
              rows={un_acc_request}
              columns={UnAcceptedReq}
              initialState={{
                pagination: {
                  paginationModel: { page: 0, pageSize: 5 },
                },
              }}
              pageSizeOptions={[5, 10]}
            />
          </TabPanel>

          <TabPanel value={value} index={1}>
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
              rows={AllWidthraw}
              columns={AllReqcolumns}
              initialState={{
                pagination: {
                  paginationModel: { page: 0, pageSize: 5 },
                },
              }}
              pageSizeOptions={[5, 10]}
            />
          </TabPanel>
        </Container>
      </ThemeProvider>
    </>
  );
};

export default SellGoldTransactionAdmin;
