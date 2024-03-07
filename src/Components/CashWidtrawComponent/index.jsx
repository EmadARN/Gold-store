import React, { useState } from "react";
import { DataGrid, faIR } from "@mui/x-data-grid";
import { Grid, Box, Typography, Button } from "@mui/material";
import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Container } from "@mui/material";
import PropTypes from 'prop-types';
import axios from "axios";
import { IPServer } from "@/Config";
import { useCookies } from "react-cookie";
import Swal from "sweetalert2";
import CircularIndeterminate from "../loader/loading";
const CashWidtrawComponent = ({AllCustomersWidthrawRequest}) => {
  const [value, setValue] = React.useState(0);
  const [AllWidthraw] = useState(AllCustomersWidthrawRequest.all_request)
  const [un_acc_request] =useState(AllCustomersWidthrawRequest.un_accept_request)
  const [cookies] = useCookies(["token"]);
  const [un_acc_customer_id,setUn_acc_customer_id] = useState('')
  const [loading, setLoading] = React.useState(false);


 



  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const unAccepthandler =(e)=>{
    setLoading(true);
    setUn_acc_customer_id(e.target.id);
    e.preventDefault();
    axios.post(`${IPServer}/AdminDashboard-GetRequest/prove-money-get-request/`,
    {
      get_request_id: un_acc_customer_id,
      request_type:"accept"
    },
    {
      headers:{
        Authorization:`Token ${cookies.token}`
      }
    }
    ).then((res)=>{
      Swal.fire({
        title: res.data.responseFA,
        text: " تغیرات با موفقیت اعمال شد",
        icon: "success",
      })
     
    }).catch((err)=>{
      Swal.fire({
        title: err.response.data.responseFA,
        text: "در صورت بوجود آمدن مشکل با پشتیبانی تماس بگیرید ",
        icon: "error",
      });
    })
  }


  const denyHandler =(e)=>{
    e.preventDefault();
    setLoading(true);
    axios.post(`${IPServer}/AdminDashboard-GetRequest/prove-money-get-request/`,
    {
      get_request_id: un_acc_customer_id,
      request_type:"reject"

    },
    {
      headers:{
        Authorization:`Token ${cookies.token}`
      }
    }
    ).then((res)=>{
      Swal.fire({
        title: res.data.responseFA,
        text: " تغیرات با موفقیت اعمال شد",
        icon: "success",
      }).then(() => window.location.reload());
     
    }).catch((err)=>{
      Swal.fire({
        title: err.response.data.responseFA,
        text: "در صورت بوجود آمدن مشکل با پشتیبانی تماس بگیرید ",
        icon: "error",
      });
    })
  }


  
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
        <Box >
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
    'aria-controls': `simple-tabpanel-${index}`,
  };
}



  const AllWidthrawReq = AllWidthraw

  


  const UnAcceptReqrows =un_acc_request

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
      field: "request_date",
      headerName: " تاریخ برداشت   ",

      type: "number",
      width: 190,
    },
    {
      field: "money_amount",
      headerName: "  مقدار برداشت  ",

      type: "number",
      width: 190,
    },
    {
      field: "request_status",
      headerName: "   وضعیت  ",

      width: 190,
    },
   
  ];




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
      field: "request_date",
      headerName: " تاریخ برداشت   ",

      type: "number",
      width: 190,
    },
    {
      field: "money_amount",
      headerName: "  مقدار برداشت  ",

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
      width:180,
      renderCell: (params) => {
        return (
          <>
          <Box mr={2} display="flex" >
            <Button
            id={params.row.id}
              sx={{
             
                backgroundColor: "#41B62A",
                fontWeight:"bold",
                color: "#111",
                "&:hover": { backgroundColor: "rgba(65, 182, 42,0.8)" },
              }}
              onClick={(e) => {
               
                unAccepthandler(e)
             
              }}
              variant="standard"
            >
               {loading ? <CircularIndeterminate color="#222" /> : "تایید"}
            </Button>
           
          </Box>
                    <Box display="flex" >
                    <Button
                    name={params.row.id}
                      sx={{
                     
                        backgroundColor: "#ea1212",
                        fontWeight:"bold",
                        color: "#111",
                        "&:hover": { backgroundColor: "#ed4444" },
                      }}
                      onClick={(e) => {
                        setUn_acc_customer_id(e.target.name);
                        denyHandler(e)
                      }}
                      variant="standard"
                    >
                     {loading ? <CircularIndeterminate color="#FFC436" /> : "رد درخواست"}
                    </Button>
                   
                  </Box>
                  </>
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
        
            <Box width='100%'>

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
              rows={UnAcceptReqrows}
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
              rows={AllWidthrawReq}
              columns={AllReqcolumns}
              initialState={{
                pagination: {
                  paginationModel: { page: 0, pageSize: 5 },
                },
              }}
              pageSizeOptions={[5, 10]}
             
            /> 
              </TabPanel>
            </Box>
         
        </Container>
      </ThemeProvider>
    </>
  );
};

export default CashWidtrawComponent;
