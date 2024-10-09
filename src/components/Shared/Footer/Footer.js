import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faGooglePlusG, faTwitter } from "@fortawesome/free-brands-svg-icons"
const Footer = () => {
    return (
        <div className="mb-1" style={{ backgroundColor:"#29B2DC"}}>
            <div className="d-flex justify-content-center mx-5 px-5 mt-5 pt-5 ">
                <div className="w-100 ms-5 row my-5">
                    <div style={{borderRight:"2px solid navy"}} className="col-md-3 ">
                        <p>Emergency Services</p>
                        <p>Diagnosis</p>
                        <p>New and Old Services</p>
                        <p>Construction </p>
                        <p>Satisfection</p>
                    </div>
                    <div style={{ borderRight: "2px solid navy" }} className="col-md-3">
                        <h6>Services</h6>
                        <p>Water Line </p>
                        <p>Electric Line</p>
                        <p>Gas Line Lickage</p>
                        <p>Household</p>
                        <p>House Cleaning</p>
                    </div>
                    <div style={{ borderRight: "2px solid navy" }} className="col-md-3">
                        <h6>Planting</h6>
                        <p>Emergency Condition</p>
                        <p>Construction</p>
                        <p>Faulty Electric Line</p>
                        <p>Household Maintainence</p>
                        <p>Staircase Construction</p>
                    </div>
                    <div className="col-md-3">
                        <h6>Our Address</h6>
                        <p>NW,10101010</p>
                        <p>Hudson Yards</p>
                        <div className="my-3">
                            <FontAwesomeIcon className="mr-3" size="2x" icon={faFacebook}></FontAwesomeIcon>
                            <FontAwesomeIcon className="mx-3" size="2x" icon={faGooglePlusG}></FontAwesomeIcon>
                            <FontAwesomeIcon size="2x" icon={faTwitter}></FontAwesomeIcon>
                        </div>
                        <p>Call Now</p>
                        <button className="btn btn-light">+12345456</button>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-center mt-2 pt-2">
                <p>All Right Reserved @2021</p>
            </div>
        </div>
    );
};

export default Footer;