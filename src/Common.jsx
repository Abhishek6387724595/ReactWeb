import React from 'react';
import { NavLink } from 'react-router-dom';
import web from "../src/images/saasimage.jpg"

const Common = (props) =>{
    return(
        <>
        <div id="header" className="d-flex align-items-center">
        <div className="container-fluid nav_bg">
            <div className="row">
                <div className="col-10 mx-auto">
                  <div className="row">

                    <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                        <h1>{props.name}<strong className="brand-name">AbhiAwasthi</strong></h1>
                        <h3 className="my-3">
                            We are the team of Web Developers
                        </h3>
                        <div className="mt-3">
                            <NavLink to={props.visit} className="btn-get-started">{props.btname}</NavLink>
                        </div>
                    </div>

                    <div className="col-lg-6 order-1 oredr-lg-2 header-img">
                        <img src={props.imgsrc} className="img-fluid animated" alt="photooo"/>
                    </div>

                  </div>
                </div>
            </div>
        </div>
        </div>
        </>
    );
};
export default Common;