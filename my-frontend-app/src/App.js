// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch,Redirect } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import { GlobalProvider } from './context/globalContext'; // Import the GlobalProvider
import StartPage from './components/StartPage/StartPage';

function App() {
  return (
    <Router>
      <Switch>
        {/* Make sure GlobalProvider wraps the entire application */}
          <Route exact path="/home" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/startpage" component={StartPage}/>
          <Redirect to="/startpage" /> 
    
      </Switch>
    </Router>
  );
}

export default App;
