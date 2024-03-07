import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { BoxoneSx, GridOneSx, ImageOneSx, SpanSx, TypoOneSx } from "./Style";
const ContactUs = () => {
  return (
    <>
      <Box
        sx={BoxoneSx}
      >
        <Typography
          fontWeight="bold"
          color="#FFC436"
          fontFamily="Lalazar"
          mr={4}
          mt={5}
          sx={TypoOneSx}
        >
          ارتباط با طلای حسین
        </Typography>
      </Box>

      <Grid container display="flex" justifyContent="center">
        <Grid
          sx={GridOneSx}
          container
          display="flex"
          justifyContent="space-around"
          alignItems="center"
          mt={13}
          mb={15}
        >
          <Grid item>
            <img
              style={ImageOneSx}
              width={300}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpUl24UpIZMPPIdWEefzYFyV9fgalLZ2qb5w&usqp=CAU"
            />
          </Grid>

          <Grid item>
            <Box mb={1} mt={1} display="flex" alignItems="center">
              <span>
                <PhoneEnabledIcon sx={SpanSx} />
              </span>
              <Typography fontFamily="Yekan" color="#fff" variant="h6">
             09126411239
              </Typography>
            </Box>

            <Box mb={1} mt={1} display="flex" alignItems="center">
              <span>
                <AccessTimeIcon sx={SpanSx} />
              </span>
              <Typography fontFamily="Yekan" color="#fff" variant="h6">
                در این فیلد زمان باز و بسته بودن مغازه و ساعات کاری درج خواهد شد
              </Typography>
            </Box>

            <Box display="flex" mt={2}>
              <span>
                <LocationOnIcon sx={SpanSx} />
              </span>
              <Typography fontFamily="Yekan" color="#fff" variant="h6">
                زنجان.اسلام آباد.جنب بانک سپه.طلای حسین
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default ContactUs;
