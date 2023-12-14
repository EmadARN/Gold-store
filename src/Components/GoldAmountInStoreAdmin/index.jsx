import GoldAmount from "./GoldAmount";
import { Grid, Paper } from "@mui/material";
import AdminPermission from "../AdminPermission";
import { useState } from "react";
import axios from "axios";
import { IPServer } from "@/Config";
import { useCookies } from "react-cookie";

const GoldAmountMain = ({ settingData }) => {
  const [goldPrice, setGoldPrice] = useState();
  const [cookies] = useCookies(["token"]);
  const [priceDifference, setPriceDifference] = useState();

  // changeGoldPrice
  const changeGoldPrice = (event) => {
    const newValue = { ...goldPrice, value: event.target.value };

    setGoldPrice(newValue);
  };
  const clickHandlerchangeGoldPrice = async () => {
    await axios
      .post(
        `${IPServer}/AdminDashboard-Setting/change-warehouse-gold-amount/`,
        {
          gold_amount: parseFloat(goldPrice.value),
        },
        {
          headers: {
            Authorization: `Token ${cookies.token}`,
          },
        }
      )
      .then((res) => {
        window.location.reload();
      })
      .catch((err) => {});
  };

  // changePriceDifference
  const changePriceDifference = (event) => {
    const newValue = { ...priceDifference, value: event.target.value };

    setPriceDifference(newValue);
  };
  const clickHandlerchangePriceDifference = async () => {
    await axios
      .post(
        `${IPServer}/AdminDashboard-Setting/change-price-difference/`,
        {
          price_difference: parseFloat(priceDifference.value),
        },
        {
          headers: {
            Authorization: `Token ${cookies.token}`,
          },
        }
      )
      .then((res) => {
        window.location.reload();
      })
      .catch((err) => {});
  };

  return (
    <>
      <Grid
        container
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Paper
          sx={{
            display: "flex",
            justifyContent: "center",
            width: { xs: "100%", md: "90%", lg: "70%" },

            py: 8,
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
            <AdminPermission stock_status={settingData.stock_status} />
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
                settingData={settingData.total_gold_stock}
                unit={"گرم"}
                onChange={(e) => changeGoldPrice(e)}
                onClick={() => clickHandlerchangeGoldPrice()}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <GoldAmount
                BoxTitle={"اختلاف قیمت خرید و فروش"}
                inputLabel={"ریال"}
                buttonText={"تایید"}
                walletcash={"اختلاف قیمت فعلی"}
                settingData={settingData.price_difference}
                unit={"ریال"}
                onChange={(e) => changePriceDifference(e)}
                onClick={() => clickHandlerchangePriceDifference()}
              />
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </>
  );
};

export default GoldAmountMain;
