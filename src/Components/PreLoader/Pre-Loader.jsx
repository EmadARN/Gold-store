import animationData from "../../Asset/Animation - 1713359636723.json";
import Lottie from "lottie-react";
import {Grid,Box,Typography} from '@mui/material'

const Loader = () => {
    return (  
        <Grid
      sx={{
        width: "100%",
        height: "100vh",
        zIndex: "10",
        position: "fixed",
        top: "0",
        left: "0",
        background: "#18181b",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid width="100%" flexDirection="column" className="svg-wrapper" display="flex" justifyContent="center" alignItems="center">
        {/* copy svg image and past it here */}
        <Box sx={{width:{xs:"30%",md:"12%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}} >
          <Lottie animationData={animationData} />
          <Typography sx={{fontSize:{xs:"15px",md:'20px',color:"#FFC436",fontFamily:"Yekan"}}}>طلای آدلی کارا</Typography>
        </Box>
     
      
      </Grid>
    </Grid>
    );
}
 
export default Loader;