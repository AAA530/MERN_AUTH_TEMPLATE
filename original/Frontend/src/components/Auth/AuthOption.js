import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

function AuthOption() {
  const history = useHistory();
  const { userData, setUserData } = useContext(UserContext);

  const register = () => history.push("/register");
  const login = () => history.push("/login");
  const logout = () => {
    setUserData({
      token: undefined,
      user: undefined,
    });
    localStorage.setItem("auth-token", "");
    history.push("/login");
  };

  console.log(userData);

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
      {userData.token ? (
        <Button color="inherit" onClick={logout}>
          Logout
        </Button>
      ) : (
        <>
          <Button color="inherit" onClick={register}>
            Register
          </Button>
          <Button color="inherit" onClick={login}>
            Login
          </Button>
        </>
      )}
    </>
  );
}

export default AuthOption;
