import './App.css';
import Header from './Components/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Main from './Components/Main/Main';
import LoginForm from './Components/LoginForm/LoginForm';
import Admin from './Components/Admin/Admin';
import Checkout from './Components/Checkout/Checkout';
import { createContext, useState } from 'react';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Orders from './Components/Orders/Orders';

export const userContext = createContext();

function App() {

  const [loggedIn, setLoggedIn] = useState({
    name: '',
    email: '',
    imgURL: ''
  });

  return (
    <userContext.Provider value={[loggedIn, setLoggedIn]} >
      <Router>
        <Header />

        <Switch>
          <Route exact path="/">
            <Main />
          </Route>

          <Route path="/home">
            <Main />
          </Route>

          <PrivateRoute path="/admin">
            <Admin />
          </PrivateRoute>

          <Route path="/login">
            <LoginForm />
          </Route>

          <PrivateRoute path="/checkout/:_id">
            <Checkout />
          </PrivateRoute>

          <PrivateRoute path="/checkout">
            <h1 className="dirChk">
              Order From HOME Page.....
            </h1>
          </PrivateRoute>
          <PrivateRoute path="/orders">
            <Orders />
          </PrivateRoute>
        </Switch>

      </Router>
    </userContext.Provider>
  );
}

export default App;
