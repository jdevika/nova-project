import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Appointments from './Components/Appointments';
import Requests from './Components/Requests';
import{
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

export default class App extends Component{
  constructor(props) {
    super(props);
}
  render(){
    return (
      <div className="App" >
         <Router>
              <Header/>
              <Switch>
                <Route exact path="/">
                  <Home/>
                </Route>
                <Route path="/appointments">
                  <Appointments/>
                </Route>
                <Route path="/requests">
                  <Requests/>
                </Route>           
              </Switch>
          </Router>
      </div>
    );
  }
  
}

