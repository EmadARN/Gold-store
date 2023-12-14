
import WithdrawAdmin from "./WithdrawAdmin";
const AddingPrice = ({ settingData }) => {
  return (
    <WithdrawAdmin
      title={"قیمت گذاری"}
      BoxTitle={"قیمت را وارد کنید"}
      inputLabel={"ریال"}
      buttonText={"تایید"}
      walletcash={"  قیمت قبل"}
      walletValue={settingData.sale_price}
    />
  );
};

export default AddingPrice;
