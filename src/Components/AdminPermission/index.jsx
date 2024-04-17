import { IPServer } from "@/Config";
import { Box, Button, Paper, Typography, Grid } from "@mui/material";
import Switch from "@mui/material/Switch";
import axios from "axios";
import { useCookies } from "react-cookie";
import {PaperOneSx, SpanOneSx, SwichOneSx, SwitchOneSx, SwitchTwoSX} from "@/Components/AdminPermission/Style";

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
      sx={PaperOneSx}
    >
      {stock_status ? (
        <>
          <Switch
            onChange={() => switchHandler()}
            defaultChecked
            sx={SwitchOneSx}
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
            sx={SwitchTwoSX}
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
              style={SpanOneSx}
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
