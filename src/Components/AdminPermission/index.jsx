import { Box, Button, Paper, Typography, Grid } from "@mui/material";
import Switch from "@mui/material/Switch";
const AdminPermission = () => {
  return (
    <Paper
      sx={{
        bgcolor: "#272523",
        maxWidth: "500px",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "10px",
        height: "auto",
        py: 1.5,
        px: 2,
      }}
    >
      <Switch
        defaultChecked
        sx={{
          "& .MuiButtonBase-root ": {
            color: "#FFC436 !important",
          },
        }}
      />
      <Typography
        whiteSpace="nowrap"
        color="green"
        fontWeight="bold"
        fontFamily="Yekan"
        variant="h6"
      >
        اجازه ی خرید و فروش
      </Typography>
    </Paper>
  );
};

export default AdminPermission;
