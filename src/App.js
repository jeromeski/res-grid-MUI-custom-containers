import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import "./styles.css";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  mainContainer: {
    maxWidth: 1140,
    width: "100%",
    paddingRight: "-15px",
    paddingLeft: "-15px",
    marginRight: "auto",
    marginLeft: "auto",
    height: "100%"
  },
  rowContainer: {
    display: "flex",
    flexWrap: "wrap",
    marginRight: "-15px",
    marginLeft: "-15px",
    alignContent: "center",
    [theme.breakpoints.down("md")]: {
      height: "100%",
      alignContent: "baseline"
      // alignItems: 'center'
    }
  },
  colContainer: {
    position: "relative",
    width: "100%",
    paddingRight: "15px",
    paddingLeft: "15px",
    paddingBottom: "20px"
  },
  heading: {
    fontWeight: 700,
    position: "relative",
    paddingBottom: 15,
    textTransform: "uppercase",
    "&:before": {
      content: '""',
      position: "absolute",
      left: 0,
      top: "auto",
      bottom: 0,
      height: "5px",
      borderRadius: "100px",
      width: "100px",
      background: "rgba(3,127,255,.3)",
      margin: 0,
      padding: 0,
      boxSizing: "border-box"
    },
    "&:after": {
      content: '""',
      position: "absolute",
      left: 0,
      top: "auto",
      bottom: 0,
      height: "5px",
      borderRadius: "100px",
      width: "35px",
      background: "#037fff"
    }
  },
  headingBackdrop: {
    fontFamily: theme.typography.h2,
    position: "absolute",
    left: 0,
    top: "100%",
    fontSize: "6rem",
    lineHeight: 1,
    fontWeight: 900,
    color: "rgba(25,29,43,.44)",
    display: "inline-block",
    textTransform: "uppercase",
    zIndex: "-1",
    transform: "translateY(-40%)",
    userSelect: "none",
    whiteSpace: "nowrap"
  }
}));

export default function App() {
  const classes = useStyles();
  return (
    <Grid style={{ height: "100vh" }}>
      <Grid container className={classes.mainContainer} alignContent="center">
        <Grid style={{ position: "relative", zIndex: 1, marginBottom: "60px" }}>
          <Typography variant="h3" className={classes.heading}>
            PORTFOLIOS
          </Typography>
          <span className={classes.headingBackdrop}>PORTFOLIOS</span>
        </Grid>
        <Grid container direction="row" className={classes.rowContainer}>
          <Grid item lg={4} md={6} sm={6} className={classes.colContainer}>
            <img alt="" src="https://via.placeholder.com/370x279" />
          </Grid>
          <Grid item lg={4} md={6} sm={6} className={classes.colContainer}>
            <img alt="" src="https://via.placeholder.com/370x279" />
          </Grid>
          <Grid item lg={4} md={6} sm={6} className={classes.colContainer}>
            <img alt="" src="https://via.placeholder.com/370x279" />
          </Grid>
          <Grid item lg={4} md={6} sm={6} className={classes.colContainer}>
            <img alt="" src="https://via.placeholder.com/370x279" />
          </Grid>
          <Grid item lg={4} md={6} sm={6} className={classes.colContainer}>
            <img alt="" src="https://via.placeholder.com/370x279" />
          </Grid>
          <Grid item lg={4} md={6} sm={6} className={classes.colContainer}>
            <img alt="" src="https://via.placeholder.com/370x279" />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
