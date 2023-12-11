import React from "react";
import BuyGold from "./BuyGold";

const BuyGoldList = ({ walletDataToken, goldStockPrice }) => {
  return (
    <div>
      <BuyGold
        walletDataToken={walletDataToken}
        goldStockPrice={goldStockPrice}
      />
    </div>
  );
};

export default BuyGoldList;
