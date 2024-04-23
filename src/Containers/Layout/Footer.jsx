import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import TelegramIcon from "@mui/icons-material/Telegram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import Link from "next/link";
import {
  FooterButton,
  Footer_Grid,
  Grid2,
  address_grid,
  adress_typo,
  footer_icon,
  footer_link,
  hr_style,
  made_by_adlikara_typo,
  span_style,
} from "./FotterStyle";

const Footer = (props) => {
  var color;

  return (
    <>
      <Grid sx={Footer_Grid} container>
        {/* footer buttons */}
        <Grid
          mt={4}
          container
          display="flex"
          justifyContent="space-around"
          alignItems="center"
        >
          <Grid
            xs={5}
            sm={4}
            md={4}
            alignItems="center"
            display="flex"
            flexDirection="column"
            sx={Grid2}
          >
            <Box mb={2}>
              <Link href="/" style={footer_link}>
                <FooterButton variant="standard">صفحه اصلی</FooterButton>
              </Link>
            </Box>
            <Box mb={2}>
              <Link href="/About" style={footer_link}>
                <FooterButton variant="standard"> درباره ما</FooterButton>
              </Link>
            </Box>
          </Grid>

          <Grid
            whiteSpace="nowrap"
            xs={5}
            sm={4}
            md={4}
            alignItems="center"
            display="flex"
            flexDirection="column"
          >
            <Box mb={2}>
              <Link href="/Faqs" style={footer_link}>
                <FooterButton variant="standard"> سوالات متداول</FooterButton>
              </Link>
            </Box>

            <Box mb={2}>
              <Link href="Contact" style={footer_link}>
                <FooterButton variant="standard"> ارتباط با ما </FooterButton>
              </Link>
            </Box>
          </Grid>

          {/* <Grid xs={2} sm={4} md={2} sx={{ mt: { xs: "10%", sm: "0" } }}>
            <img width={100} height={100} src={props.image} />
          </Grid> */}
        </Grid>

        <Grid
          mt={4}
          mb={4}
          container
          display="flex"
          justifyContent="space-around"
          alignItems="center"
        >
          <Grid item display="flex" alignItems="center" sx={address_grid}>
            <Typography
              fontFamily="Yekan"
              color="white"
              fontSize={20}
              variant="h5"
              sx={{ whiteSpace: "nowrap" }}
            >
              آدرس :زنجان.اعتمادیه.دانشگاه آزادی اعتمادیه
            </Typography>
            <Typography
              sx={adress_typo}
              fontFamily="Yekan"
              color="#fff"
              variant="h6"
              mr={1}
              fontWeight="bold"
              whiteSpace="nowrap"
            >
             
            </Typography>
          </Grid>

          <Grid item display="flex" flexDirection="column" alignItems="center">
            <Box display="flex" alignItems="center">
              <Typography
                fontFamily="Yekan"
                color="white"
                fontSize={20}
                sx={{ whiteSpace: "nowrap" }}
              >
                {" "}
                تلفن :{" "}
              </Typography>
              <Box display="flex" flexDirection="column">
                <Box display="flex" alignItems="center">
                  <Typography
                    ml={2}
                    fontFamily="Yekan"
                    mr={1}
                    color="#fff"
                    variant="h6"
                  >
                    000000000
                  </Typography>
                  <span style={span_style}></span>
                </Box>
                <Box display="flex" alignItems="center">
                  <Typography
                    ml={2}
                    fontFamily="Yekan"
                    mr={1}
                    color="#fff"
                    variant="h6"
                  >
                    000000000
                  </Typography>
                  <span style={span_style}></span>
                </Box>
              </Box>
            </Box>

            <Box mt={1} display="flex" alignItems="center">
              <TelegramIcon sx={footer_icon((color = "skyblue"))} />
              <WhatsAppIcon sx={footer_icon((color = "green"))} />
              <InstagramIcon sx={footer_icon((color = "red"))} />
            </Box>
          </Grid>
        </Grid>
        <hr style={hr_style} />
        <Typography sx={made_by_adlikara_typo}>
          ساخته شده توسط آدلی کارا
        </Typography>
      </Grid>
    </>
  );
};

export default Footer;
