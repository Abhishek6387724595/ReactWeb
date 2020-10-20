import React from 'react';
import { NavLink } from 'react-router-dom';
import about from "../src/images/about.jpg"
import Common from "./Common";

const About = () =>{
    return(
        <>
            <Common 
            name="Welcome to Home Page " 
            imgsrc={about} 
            //style={{backgroundColor:"white"}}
            visit="/contact" 
            btname="Contact Now"/>
        </>
    );
};
export default About;