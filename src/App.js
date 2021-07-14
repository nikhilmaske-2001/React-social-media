import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return(
    // Using Router to switch between pages
    <Router>
      <Switch>
        {/* Using 'exact' to remove the confusion between '/' & 'xyz'. Removing it results into not working of other pages */}
        <Route exact path = "/">
          <Home/>
        </Route>
        <Route path = "/login">
          <Login/>
        </Route>
        <Route path = "/profile/:username">
          <Profile/>
        </Route>
        <Route path = "/register">
          <Register/>
        </Route>
      </Switch>
    </Router>  
  );
}

export default App;
