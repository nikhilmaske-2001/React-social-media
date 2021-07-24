import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {
  const {user} = useContext(AuthContext);
  return(
    // Using Router to switch between pages
    <Router>
      <Switch>
        {/* Using 'exact' to remove the confusion between '/' & 'xyz'. Removing it results into not working of other pages */}
        <Route exact path = "/">
          {user ? <Home/>: <Register/>}
        </Route>
        <Route path = "/login">
          {user ? <Redirect to="/"/> : <Login/>}
        </Route>
        <Route path = "/profile/:username">
          <Profile/>
        </Route>
        <Route path = "/register">
        {user ? <Redirect to="/"/> : <Login/>}
          <Register/>
        </Route>
      </Switch>
    </Router>  
  );
}

export default App;
