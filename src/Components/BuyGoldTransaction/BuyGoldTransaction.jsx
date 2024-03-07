import React from "react";
import { DataGrid, faIR } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import Paper from "@mui/material/Paper";
import { Container, Typography } from "@mui/material";
import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";
import { columns } from "./Utils/Columns";
import { DataGridSx, PaperSx } from "./Style";

const BuyGoldTransaction = ({ transactionList }) => {
  const existingTheme = useTheme();

  const theme = React.useMemo(
    () =>
      createTheme({}, faIR, existingTheme, {
        direction: "rtl",
      }),
    [existingTheme]
  );

  return (
    <>
      <Box display="flex" justifyContent="center" mt={3}>
        <Typography color="#fff" variant="h3" fontFamily="Yekan" mb={3}>
          لیست خرید کاربران
        </Typography>
      </Box>

      <ThemeProvider theme={theme}>
        <Container mt={3}>
          <Paper sx={PaperSx}>
            <DataGrid
              sx={DataGridSx}
              density="comfortable"
              rows={transactionList}
              columns={columns}
              initialState={{
                pagination: {
                  paginationModel: { page: 0, pageSize: 5 },
                },
              }}
              pageSizeOptions={[5, 10]}
            />
          </Paper>
        </Container>
      </ThemeProvider>
    </>
  );
};

export default BuyGoldTransaction;
