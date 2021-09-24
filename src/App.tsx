import Animal from './pages/Animal';
import Career from './pages/Career';
import Celebrity from './pages/Celebrity';
import Home from './pages/Home'; 
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Navigation from './components/Navigation';


function App() {

  return (
    <div className="App">
      <Router>
      <Navigation />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/animal" component={Animal}></Route>
          <Route exact path="/career" component={Career}></Route>
          <Route exact path="/celebrity" component={Celebrity}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
