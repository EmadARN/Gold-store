import {
  Box,
  Button,
  Grid,
  Typography,
  createTheme,
  styled,
} from "@mui/material";
import React from "react";
import TelegramIcon from "@mui/icons-material/Telegram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import Link from "next/link";

const FooterButton = styled("button")(({ theme }) => ({
  all: "unset",
  color: "#E3E8E7ff",
  fontSize: "18px",
  backgroundColor: "none",
  border: "none",
  fontWeight: "100",
  fontFamily: "Lalezar",
  transition: "all ease-out .6s",
  "&:hover": {
    borderBottom: "1px solid #FFC436",

    cursor: "pointer",
  },
}));

const Footer = (props) => {
  return (
    <>
      <Grid sx={{ backgroundColor: "#2d2c2a" }} container>
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
            sx={{ marginLeft: { xs: "8%", sm: "0" } }}
          >
            <Box mb={2}>
              <Link href="/" style={{ textDecoration: "none" }}>
                <FooterButton variant="standard">صفحه اصلی</FooterButton>
              </Link>
            </Box>
            <Box mb={2}>
              <Link href="/About" style={{ textDecoration: "none" }}>
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
              <Link href="/Faqs" style={{ textDecoration: "none" }}>
                <FooterButton variant="standard"> سوالات متداول</FooterButton>
              </Link>
            </Box>

            <Box mb={2}>
              <Link href="Contact" style={{ textDecoration: "none" }}>
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
          <Grid
            item
            display="flex"
            alignItems="center"
            sx={{
              ml: { xs: "2%", sm: "0" },
            }}
          >
            <Typography
              fontFamily="Yekan"
              color="white"
              fontSize={20}
              variant="h5"
              sx={{ whiteSpace: "nowrap" }}
            >
              آدرس :
            </Typography>
            <Typography
              fontFamily="Yekan"
              color="#fff"
              variant="h6"
              mr={1}
              fontWeight="bold"
            >
              زنجان سفر اباد خیابان 12 نبش نانوایی
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
              <Typography fontFamily="Yekan" mr={1} color="#fff" variant="h6">
                024-2424-2424-24
              </Typography>
            </Box>

            <Box mt={1} display="flex" alignItems="center">
              <TelegramIcon
                sx={{
                  ml: 3,
                  color: "#FFC436",
                  cursor: "pointer",
                  fontSize: "30px",
                  border: "1px solid #FFC436",
                  padding: "5px",
                  transition: "all ease-out .5s",
                  "&:hover": {
                    borderRadius: "50%",
                    color: "skyblue",
                    borderColor: "skyblue",
                  },
                }}
              />
              <WhatsAppIcon
                sx={{
                  ml: 3,
                  color: "#FFC436",
                  cursor: "pointer",
                  fontSize: "30px",
                  border: "1px solid #FFC436",
                  padding: "5px",
                  transition: "all ease-out .5s",
                  "&:hover": {
                    borderRadius: "50%",
                    color: "green",
                    borderColor: "green",
                  },
                }}
              />
              <InstagramIcon
                sx={{
                  ml: 3,
                  color: "#FFC436",
                  fontSize: "30px",
                  cursor: "pointer",
                  border: "1px solid #FFC436",
                  padding: "5px",
                  transition: "all ease-out .5s",
                  "&:hover": {
                    borderRadius: "50%",
                    color: "red",
                    borderColor: "red",
                  },
                }}
              />
            </Box>
          </Grid>
        </Grid>
        <hr style={{ border: "1px solid #FFC436", width: "100%" }} />
        <Typography
          sx={{
            color: "#fff",
            margin: "auto",
            fontWeight: "bold",
            fontFamily: "Yekan",
            py: 1,
          }}
        >
          ساخته شده توسط آدلی کارا
        </Typography>
      </Grid>
    </>
  );
};

export default Footer;
