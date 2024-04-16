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
import {
  ButtonFourSx,
  buttonOneSx,
  ButtonThreeSx,
  ButtonTwoSx,
  DataGridSx,
  DialogContentSx,
  DialogTitlex,
  DigitaltitleSx,
  FormControlSx,
  InputAdornmentSx,
  PaperSx,
} from "./Style";

const CashAmount = ({ AllMembers }) => {
  const [members] = useState(AllMembers.data);
  const [cookies] = useCookies(["token"]);
  const [ loading , setLoading] = useState(false)
  const [cash, setCash] = useState(false);
  const [goldPopUp, setGoldPopUp] = useState(false);
  const [cashAmount, setCashAmount] = useState("");
  const [goldAmount, setGoldAmount] = useState("");
  const [cashModalAmount, setCashModalAmount] = useState("");
  const [goldModalAmount, setGoldModalAmount] = useState("");
 

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
        setGoldPopUp(false);
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
              sx={buttonOneSx}
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
              sx={ButtonTwoSx}
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
          <DialogTitle sx={DialogTitlex}>تغییر کیف پول کاربر</DialogTitle>
          <DialogContent sx={DialogContentSx}>
            <FormControl
              onChange={(e) => setCashModalAmount(e.target.value)}
              sx={FormControlSx}
            >
              <OutlinedInput
                id="outlined-adornment-amount"
                endAdornment={
                  <InputAdornment sx={InputAdornmentSx} position="start">
                    ریال
                  </InputAdornment>
                }
                label="Amount"
              />
            </FormControl>
          </DialogContent>
          <DialogActions sx={DialogContentSx}>
            <Button sx={ButtonThreeSx} onClick={handleClose}>
              خروج
            </Button>
            <Button sx={{ color: "#FFC436" }} onClick={(e)=>updateCashAmount(e)}>
              تایید
            </Button>
          </DialogActions>
        </Dialog>
      ) : null}

      {goldPopUp ? (
        <Dialog open={open} onClose={GoldPopUpClose}>
          <DialogTitle sx={DigitaltitleSx}>تغییر کیف طلا کاربر</DialogTitle>
          <DialogContent sx={DialogContentSx}>
            <FormControl
              onChange={(e) => setGoldModalAmount(e.target.value)}
              sx={FormControlSx}
            >
              <OutlinedInput
                id="outlined-adornment-amount"
                endAdornment={
                  <InputAdornment sx={InputAdornmentSx} position="start">
                    گرم
                  </InputAdornment>
                }
                label="Amount"
              />
            </FormControl>
          </DialogContent>
          <DialogActions sx={DialogContentSx}>
            <Button sx={ButtonThreeSx} onClick={GoldPopUpClose}>
              خروج
            </Button>
            <Button sx={{ color: "#FFC436" }} onClick={(e)=>updateGoldAmount(e)}>
              تایید
            </Button>
          </DialogActions>
        </Dialog>
      ) : null}

      <ThemeProvider theme={theme}>
        <Container sx={{ mt: 10 }}>
          <Paper sx={PaperSx}>
            <DataGrid
              sx={DataGridSx}
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
