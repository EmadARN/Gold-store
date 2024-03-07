import React, { useEffect, useState } from "react";
import { DataGrid, faIR } from "@mui/x-data-grid";
import { Box, Button, TextField, Grid, Typography } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";
import Paper from "@mui/material/Paper";
import { Container } from "@mui/material";
import axios from "axios";
import { useCookies } from "react-cookie";
import Swal from "sweetalert2";
import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";
import { IPServer } from "@/Config";
import CircularIndeterminate from "../loader/loading";

const CashAmount = ({ AllMembers }) => {
  const [members] = useState(AllMembers.data);
  const [cookies] = useCookies(["token"]);
  const [cash, setCash] = useState(false);
  const [goldPopUp, setGoldPopUp] = useState(false);
  const [cashAmount, setCashAmount] = useState("");
  const [goldAmount, setGoldAmount] = useState("");
  const [cashModalAmount, setCashModalAmount] = useState("");
  const [goldModalAmount, setGoldModalAmount] = useState("");
  const [loading, setLoading] = React.useState(false);
 

  const handleClose = () => {
    setCash(false);
  };

  const GoldPopUpClose = () => {
    setGoldPopUp(false);
  };


  const updateCashAmount = async (e) => {
    e.preventDefault();
    setLoading(true);
    await axios
      .post(
        `${IPServer}/AdminDashboard-DeskPage/change-user-wallet-money-amount/`,
        {
          phone_number: cashAmount,
          money_amount: parseFloat(cashModalAmount),
        },
        {
          headers: {
            Authorization: `Token ${cookies.token}`,
          },
        }
      )
      .then((res) => {
        setCash(false)
          Swal.fire({
        title: res.data.responseFA,
        text: " تغیرات با موفقیت اعمال شد",
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

  const updateGoldAmount = async (e) => {
    e.preventDefault();
    setLoading(true);
    await axios
      .post(
        `${IPServer}/AdminDashboard-DeskPage/change-user-wallet-gold-amount/`,
        {
          phone_number: goldAmount,
          gold_amount: parseFloat(goldModalAmount),
        },
        {
          headers: {
            Authorization: `Token ${cookies.token}`,
          },
        }
      )
      .then((res) => {
        setGoldPopUp(false)
        Swal.fire({
          title: res.data.responseFA,
          text: "  تغیرات با موفقیت اعمال شد ",
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

  const existingTheme = useTheme();

  const theme = React.useMemo(
    () =>
      createTheme({}, faIR, existingTheme, {
        direction: "rtl",
      }),
    [existingTheme]
  );

  const rows = members;

  const columns = [
    { field: "id", headerName: "id", width: 70 },
    { field: "first_name", headerName: "نام", width: 130, editable: false },
    { field: "last_name", headerName: "نام خانوادگی", width: 130 },
    {
      field: "phone_number",
      headerName: "شماره همراه ",
      type: "number",
      width: 190,
    },
    {
      field: "money_amount",
      headerName: " موجودی کیف پول ",

      type: "number",
      width: 190,
    },
    {
      field: "gold_amount",
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
              name={params.row.phone_number}
              sx={{
                width: "45%",
                padding: "6px 2px",
                mr: 2,
                backgroundColor: "green",
                color: "#fff",
                fontWeight: "bold",
                "&:hover": { backgroundColor: "rgba(20, 112, 44,0.7)" },
              }}
              onClick={(e) => {
                setCashAmount(e.target.name);
                setCash(true);
              }}
              variant="standard"
            >
              تغییر کیف پول
            </Button>
            <Button
              name={params.row.phone_number}
              sx={{
                width: "45%",
                padding: "0 20px",
                backgroundColor: "rgb(255, 196, 54)",
                color: "black",
                fontWeight: "bold",
                "&:hover": { backgroundColor: "rgba(255, 196, 54,0.7)" },
              }}
              onClick={(e) => {
                setGoldAmount(e.target.name);
                setGoldPopUp(true);
              }}
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
              onChange={(e) => setCashModalAmount(e.target.value)}
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
            <Button sx={{ color: "#FFC436" }} onClick={(e)=>updateCashAmount(e)}>
            {loading ? <CircularIndeterminate color="#FFC436" /> : "تایید"}
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
              onChange={(e) => setGoldModalAmount(e.target.value)}
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
            <Button sx={{ color: "#FFC436" }} onClick={(e)=>updateGoldAmount(e)}>
            {loading ? <CircularIndeterminate color="#FFC436" /> : "تایید"}
            </Button>
          </DialogActions>
        </Dialog>
      ) : null}

      <ThemeProvider theme={theme}>
        <Container sx={{ mt: 10 }}>
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
                width: "100%",
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
            />
          </Paper>
        </Container>
      </ThemeProvider>
    </>
  );
};

export default CashAmount;
