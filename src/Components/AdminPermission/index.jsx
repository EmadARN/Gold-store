import { Box, Button, Paper, Typography, Grid } from "@mui/material";
import Switch from "@mui/material/Switch";
const AdminPermission = () => {
  return (
    <Grid
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
     
      }}
    >
      <Grid

      >
        <Paper
          sx={{
            bgcolor: "#272523",
            width: "100%",

            borderRadius: "10px",
            height: "100%",
            px: 6,
          }}
        >
          <Grid
            item
            display="flex"
            justifyContent="center"
            alignItems="center"
            direction="ltr"
            padding="20px 0"
            flexDirection="column"
          >
            <Box mb={4} display="flex">
              <Switch defaultChecked />
              <Typography
                color="green"
                fontWeight="bold"
                fontFamily="Yekan"
                variant="h6"
              >
                اجازه ی خرید
              </Typography>
            </Box>

            <Box display="flex">
              <Switch defaultChecked />
              <Typography
                color="red"
                fontWeight="bold"
                fontFamily="Yekan"
                variant="h6"
              >
                اجازه ی فروش
              </Typography>
            </Box>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default AdminPermission;
