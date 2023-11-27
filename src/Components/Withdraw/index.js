import React from "react";
import Withdraw from "./Withdraw";

const WithdrawList = () => {
  return (
    <div>
      <Withdraw 
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
