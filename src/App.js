import Login from './components/login/Login'
import Register from './components/register/Register';
import Admin from './components/admin/Admin';
import Portal from './components/portal/Portal';
import Candidates from './components/candidates/Candidates';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">
        
        <Switch>
          <Route path='/admin'>
            <Admin />
          </Route>
          <Route path='/candidate'>
            <Candidates />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/portal">
            <Portal />
          </Route>

          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
