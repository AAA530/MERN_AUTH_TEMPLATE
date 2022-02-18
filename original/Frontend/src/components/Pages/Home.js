import React, { useEffect, useContext, useState } from "react";
import { useHistory } from "react-router-dom";

// importing Material ui components
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import { UserContext } from "../../Context/UserContext";

function Home() {
  const { userData } = useContext(UserContext); //getting Data form UserContext
  const [loading, setLoading] = useState(true);
  const history = useHistory();

  //Checking if User is Logged in , if not then send him to login page
  useEffect(() => {
    if (!userData.user) history.push("/login");
    setLoading(false);
  });

  return (
    <>
      {loading ? (
        <p>Loading</p>
      ) : (
        <Grid xs="12">
          <Typography align="center" variant="h4" gutterBottom>
            Wellcome {userData.user.email}
          </Typography>
        </Grid>
      )}
    </>
  );
}

export default Home;
