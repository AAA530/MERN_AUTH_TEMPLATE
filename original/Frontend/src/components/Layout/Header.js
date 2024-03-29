import React from "react";
import { Link } from "react-router-dom";
import AuthOption from "../Auth/AuthOption";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

function Header() {
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

  const classes = useStyles();
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            IIIT Surat
          </Typography>

          <AuthOption />
          {/* <Button color="inherit">Login</Button> */}
        </Toolbar>
      </AppBar>

      {/* <header id="header">
        <Link className="title" to="/">
          <h1>Template</h1>
        </Link>
        <AuthOption />
      </header> */}
    </>
  );
}

export default Header;
