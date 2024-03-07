import React from "react";
import { DataGrid, faIR } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import Paper from "@mui/material/Paper";
import { Container, Typography } from "@mui/material";
import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";
import { columns } from "./Utils/Columns";
import { DataGridStyle } from "./Style";

const TransactionComponent = ({ transactionList }) => {
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
      <Box display="flex" justifyContent="center" sx={{ mt: 6 }}>
        <Typography color="#fff" variant="h3" fontFamily="Yekan" mb={3}>
          تراکنش ها
        </Typography>
      </Box>

      <ThemeProvider theme={theme}>
        <Container sx={{ mt: 5 }}>
          <Paper sx={DataGridPaper}>
            <DataGrid
              sx={DataGridStyle}
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

export default TransactionComponent;
