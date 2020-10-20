import React from 'react';
import {Switch,Route} from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home.jsx";
import About from "./About.jsx";
import Service from "./Service.jsx";
import Contact from "./Contact.jsx";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";

const App = ()=>{
    return(
        <>
        <Navbar/>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/service" component={Service}/>
            <Route exact path="/contact" component={Contact}/>
        </Switch>
        <Footer/>
        </>
    );
};

export default App;