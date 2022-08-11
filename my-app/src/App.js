import React, { useState } from "react";
import "./App.css";
import About from './Components/About';
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import Alert from "./Components/Alert";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
        setAlert(null);
    }, 2000);
}

const toggleMode = ()=>{
  if(mode === 'light'){
    setMode('dark');
    document.body.style.backgroundColor = '#042743';
    showAlert("Dark mode has been enabled", "success");
    document.title='TextUtils - Dark Mode';
  }
  else{
    setMode('light');
    document.body.style.backgroundColor = 'white';
    showAlert("Light mode has been enabled", "success");
    document.title='TextUtils - Light Mode';
  }
}
  return (
    <>
    <Router>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} key={new Date()} />
    <Alert alert={alert}/>
    <div className="container my-3">
    <Routes>
          <Route path="/about" element={<About mode={mode}/>}>
          </Route>
          <Route path="/" element={<TextForm heading="Enter text to analyze"  mode={mode} showAlert={showAlert}/>}>
          </Route>
    </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;


// <>
//     <Router>
//     <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} key={new Date()} />
//     <Alert alert={alert}/>
//     <div className="container my-3">
//     <Switch>
//           <Route exact path="/about">
//             <About mode={mode} />
//           </Route>
//           <Route exact path="/">
//             <TextForm showAlert={showAlert} heading="Try TextUtils - word counter, character counter, remove extra spaces" mode={mode}/>
//           </Route>
//     </Switch>
//     </div>
//     </Router>
//     </> 
