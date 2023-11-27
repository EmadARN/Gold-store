import Withdraw from "../Withdraw/Withdraw";
const AddingPrice = () => {
    return ( 
        <Withdraw
        title={"قیمت گذاری"}
        BoxTitle={"قیمت را وارد کنید"}
        inputLabel={"ریال"}
        buttonText={"تایید"}
        walletcash ={"  قیمت قبل"}
        />
     );
}
 
export default AddingPrice;