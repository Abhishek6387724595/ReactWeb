import React from 'react';
import { NavLink } from 'react-router-dom';
import web from "../src/images/moon.jpg"
import SSdata from "./SSdata.jsx";

const Card = (props) =>{
    return(
        <>
            <div className="col-md-4 col-10 shadow-4 grow bg-light-purple mx-auto">
                <div className="card">
                        <div className="inner shadow-4 grow"><img src={props.imgsrc} className="img-fluid card-img-top" alt="error"/></div>
                        <div className="card-body ">
                            <h5 className="card-title font-weight-bold">{props.title}</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <NavLink to="#" className="btn btn-primary">Go somewhere</NavLink>
                        </div>
                </div>
            </div>
        </>
    );
};
export default Card;



