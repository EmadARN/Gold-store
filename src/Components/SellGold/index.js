import React from "react";
import SellGold from "./SellGold";

const SellGoldList = ({ walletDataToken, goldStockPrice }) => {
  return (
    <div>
      <SellGold
        walletDataToken={walletDataToken}
        goldStockPrice={goldStockPrice}
      />
    </div>
  );
};

export default SellGoldList;
