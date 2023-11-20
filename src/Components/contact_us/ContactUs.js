import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocationOnIcon from "@mui/icons-material/LocationOn";
const ContactUs = () => {
  return (
    <Grid container height="70vh">
      <Typography color="#fff" fontFamily="Yekan" mr={4} mt={5} variant="h4">
        ارتباط با طلایار
      </Typography>

      <Grid
        sx={{
          border: "1px solid #2B2926",
          borderRadius: "60px",
          backgroundColor: "#2B2926",
          width: "80%",
          height: "70%",
        }}
        container
        display="flex"
        justifyContent="space-around"
        alignItems="center"
        mt={13}
        mb={15}
      >
        <Grid item>
          <img
            width={300}
            src="https://static.vecteezy.com/system/resources/thumbnails/009/384/688/small/contact-us-buttons-clipart-design-illustration-free-png.png"
          />
        </Grid>

        <Grid item>
          <Box mb={1} display="flex" alignItems="center">
            <span>
              <PhoneEnabledIcon sx={{ color: "#FFC436", ml: 2, mt: 1 }} />
            </span>
            <Typography fontFamily="Yekan" color="#fff" variant="h6">
              012131242
            </Typography>
          </Box>

          <Box mb={1} display="flex" alignItems="center">
            <span>
              <AccessTimeIcon sx={{ color: "#FFC436", ml: 2, mt: 1 }} />
            </span>
            <Typography fontFamily="Yekan" color="#fff" variant="h6">
              در این فیلد زمان باز و بسته بودن مغازه و ساعات کاری درج خواهد شد
            </Typography>
          </Box>

          <Box display="flex">
            <span>
              <LocationOnIcon sx={{ color: "#FFC436", ml: 2, mt: 1 }} />
            </span>
            <Typography fontFamily="Yekan" color="#fff" variant="h6">
              در این فیلد آدرس مغازه درج خواهد شد
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ContactUs;
