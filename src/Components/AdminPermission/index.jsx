import { IPServer } from "@/Config";
import { Box, Button, Paper, Typography, Grid } from "@mui/material";
import Switch from "@mui/material/Switch";
import axios from "axios";
import { useCookies } from "react-cookie";

const AdminPermission = ({ stock_status }) => {
  const [cookies] = useCookies(["token"]);
  const switchHandler = async () => {
    await axios
      .get(`${IPServer}/AdminDashboard-Setting/open-close-stock/`, {
        headers: {
          Authorization: `Token ${cookies.token}`,
        },
      })
      .then((res) => {
        window.location.reload();
      });
  };
  return (
    <Paper
      sx={{
        bgcolor: "#272523",
        maxWidth: "500px",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "10px",
        height: "auto",
        py: 1.5,
        px: 2,
      }}
    >
      {stock_status ? (
        <>
          <Switch
            onChange={() => switchHandler()}
            defaultChecked
            sx={{
              "& .MuiButtonBase-root ": {
                color: "#FFC436 !important",
              },
            }}
          />
          <Typography
            whiteSpace="nowrap"
            color="orange"
            fontWeight="bold"
            fontFamily="Yekan"
            variant="h6"
          >
            وضعیت خرید فروش :
            <span
              style={{
                color: "green",
                fontWeight: "bold",
                fontFamily: "Yekan",
              }}
            >
              فعال
            </span>
          </Typography>
        </>
      ) : (
        <>
          <Switch
            onChange={() => switchHandler()}
            sx={{
              "& .MuiButtonBase-root ": {
                color: "#FFC436 !important",
              },
            }}
          />
          <Typography
            whiteSpace="nowrap"
            color="green"
            fontWeight="bold"
            fontFamily="Yekan"
            variant="h6"
          >
            وضعیت خرید فروش :
            <span
              style={{
                color: "red",
                fontWeight: "bold",
                fontFamily: "Yekan",
              }}
            >
              غیر فعال
            </span>
          </Typography>
        </>
      )}
    </Paper>
  );
};

export default AdminPermission;
