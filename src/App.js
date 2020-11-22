import React from 'react';
// import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import NavBar from './components/navbar';
import Login from './components/login';
class App extends React.Component {

render() {
  return (
        <div>
          <BrowserRouter>
            <Route exact path='/' component={Login}></Route>
            <Route path="/navbar" component={NavBar}></Route>
          </BrowserRouter>
      </div>
  );
}
}

export default App;
