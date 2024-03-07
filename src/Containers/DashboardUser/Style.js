import { styled, useTheme } from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
export const BoxMain = styled("div")(({ theme }) => ({
  display: "flex",
  height: "100vh",
}));

export const BtnMenu = styled("div")(({ theme }) => ({
  paddingLeft: 30,
  paddingRight: 30,
  paddingBottom: 5,
  paddingTop: 5,
  borderRadius: "4px",
  backgroundColor: "#FFC436",
  color: "#000",
  fontSize: "20px",
  fontWeight: "bolder",
  boxShadow:
    "rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px",
  transition: "all 1s ease",
  "&:hover": {
    px: 6,
    backgroundColorr: "#FFC436",
    opacity: "0.8",
    boxShadow:
      "#FFC436 0px 2px 30px,#FFC436 0px 7px 90px -3px,#FFC436 0px -3px 30px ",
  },
}));

export const Toolbar = {
  display: "flex",
  justifyContent: "space-between",
};

export const icon_button = (open) => {
  const S1 = {
    mr: 2,
    ...(open && {
      display: "flex",
      opacity: "0",
      cursor: "auto",
    }),
  };

  return S1;
};

export const typo_box = {
  display: "flex",
  alignItems: "center",
  pr: { xs: 1, md: 10 },
};

export const typo_name = {
  pr: 2,
  whiteSpace: "nowrap",
};

export const drawer_style = (drawerWidth) => {
  const S2 = {
    width: drawerWidth,
    flexShrink: 0,

    "& .MuiDrawer-paper": {
      width: drawerWidth,
      boxSizing: "border-box",
      bgcolor: "#272523",
    },
  };
  return S2;
};

export const hossein_gold_typo = {
  color: "#FFC436",
  textAlign: "center",
  pt: 1,
  fontSize: { xs: "26px", md: "35px" },
};


export const  link_style ={
    textDecoration: "none",
    width: "100%",
}


export const button_name =(index,indexBtn )=>{
    const S4 ={
        bgcolor: index + 1 === indexBtn ? "#FFC436" : null,
        color: index + 1 == indexBtn ? "#000" : "#fff",
        width: "100%",
        display: "flex",
        justifyContent: "start",
        pl: 2,
        py: 1,
        fontSize: "20px",
        fontWeight: "bold",
        borderRadius: "0",
        "&:hover": {
          bgcolor: "#FFC436",
          color: "#000",
          borderRadius: "0",
        },
    }
    return S4
}


export const list_item_text ={
    pl: 1,
    "& .MuiTypography-root": {
      fontSize: "20px",
      fontWeight: "bold",
    },
}


export const main_style =(open,drawerWidth) =>{
    const S5 = {
        flexWrap: "wrap",
        ...(open && {
          width: `calc(50% - ${drawerWidth}px)`,
          position: { xs: "absolute", sm: "static" },
        }),
    }

    return S5
}

export const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
    ({ theme, open,drawerWidth,children }) => ({
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: `-${drawerWidth}px`,
      ...(open && {
        transition: theme.transitions.create("margin", {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
      }),
    })
  );


 export const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
  })(({ theme, open,drawerWidth }) => ({
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: `${drawerWidth}px`,
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));


  export const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  }));