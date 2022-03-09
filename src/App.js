//import logo from './logo.svg';
//import './App.css';
import React,{ useState } from "react";
// import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import Contact from "./components/Contact";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');//whether dark mode is unable or not.
  const [alert, setAlert] = useState(null);//whether dark mode is unable or not.

 
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    }, 1500)
    }
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.background = '#042743';
      showAlert("Dark mode has been enabled","Success");
      //document.title = "TextUtils-Dark mode";
    }
    else{
      setMode('light');
      document.body.style.background = 'white';
      showAlert("Light mode has been enabled","success ");
     //document.title = "TextUtils-Light mode";
    }
  }
   return (
     <>
     {/* <Router> */}
    <Navbar title = "TextUtils" mode={mode} toggleMode={toggleMode} About = "About Us" Contact = "Contact"/>
    <Alert alert={alert}/>
    {/* <div className="container mb-3">
    <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
          </Route>
          <Route exact path="/contact">
          <Contact/> 
          </Route>
        </Switch>
        </div>
        </Router>
         */
    
   }
    <TextForm showAlert={showAlert} heading = "Enter text to analyze" mode={mode}/> 
         
  </>
   );
}
export default App;
