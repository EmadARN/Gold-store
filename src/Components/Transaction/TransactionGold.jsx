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
import { columnsBuy } from "./Utils/ColumnsGold";
import { columnsSell } from "./Utils/ColumnsGold";
import { columnsWithdraw } from "./Utils/ColumnsGold";
import PropTypes from "prop-types";
import {
  TableCellStyle,
  TableContainerStyle,
  TablepaginationStyle,
  TrancactionPaper,
  TransactionTap,
} from "./Style";
function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <section
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Box>{children}</Box>
        </Box>
      )}
    </section>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function TransactionGold({ buyGold, sellGold, withdrawGold }) {
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
            sx={TransactionTap}
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
        <Paper sx={TrancactionPaper}>
          <TableContainer sx={TableContainerStyle}>
            <CustomTabPanel value={value} index={0}>
              <Box>
                <Table
                  stickyHeader
                  aria-label="sticky table"
                  sx={{ direction: "ltr" }}
                >
                  <TableHead>
                    <TableRow>
                      {columnsBuy.map((column) => (
                        <TableCell
                          sx={TableCellStyle}
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
                    {buyGold
                      .slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                      .map((row, index) => {
                        return (
                          <TableRow
                            hover
                            role="checkbox"
                            tabIndex={-1}
                            key={index}
                          >
                            {columnsBuy.map((column) => {
                              const value = row[column.id];
                              return (
                                <TableCell
                                  key={column.id}
                                  align={column.align}
                                  sx={{ color: "#fff" }}
                                >
                                  {value}
                                </TableCell>
                              );
                            })}
                          </TableRow>
                        );
                      })}
                  </TableBody>
                </Table>
                <TablePagination
                  sx={TablepaginationStyle}
                  rowsPerPageOptions={[10, 25, 100]}
                  component="div"
                  count={buyGold.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                />
              </Box>
            </CustomTabPanel>

            <CustomTabPanel value={value} index={1}>
              <Box>
                <Table
                  stickyHeader
                  aria-label="sticky table"
                  sx={{ direction: "ltr" }}
                >
                  <TableHead>
                    <TableRow>
                      {columnsSell.map((column) => (
                        <TableCell
                          sx={TableCellStyle}
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
                    {sellGold
                      .slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                      .map((row, index) => {
                        return (
                          <TableRow
                            hover
                            role="checkbox"
                            tabIndex={-1}
                            key={index}
                          >
                            {columnsSell.map((column) => {
                              const value = row[column.id];
                              return (
                                <TableCell
                                  key={column.id}
                                  align={column.align}
                                  sx={{ color: "#fff" }}
                                >
                                  {value}
                                </TableCell>
                              );
                            })}
                          </TableRow>
                        );
                      })}
                  </TableBody>
                </Table>
                <TablePagination
                  sx={TablepaginationStyle}
                  rowsPerPageOptions={[10, 25, 100]}
                  component="div"
                  count={sellGold.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                />
              </Box>
            </CustomTabPanel>

            <CustomTabPanel value={value} index={2}>
              {" "}
              <Box>
                <Table
                  stickyHeader
                  aria-label="sticky table"
                  sx={{ direction: "ltr" }}
                >
                  <TableHead>
                    <TableRow>
                      {columnsWithdraw.map((column) => (
                        <TableCell
                          sx={TableCellStyle}
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
                    {withdrawGold
                      .slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                      .map((row, index) => {
                        return (
                          <TableRow
                            hover
                            role="checkbox"
                            tabIndex={-1}
                            key={index}
                          >
                            {columnsWithdraw.map((column) => {
                              const value = row[column.id];
                              return (
                                <TableCell
                                  key={column.id}
                                  align={column.align}
                                  sx={{ color: "#fff" }}
                                >
                                  {value}
                                </TableCell>
                              );
                            })}
                          </TableRow>
                        );
                      })}
                  </TableBody>
                </Table>
                <TablePagination
                  sx={TablepaginationStyle}
                  rowsPerPageOptions={[10, 25, 100]}
                  component="div"
                  count={withdrawGold.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                />
              </Box>
            </CustomTabPanel>
          </TableContainer>
        </Paper>
      </Container>
    </ThemeProvider>
  );
}
