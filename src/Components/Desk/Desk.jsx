import React from "react";
import Typography from "@mui/material/Typography";
import { Box, Button, Container, Grid, Paper } from "@mui/material";
import { useRouter } from "next/router";

const deskObj = [
  {
    id: 1,
    title: "قیمت خرید از گلدیار",
    subtitle: "(هر گرم طلا 18 عیار )",
    price: "24,431,010",
    btn: "خرید",
    btnColor: "#41B62A",
    unit: "ریال",
    displayBtn: "flex",
    my: 3,
    page: "/BuyGoldPage",
  },
  {
    id: 2,
    title: "قیمت فروش به گلدیار",
    subtitle: "(هر گرم طلا 18 عیار )",
    price: "19,432,111",
    btn: "فروش",
    btnColor: "#FF3F3F",
    unit: "ریال",
    displayBtn: "flex",
    my: 3,
    page: "/SellGoldPage",
  },
  {
    id: 3,
    title: "موجودی کیف پول",
    price: "19,432,245",
    btn: "افزایش موجودی",
    btnColor: "skyblue",
    unit: "ریال",
    displayBtn: "flex",
    my: 6.7,
    page: "/DepositPage",
  },
  {
    id: 4,
    title: "موجودی کیف طلا",
    price: "500",
    unit: "گرم",
    displayBtn: "none",
  },
];

const Desk = () => {
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
            <Grid xs={12} md={3} key={obj.id}>
              <Paper
                sx={{
                  bgcolor: "#272523",
                  width: "300px",
                  borderRadius: "7px",
                  height: "280px",
                  p: 4,
                }}
              >
                <Box>
                  <Typography variant="h6" sx={{ color: "#fff" }}>
                    {obj.title} :
                  </Typography>
                  <Typography variant="h6" sx={{ color: "gray" }}>
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
                      my: obj.my,
                      fontWeight: "bold",
                      fontSize: "22px",
                      color: "#222",
                      bgcolor: obj.btnColor,
                      display: obj.displayBtn,
                      "&:hover": {
                        bgcolor: obj.btnColor,
                        opacity: 0.8,
                      },
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
