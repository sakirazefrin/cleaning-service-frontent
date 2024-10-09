import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import Carousel from 'react-bootstrap/Carousel'
import "./HeaderMain.css"
import ser1 from "../../../images/ser1.jpg"
import ser2 from "../../../images/ser2.jpg"
import ser3 from "../../../images/ser3.jpg"
import ser4 from "../../../images/ser4.jpg"
import ser5 from "../../../images/ser5.jpg"
import ser6 from "../../../images/ser6.jpg"
import ser7 from "../../../images/ser7.jpg"

const HeaderMain = () => {
    return (
        <div className="mb-5 ">
            <Carousel>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={ser6}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h1 style={{ color:"#FFF001"}}>PERFECTION</h1>
                        <h3 style={{ color: "#FFF001" }}>What We Do ,We Do With Perfection</h3>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={ser2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h1 style={{ color: "#FFF001" }}>SATISFACTION</h1>
                        <h3 style={{ color: "#FFF001" }}>Customers Satisfaction is Our Main Goal</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={ser3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h1 style={{ color: "#FFF001" }}>EXPERT</h1>
                        <h3 style={{ color: "#FFF001" }}>Our Employees Are Best</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={ser4}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h1 style={{ color: "#FFF001" }}>Latest Technology</h1>
                        <h3 style={{ color: "#FFF001" }}>We Use Latest Technology</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={ser5}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h1 style={{ color: "#FFF001" }}>After Sales Service</h1>
                        <h3 style={{ color: "#FFF001" }}>We Provide An Excellent After Sales Service</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                
            </Carousel>
        </div>
    );
};

export default HeaderMain;