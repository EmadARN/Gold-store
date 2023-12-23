import React from "react";
import Transaction from "./Transaction";
import TransactionGold from "./TransactionGold";
import { Box, Typography } from "@mui/material";

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
        <Box sx={{ display: "flex", justifyContent: "center", color: "#fff" }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
                  fontFamily:"Yekan",
                  fontSize:{xs:"26px",md:'40px'},
              mb: 2,
            }}
          >
            واریز
          </Typography>
          <Typography variant="h4" sx={{ px: 2 , fontFamily:"Yekan", fontSize:{xs:"26px",md:'40px'}}}>
            و
          </Typography>
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              fontFamily:"Yekan",
              fontSize:{xs:"26px",md:'40px'},
              textAlign: "center",
              mb: 2,
            }}
          >
            برداشت وجه
          </Typography>
        </Box>
        <Transaction
          depositToken={depositToken}
          withdrawToken={withdrawToken}
        />
      </Box>
      <Box sx={{ my: 6 }}>
        <Typography
          variant="h5"
          sx={{
            color: "#fff",
            fontWeight: "bold",
            fontFamily:"Yekan",
            textAlign: "center",
            mb: 2,
          }}
        >
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
