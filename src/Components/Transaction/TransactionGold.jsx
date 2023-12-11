import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";
import * as locales from "@mui/material/locale";
import { AppBar, Box, Container, Tab, Tabs } from "@mui/material";
import SwipeableViews from "react-swipeable-views";

const columns = [
  { id: "name", minWidth: 130 },
  { id: "price", label: "مبلغ", minWidth: 100 },
  { id: "weight", label: "گرم", minWidth: 100 },
  {
    id: "history",
    label: "تاریخ",
    minWidth: 100,
    align: "Center",
    format: (value) => value.toLocaleString("en-US"),
  },
];
const columnsHistore = [
  { id: "name", minWidth: 130 },
  { id: "weight", label: "گرم", minWidth: 100 },
  {
    id: "history",
    label: "تاریخ",
    minWidth: 100,
    align: "Center",
    format: (value) => value.toLocaleString("en-US"),
  },
];
function createData(name, price, weight, history) {
  return { name, price, weight, history };
}

const rowsBuyGold = [createData("خرید طلا", "11,111,111", 500, "1399/05/15 ")];
const rowsSellGold = [createData("فروش طلا", "3,331,311", 1000, "1399/05/15 ")];
const rowsWithdrawGold = [createData("برداشت طلا", 1000, "1399/05/15 ")];
function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}
export default function TransactionGold() {
  const [locale, setLocale] = React.useState("faIR");
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleChangeIndex = (index) => {
    setValue(index);
  };
  const theme = useTheme();

  const themeWithLocale = React.useMemo(
    () => createTheme(theme, locales[locale]),
    [locale, theme]
  );
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <ThemeProvider theme={themeWithLocale}>
      <Container maxWidth={"md"}>
        <AppBar position="static" sx={{ borderRadius: "10px 10px 0 0 " }}>
          <Tabs
            sx={{
              bgcolor: "#3C3A36",

              width: { xs: "100%", md: "100%" },
              borderRadius: "10px 10px 0 0 ",
              "& .MuiButtonBase-root": {
                color: "#FFC436",
                fontSize: "20px",
                fontWeight: "bold",
              },
            }}
            value={value}
            onChange={handleChange}
            indicatorColor="#FFC436"
            textColor="inherit"
            variant="fullWidth"
            aria-label="full width tabs example"
          >
            <Tab label="خرید" {...a11yProps(0)} />
            <Tab label="فروش" {...a11yProps(1)} />
            <Tab label="برداشت" {...a11yProps(2)} />
          </Tabs>
        </AppBar>
        <Paper
          sx={{
            width: "100%",
            display: "grid",
            placeItems: "center",
            overflow: "hidden",
          }}
        >
          <TableContainer
            sx={{
              maxHeight: 440,
              bgcolor: "#272523",
              color: "#fff",
            }}
          >
            <SwipeableViews index={value} onChangeIndex={handleChangeIndex}>
              <Box>
                <Table
                  stickyHeader
                  aria-label="sticky table"
                  sx={{ direction: "ltr" }}
                >
                  <TableHead>
                    <TableRow>
                      {columns.map((column) => (
                        <TableCell
                          sx={{ bgcolor: "#272523", color: "#fff" }}
                          key={column.id}
                          align={column.align}
                          style={{ minWidth: column.minWidth }}
                        >
                          {column.label}
                        </TableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rowsBuyGold
                      .slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                      .map((row) => {
                        return (
                          <TableRow
                            hover
                            role="checkbox"
                            tabIndex={-1}
                            key={row.code}
                          >
                            {columns.map((column) => {
                              const value = row[column.id];
                              return (
                                <TableCell
                                  key={column.id}
                                  align={column.align}
                                  sx={{ color: "#fff" }}
                                >
                                  {column.format && typeof value === "number"
                                    ? column.format(value)
                                    : value}
                                </TableCell>
                              );
                            })}
                          </TableRow>
                        );
                      })}
                  </TableBody>
                </Table>
                <TablePagination
                  sx={{
                    bgcolor: "#272523",
                    width: "100%",
                    color: "#fff",
                    "& .MuiButtonBase-root, .MuiSvgIcon-root ": {
                      color: "#fff",
                    },
                    direction: "ltr",
                  }}
                  rowsPerPageOptions={[10, 25, 100]}
                  component="div"
                  count={rowsBuyGold.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                />
              </Box>
              <Box>
                <Table
                  stickyHeader
                  aria-label="sticky table"
                  sx={{ direction: "ltr" }}
                >
                  <TableHead>
                    <TableRow>
                      {columns.map((column) => (
                        <TableCell
                          sx={{ bgcolor: "#272523", color: "#fff" }}
                          key={column.id}
                          align={column.align}
                          style={{ minWidth: column.minWidth }}
                        >
                          {column.label}
                        </TableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rowsSellGold
                      .slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                      .map((row) => {
                        return (
                          <TableRow
                            hover
                            role="checkbox"
                            tabIndex={-1}
                            key={row.code}
                          >
                            {columns.map((column) => {
                              const value = row[column.id];
                              return (
                                <TableCell
                                  key={column.id}
                                  align={column.align}
                                  sx={{ color: "#fff" }}
                                >
                                  {column.format && typeof value === "number"
                                    ? column.format(value)
                                    : value}
                                </TableCell>
                              );
                            })}
                          </TableRow>
                        );
                      })}
                  </TableBody>
                </Table>
                <TablePagination
                  sx={{
                    bgcolor: "#272523",
                    width: "100%",
                    color: "#fff",
                    "& .MuiButtonBase-root, .MuiSvgIcon-root ": {
                      color: "#fff",
                    },
                    direction: "ltr",
                  }}
                  rowsPerPageOptions={[10, 25, 100]}
                  component="div"
                  count={rowsSellGold.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                />
              </Box>
              <Box>
                <Table
                  stickyHeader
                  aria-label="sticky table"
                  sx={{ direction: "ltr" }}
                >
                  <TableHead>
                    <TableRow>
                      {columnsHistore.map((column) => (
                        <TableCell
                          sx={{ bgcolor: "#272523", color: "#fff" }}
                          key={column.id}
                          align={column.align}
                          style={{ minWidth: column.minWidth }}
                        >
                          {column.label}
                        </TableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rowsWithdrawGold
                      .slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                      .map((row) => {
                        return (
                          <TableRow
                            hover
                            role="checkbox"
                            tabIndex={-1}
                            key={row.code}
                          >
                            {columns.map((column) => {
                              const value = row[column.id];
                              return (
                                <TableCell
                                  key={column.id}
                                  align={column.align}
                                  sx={{ color: "#fff" }}
                                >
                                  {column.format && typeof value === "number"
                                    ? column.format(value)
                                    : value}
                                </TableCell>
                              );
                            })}
                          </TableRow>
                        );
                      })}
                  </TableBody>
                </Table>
                <TablePagination
                  sx={{
                    bgcolor: "#272523",
                    width: "100%",
                    color: "#fff",
                    "& .MuiButtonBase-root, .MuiSvgIcon-root ": {
                      color: "#fff",
                    },
                    direction: "ltr",
                  }}
                  rowsPerPageOptions={[10, 25, 100]}
                  component="div"
                  count={rowsWithdrawGold.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                />
              </Box>
            </SwipeableViews>
          </TableContainer>
        </Paper>
      </Container>
    </ThemeProvider>
  );
}
