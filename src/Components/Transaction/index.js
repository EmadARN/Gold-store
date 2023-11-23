import React from "react";
import Transaction from "./Transaction";
import TransactionGold from "./TransactionGold";
import { Box, Typography } from "@mui/material";

export const TransactionList = () => {
  return (
    <div>
      <Box sx={{ my: 4 }}>
        <Box
          sx={{ display: "flex", justifyContent: "center", color: "#FFC436" }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",

              mb: 2,
            }}
          >
            واریز
          </Typography>
          <Typography variant="h4" sx={{ px: 2 }}>
            و
          </Typography>
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",

              textAlign: "center",
              mb: 2,
            }}
          >
            برداشت
          </Typography>
        </Box>
        <Transaction />
      </Box>
      <Box sx={{ my: 6 }}>
        <Typography
          variant="h5"
          sx={{
            color: "#FFC436",
            fontWeight: "bold",

            textAlign: "center",
            mb: 2,
          }}
        >
          خرید و فروش (طلا)
        </Typography>
        <TransactionGold />
      </Box>
    </div>
  );
};
