import React from "react";
import Typography from "@mui/material/Typography";
import { Box, Button, Container, Grid, Paper } from "@mui/material";
import { useRouter } from "next/router";
import numeral from "numeral";

const Desk = ({ goldStockPrice, walletDataToken }) => {
  var format1 = numeral(goldStockPrice.buy_price).format("0,0");
  var format2 = numeral(goldStockPrice.sale_price).format("0,0");
  var format3 = numeral(walletDataToken.wallet_money_data).format("0,0");
  const deskObj = [
    {
      id: 1,
      title: "قیمت خرید از گلدیار",
      subtitle: "(هر گرم طلا 18 عیار )",
      visibility: "visable",
      price: format1,
      btn: "خرید",
      btnColor: "#41B62A",
      unit: "ریال",
      displayBtn: "flex",
      page: "/BuyGoldPage",
    },
    {
      id: 2,
      title: "قیمت فروش به گلدیار",
      subtitle: "(هر گرم طلا 18 عیار )",
      visibility: "visable",
      price: format2,
      btn: "فروش",
      btnColor: "#FF3F3F",
      unit: "ریال",
      displayBtn: "flex",
      page: "/SellGoldPage",
    },
    {
      id: 3,
      title: "موجودی کیف پول",
      subtitle: "(هر گرم طلا 18 عیار )",
      visibility: "hidden",
      price: format3,
      btn: "افزایش موجودی",
      btnColor: "skyblue",
      unit: "ریال",
      displayBtn: "flex",
      page: "/DepositPage",
    },
    {
      id: 4,
      title: "موجودی کیف طلا",
      price: walletDataToken.wallet_gold_data,
      unit: "گرم",
      displayBtn: "none",
    },
  ];

  const router = useRouter();
  return (
    <Box>
      <Box
        sx={{ margin: "auto", display: "block", textAlign: "center", mb: 10 }}
      >
        <Typography variant="h3" sx={{ color: "#fff" }}>
          میز کار
        </Typography>
      </Box>

      <Grid container>
        {deskObj.map((obj) => {
          return (
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              lg={3}
              key={obj.id}
              pl={1}
              sx={{ display: "grid", placeItems: "center" }}
            >
              <Paper
                sx={{
                  bgcolor: "#272523",
                  maxWidth: "280px",
                  width: "100%",
                  borderRadius: "7px",
                  height: "280px",
                  p: 4,
                  my: 2,
                  pr: 3,
                }}
              >
                <Box>
                  <Typography variant="h6" sx={{ color: "#fff" }}>
                    {obj.title} :
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{ color: "gray", visibility: obj.visibility }}
                  >
                    {obj.subtitle}
                  </Typography>
                </Box>
                <Typography
                  sx={{ color: "#fff", textAlign: "end", py: 3 }}
                  variant="h5"
                >
                  {obj.price} &nbsp;{obj.unit}
                </Typography>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <Button
                    onClick={() => router.push(obj.page)}
                    sx={{
                      width: "80%",
                      my: 1,
                      fontWeight: "600",
                      fontSize: { xs: "18px", md: "22px" },
                      color: "#222",
                      bgcolor: obj.btnColor,
                      display: obj.displayBtn,
                      "&:hover": {
                        bgcolor: obj.btnColor,
                        opacity: 0.8,
                      },
                      whiteSpace: "nowrap",
                    }}
                    variant="contained"
                  >
                    {obj.btn}
                  </Button>
                </Box>
              </Paper>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Desk;
