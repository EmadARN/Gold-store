import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import {
  BoxOneSx,
  BoxThreeSx,
  BoxtwoSx,
  ButtonOneSx,
  GridFourSx,
  GridOneSx,
  GridThreeSx,
  GridTwoSx,
  TypoOneSx,
} from "@/Components/AddPhoneNumber/Style";

const AddPhoneNumber = () => {
  return (
    <Grid
      mt={10}
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      sx={GridOneSx}
    >
      <Grid sx={GridTwoSx}>
        <Typography color="#FFC436" fontFamily="Lalezar" variant="h3">
          طلای آدلی کارا،
        </Typography>
        <Typography fontFamily="Lalezar" color="#fff" variant="h4">
          بازار امن طلا
        </Typography>
      </Grid>

      <Grid sx={GridThreeSx} mt={2} display="flex">
        <Box ml={3} sx={BoxOneSx}>
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

        <Box ml={3} sx={BoxtwoSx}>
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

        <Box sx={BoxThreeSx}>
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
          sx={TypoOneSx}
          mb={1}
          fontFamily="Yekan"
          color="#fff"
          variant="h4"
        >
          خرید و فروش طلای بدون اجرت
        </Typography>
      </Grid>

      <Grid mb={3} sx={GridFourSx}>
        <Button variant="contained" sx={ButtonOneSx}>
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
