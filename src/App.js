import React, { useState } from 'react'
import './App.css';
import Alert from './Components/Alert';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); // wherther dark mode is  enable or not 
  const [alert, setAlert] = useState(null);

  const showAleart = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = "black";
      showAleart("Dark mode has been enabled", "success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = "white";
      showAleart("Light mode has been enabled", "success");
    }
  }
  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container mt-4">
          <Routes>
          {/* exact : to render excat match URL endpoint */}
            <Route exact path="/about" element={<About/>}/>
            <Route excat path="/" element={<TextForm heading="Enter the text to analyze below" mode={mode} showAleart={showAleart} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
