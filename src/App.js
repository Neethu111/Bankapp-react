//import logo from './logo.svg';
import React from 'react';
import './App.css';
import Login from './Login';
import Home from './Home';
import Register from './Register';
import TransactionHistory from './TransactionHistory';
import Users from './Users';
import {BrowserRouter,Switch,Link,Route } from 'react-router-dom';


class App extends React.Component {
  render(){
  return (
    <BrowserRouter>
    <div className="App">
      <div>
        <Link to="/">Login</Link>
        <Link to="/Home">Home</Link>
        <Link to="/Register">Register</Link>
        <Link to="/Users">Users</Link>
      </div>
      <Switch>
        <Route path="/" exact={true}>
        <Login/>
        </Route>
        <Route path="/Home">
          <Home/>
        </Route>
        <Route path="/Register">
          <Register/>
        </Route>
        <Route path="/TransactionHistory">
          <TransactionHistory/>
        </Route>
        <Route path="/Users">
          <Users/>
        </Route>
      </Switch>
      
    </div>
    </BrowserRouter>
  );
}
}

export default App;
