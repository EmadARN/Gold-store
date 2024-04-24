import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { Box, Container, Grid } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { FaqsOb, FaqsOb2 } from "./Utils/FaqsObjects";
import {TypoOneSx, TypoThreeSx, TypoTitle, TypotwoSx} from "@/Components/Faqs/Style";

const Accordion = styled((props) => (
  <MuiAccordion
    style={{ backgroundColor: "#f1f1f1", borderRadius: "11px" }}
    elevation={0}
    square
    {...props}
  />
))(({ theme }) => ({
  marginTop: "10px",
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={
      <ExpandMoreIcon
        sx={{
          fontSize: "25px",
          color: "#fff",
          margin: "10px",
        }}
      />
    }
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark" ? "rgba(199,195,139,0.95)" : "#272523",
  color: "#fff",
  borderRadius: "1px",

  "&:hover": {
    backgroundColor: "#FFC436",
    color: "#030f27",
  },
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(180deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  border: "1px solid #fff",
}));

function Faqs() {
  const [expanded, setExpanded] = React.useState("");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Container maxWidth={"xl"} sx={{ mb: 6 }}>
      <Box>
        <Typography
          sx={TypoOneSx}
        >
          سوالات متداول
        </Typography>
      </Box>
      <Grid container mt={8} spacing={1}>
        <Box>
          <Typography
            sx={TypotwoSx}
          >
            درباره طلای آب شده
          </Typography>
        </Box>
        <Grid item xs={12} md={12} sx={{}}>
          {FaqsOb.map((accordian) => {
            return (
              <Accordion
                expanded={expanded === accordian.panel}
                onChange={handleChange(accordian.panel)}
              >
                <AccordionSummary>
                  <Typography sx={TypoTitle}>{accordian.title}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography
                   
                    sx={TypoThreeSx}
                  >
                    {accordian.description}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            );
          })}
        </Grid>
        <Grid item xs={12} sm={12} md={12} sx={{ mt: 5 }}>
          <Box>
            <Typography
              sx={TypotwoSx}
            >
              درباره سامانه
            </Typography>
          </Box>
          {FaqsOb2.map((accordian) => {
            return (
              <Accordion
                expanded={expanded === accordian.panel}
                onChange={handleChange(accordian.panel)}
              >
                <AccordionSummary>
                  <Typography variant="h5">{accordian.title}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography
                    variant="h6"
                    sx={TypoThreeSx}
                  >
                    {accordian.description}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            );
          })}
        </Grid>
      </Grid>
    </Container>
  );
}

export default Faqs;
