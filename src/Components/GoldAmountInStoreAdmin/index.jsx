import GoldAmount from "./GoldAmount";
import { Grid, Box, Paper } from "@mui/material";
import AdminPermission from "../AdminPermission";
const GoldAmountMain = () => {
  return (
    <>
      <Grid
        container
        display="flex"
        justifyContent="center"
height="110%"
        alignItems="center"
      >
        <Paper
          sx={{
            display: "flex",
            justifyContent: "center",
            width: { xs: "100%", md: "90%", lg: "70%" },

          py:8,
            mx: { xs: 0, md: 6, lg: 0 },
            alignItems: "center",
            backgroundColor: "rgba(255,255,255,0.1)",
            backdropFilter: "blur(2px)",
            boxShadow: "0 25px 445px rgba(0,0,0,0.1)",
            border: "10px solid rgba(0,0,0,0.1)",
            flexDirection: "column",
          }}
        >
          <Grid item mb={5} xs={12}>
            <AdminPermission />
          </Grid>

          <Grid
            container
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={12} md={6} sx={{ mb: { xs: 3, md: 0 } }}>
              <GoldAmount
                BoxTitle={" تغییر میزان موجودی  "}
                inputLabel={"گرم"}
                buttonText={"تایید"}
                walletcash={" طلای موجود"}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <GoldAmount
                BoxTitle={"اختلاف قیمت خرید و فروش"}
                inputLabel={"ریال"}
                buttonText={"تایید"}
                walletcash={" طلای موجود"}
              />
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </>
  );
};

export default GoldAmountMain;
