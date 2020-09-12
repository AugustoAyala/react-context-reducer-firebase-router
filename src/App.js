import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Login";
import Profile from "./Profile";
import { useStateValue } from "./StateProvider";
import Main from "./Main";

function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div>
      {!user ? (
        <Login />
      ) : (
        <div>
          <Router>
            <Switch>
              <Route path="/">
                <Main />
              </Route>
              <Route path="/profile">
                <Profile />
              </Route>
            </Switch>
          </Router>
        </div>
      )}
    </div>
  );
}

export default App;
