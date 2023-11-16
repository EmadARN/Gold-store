import { Box, Button, Grid, Typography, createTheme, styled } from "@mui/material";
import React from "react";
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';




const FooterButton =styled("button")(({theme}) =>({
  all:"unset",
  color:"#E3E8E7ff",
  fontSize:"18px",
  backgroundColor:"none",
  border:"none",
  fontWeight:"100",

  
  '&:hover':{
    borderBottom:"1px solid white",
   
    cursor:"pointer"
  }
}))

const Footer = (props) => {




  return(
    
    <>
    <Grid sx={{backgroundColor:"#2d2c2a"}} container>
      {/* footer buttons */}
<Grid mt={4} container display = "flex" justifyContent="space-around" alignItems="center">

<Grid xs={5} sm={4} md={4} alignItems="center" display="flex" flexDirection="column" sx={{marginLeft:{xs:"8%",sm:"0"}}}>
<Box  mb={2}><FooterButton variant="standard">صفحه اصلی</FooterButton></Box>
<Box mb={2}><FooterButton variant="standard"> درباره ما</FooterButton></Box>
<Box ><FooterButton variant="standard">  شرایط و قوانین</FooterButton></Box>

</Grid>

<Grid whiteSpace="nowrap" xs={5} sm={4} md={4} alignItems="center" display="flex" flexDirection="column">
<Box mb={2}><FooterButton variant="standard"> سوالات متداول</FooterButton></Box>
<Box mb={2}><FooterButton variant="standard">  چطوری به طلایار اعتماد کنیم</FooterButton></Box>
<Box ><FooterButton variant="standard">   ارتباط با ما </FooterButton></Box>

</Grid>


<Grid xs={2} sm={4} md={2} sx={{mt:{xs:"10%",sm:"0"}}}>
  <img width={100} height={100} src={props.image}/>
</Grid>

</Grid>


<Grid mt={4} mb={4} container display="flex"  justifyContent="space-around" alignItems="center">
  <Grid item display="flex" alignItems="center" whiteSpace="nowrap" sx={{ml:{xs:"2%",sm:"0"}}}>
    <Typography color="white" fontSize={20} variant="h5">آدرس :</Typography><Typography color="#fff" variant="h6" mr={1} fontWeight="bold">زنجان سفر اباد خیابان 12 نبش نانوایی</Typography>
  </Grid>


  <Grid item display="flex" flexDirection="column" alignItems="center">
    <Box display="flex" alignItems="center"> 
      <Typography color="white" fontSize={20} >  تلفن : </Typography>
      <Typography mr={1} color="#fff" variant="h6" >024-2424-2424-24</Typography>
    </Box>

    <Box mt={1} display="flex" alignItems="center" >
<TelegramIcon sx={{ml:3 ,color:"#FFC436",cursor:"pointer",border:"1px solid #FFC436",padding:"5px",transition:'all ease 1s' ,'&:hover':{borderRadius:"50%"}}}/>
<WhatsAppIcon sx={{ml:3,color:"#FFC436",cursor:"pointer",border:"1px solid #FFC436",padding:"5px",transition:'all ease 1s' ,'&:hover':{borderRadius:"50%"}}}/>
<InstagramIcon sx={{ml:3,color:"#FFC436",cursor:"pointer",border:"1px solid #FFC436",padding:"5px",transition:'all ease 1s' ,'&:hover':{borderRadius:"50%"}}}/>
    </Box>
  </Grid>
</Grid>


    </Grid>
    </>
  );
};

export default Footer;
