import Login from './components/Login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
          <Route exact path='/' component={Login}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
