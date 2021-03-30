import './App.css';
import Main from './components/main';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NotFound from './components/NotFound';


function App() {
  return (
    <Router>
    <Switch>
      <Route exact path="./" component={Main} />
      <Route component={NotFound} />
    </Switch>
  </Router>
  );
}

export default App;
