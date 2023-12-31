import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";

const AddPhoneNumber = () => {
  return (
    <Grid
      mt={10}
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      sx={{ mr: { xs: "8%", md: "0" } }}
    >
      <Grid
        sx={{
          display: { xs: "flex" },
          justifyContent: { xs: "center", md: "start" },
          alignItems: "center",
        }}
      >
        <Typography color="#FFC436" fontFamily="Lalezar" variant="h3">
          طلای حسین،
        </Typography>
        <Typography fontFamily="Lalezar" color="#fff" variant="h4">
          بازار امن طلا
        </Typography>
      </Grid>

      <Grid sx={{ display: { xs: "none", md: "flex" } }} mt={2} display="flex">
        <Box
          ml={3}
          sx={{
            border: "1px solid #FFC436",
            borderRadius: "10px",
            padding: "5px 10px",
            backgroundColor: "rgba(157, 121, 24,0.4)",
          }}
        >
          <Typography
            fontWeight="bold"
            fontFamily="Yekan"
            fontSize="12px"
            color="#FFC436"
            variant="h6"
          >
            بدون نیاز به مراجعه حضوری
          </Typography>
        </Box>

        <Box
          ml={3}
          sx={{
            border: "1px solid #FFC436",
            borderRadius: "10px",
            padding: "5px 10px",
            backgroundColor: "rgba(157, 121, 24,0.4)",
          }}
        >
          <Typography
            fontWeight="bold"
            fontFamily="Yekan"
            fontSize="12px"
            color="#FFC436"
            variant="h6"
          >
            امکان تحویل فیزیکی
          </Typography>
        </Box>

        <Box
          sx={{
            border: "1px solid #FFC436",
            borderRadius: "10px",
            padding: "5px 10px",
            backgroundColor: "rgba(157, 121, 24,0.4)",
          }}
        >
          <Typography
            fontWeight="bold"
            fontFamily="Yekan"
            fontSize="12px"
            color="#FFC436"
            variant="h6"
          >
            بازار24 ساعته
          </Typography>
        </Box>
      </Grid>

      <Grid mb={3} display="flex" flexDirection="column" mt={3}>
        <Typography
          mr={8}
          sx={{ display: { xs: "none", md: "flex" } }}
          mb={1}
          fontFamily="Yekan"
          color="#fff"
          variant="h4"
        >
          خرید و فروش طلای بدون اجرت
        </Typography>
      </Grid>

      <Grid
        mb={3}
        sx={{
          width: { xs: "100%", sm: "80%" },
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Button
          variant="contained"
          sx={{
            bgcolor: "#FFC436",
            color: "#000",
            fontSize: "18px",
            fontWeight: "bold",
            px: 10,
            transition: "all .3s ease-in ",
            "&:hover": {
              bgcolor: "#FFC436",
              letterSpacing: "2px",
              transition: "all .3s ease-in ",
            },
          }}
        >
          ثبت نام
        </Button>
      </Grid>

      <Grid>
        <Typography color="#726F6D" variant="h6">
          درکمتر از دقیقه ثبت نام و شروع به معامله کنید
        </Typography>
      </Grid>
    </Grid>
  );
};

export default AddPhoneNumber;
