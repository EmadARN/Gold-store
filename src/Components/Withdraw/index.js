import React from "react";
import Withdraw from "./Withdraw";

const WithdrawList = ({WalletData}) => {
  return (
    <div>
      <Withdraw 
      WalletData={WalletData}
      title={"برداشت"}
      BoxTitle={"مبلغ را وارد کنید"}
      inputLabel={"ریال"}
      buttonText={"برداشت"}
      walletcash ={"موجودی کیف پول"}
      
      />
    </div>
  );
};

export default WithdrawList;
