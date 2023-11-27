
import Pricedifrences from "./pricedifrences";
import GoldAmount from "./GoldAmount";
import { Grid ,Box} from "@mui/material";
import AdminPermission from "../AdminPermission";
const GoldAmountMain = () => {
    return (
        <> 
        <Grid container display="flex" justifyContent="center" height="80vh" alignItems="center">
<Grid item mr={5} xs={3} >
        <GoldAmount 
        
        
        BoxTitle={" تغییر میزان موجودی  "}
        inputLabel={"گرم"}
        buttonText={"تایید"}
        walletcash ={" طلای موجود"}
        />
        
        </Grid>



        <Grid item xs={3}>
          <AdminPermission/>
        </Grid>

        <Grid item xs={3} mt={5}>
        <Pricedifrences
       BoxTitle2={"قیمت خرید"}
          BoxTitle={"  قیمت فروش  "}
          inputLabel={"ریال"}
          buttonText={"تایید"}
          walletcash ={" طلای موجود"}
          />
          </Grid>
          </Grid>
        </>
     );
}
 
export default GoldAmountMain;