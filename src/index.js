import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import {BrowserRouter} from "react-router-dom";
//import App from "./App.jsx";
//import Clocktik from "./Clocktik.jsx";
//import "./index.css";
// import {BrowserRouter} from "react-router-dom";
 import "./index.css";
//const name = "Abhishek";

ReactDOM.render(
<>
    <BrowserRouter>
        <App/>
    </BrowserRouter>
</>
,document.getElementById('root'));
