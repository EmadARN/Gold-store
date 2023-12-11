import React from "react";
import WithdrawGold from "./WithdrawGold";

const WithdrawGoldList = ({ walletDataToken }) => {
  return (
    <div>
      <WithdrawGold walletDataToken={walletDataToken} />
    </div>
  );
};

export default WithdrawGoldList;
