import Withdraw from "../Withdraw/Withdraw";
import Pricedifrences from "./pricedifrences";
import GoldAmount from "./GoldAmount";
const GoldAmountMain = () => {
    return (
        <> 
        <GoldAmount
        title={" موجودی طلا"}
        BoxTitle={" تغییر میزان موجودی  "}
        inputLabel={"گرم"}
        buttonText={"تایید"}
        walletcash ={"  قیمت قبل"}
        />
        

        <Pricedifrences/>
        </>
     );
}
 
export default GoldAmountMain;