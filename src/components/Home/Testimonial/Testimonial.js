import React, { useEffect, useState } from 'react';
import Testimony from '../Testimony/Testimony';

const Testimonial = () => {
    const [services,setServices] = useState([])
    useEffect(()=>{
        fetch("https://expressclean.herokuapp.com/allReview")
        .then(res=>res.json())
        .then(data=>{
            setServices(data)
        })
        .catch(err=>console.log(err))
    },[])
    return (
        <section className="m-5">
            <div className="text-center my-5 py-5">
                <h1>What People Say About Us</h1>

            </div>
            <div className="container my-5">
                <div className="row d-flex justify-content-center my-2">
                    {
                        services.map(service => <Testimony key ={service._id} service={service}></Testimony>)
                    }
                </div>

            </div>
        </section>
    );
};

export default Testimonial;