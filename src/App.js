import LoginPage from './LoginPage';
import MainPage from './MainPage';
import GpaScore from './gpaScore';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
export default function App() {
  return (
    /** 
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    */
   <>
   <Router>
    
     <Switch>
       <Route path = "/mainpage">
           <MainPage/>
       </Route>
       <Route path = "/gpaScore">
         <GpaScore/>
       </Route>
       <Route path =  "/">
         <LoginPage/>
       </Route>
     </Switch>
   </Router>
   </>
  );
}

