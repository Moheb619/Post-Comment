import React from "react";
import { AppBar, Toolbar, CssBaseline, Typography, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(10),
    display: "flex",
  },
  logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  img: {
    height: "10%",
    width: "10%",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginLeft: theme.spacing(20),
    "&:hover": {
      color: "yellow",
      borderBottom: "1px solid white",
    },
  },
}));

function Navbar() {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <CssBaseline />
      <Toolbar>
        <Typography variant="h4" className={classes.logo}>
          <img className={classes.img} src="https://cdn.pixabay.com/photo/2015/10/07/12/17/post-976115_1280.png" alt="" />
        </Typography>
        <div className={classes.navlinks}>
          <Link to="/post" className={classes.link}>
            Post
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;
