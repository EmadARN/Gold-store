import React from "react";
import { Grid, Button } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Link from "next/link";
import { ButtonDir, MainDirGrid } from "./style";
const Direct_Sign_up = () => {
  return (
    <Grid sx={MainDirGrid}>
      <Link href="/SignUp">
        <Button sx={ButtonDir} endIcon={<ArrowBackIosIcon sx={{ mr: 2 }} />}>
          برای شروع خرید و فروش طلا کلیک کنید
        </Button>
      </Link>
    </Grid>
  );
};

export default Direct_Sign_up;
