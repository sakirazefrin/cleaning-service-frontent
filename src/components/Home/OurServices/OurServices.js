import React, { useEffect, useState } from 'react';
import Services from '../Services/Services';

const OurServices = () => {
    const [employeeType,setEmployeeType]=useState([])
    const [services,setServices]=useState([])

    useEffect(()=>{
        fetch("https://expressclean.herokuapp.com/allProduct")
        .then(res=>res.json())
        .then(data=>setServices(data))
        .catch(err=>console.log(err))
    },[])
    return (
        <section className="m-5">
            <div className="text-center my-5 py-5">
                <h1>What We Do</h1>

            </div>
            <div className="container my-5">
                <div className="row d-flex justify-content-center my-2">
                        {
                            services.map(service => <Services key={service._id} service={service}></Services>)
                        }
                </div>

            </div>
        </section>
    );
};

export default OurServices;