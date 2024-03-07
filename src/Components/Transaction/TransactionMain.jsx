import React from "react";
import Transaction from "./Transaction";
import TransactionGold from "./TransactionGold";
import { Box, Typography } from "@mui/material";
import { BoxMainStyle, SellandBuyStyle, varizStyle } from "./Style";

export const TransactionList = ({
  withdrawToken,
  depositToken,
  buyGold,
  sellGold,
  withdrawGold,
}) => {
  return (
    <div>
      <Box sx={{ my: 4 }}>
        <Box sx={BoxMainStyle}>
          <Typography variant="h4" sx={varizStyle}>
            واریز
          </Typography>
          <Typography
            variant="h4"
            sx={{
              px: 2,
              fontFamily: "Yekan",
              fontSize: { xs: "26px", md: "40px" },
            }}
          >
            و
          </Typography>
          <Typography variant="h4" sx={varizStyle}>
            برداشت وجه
          </Typography>
        </Box>
        <Transaction
          depositToken={depositToken}
          withdrawToken={withdrawToken}
        />
      </Box>
      <Box sx={{ my: 6 }}>
        <Typography variant="h5" sx={SellandBuyStyle}>
          خرید و فروش (طلا)
        </Typography>
        <TransactionGold
          buyGold={buyGold}
          sellGold={sellGold}
          withdrawGold={withdrawGold}
        />
      </Box>
    </div>
  );
};
