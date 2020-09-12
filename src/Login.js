import React from "react";
import { Button } from "@material-ui/core";
import { auth, provider } from "./firebase";
import { actionTypes } from "./reducer";
import { useStateValue } from "./StateProvider";
import "./login.css";

function Login() {
  const [{}, dispatch] = useStateValue();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="container">
      <div className="login">
        <div>
          <h1>Sing in </h1>
        </div>
        <Button variant="outlined" color="primary" onClick={signIn}>
          Sign In
        </Button>
      </div>
    </div>
  );
}

export default Login;
