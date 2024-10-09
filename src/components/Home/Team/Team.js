import React, { useEffect, useState } from 'react';

import TeamMember from '../TeamMember/TeamMember';

const Team = () => {
    const [employeeType, setEmployeeType] = useState([])
    const [services,setServices]=useState([])
    useEffect(()=>{
        fetch("https://expressclean.herokuapp.com/allMember")
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    // const services = [
    //     {
    //         name: "House Hold Plumber",
    //         id: 1,
    //         img: { first },
    //         price: 50,
    //         des: "This type of workers almost all kinds of work.He may not be expert but good at all kinds of work"
    //     },
    //     {
    //         name: "Freelance Plumber",
    //         id: 2,
    //         img: { second },
    //         price: 50,
    //         des: "This type of workers are Expert . But he is also good at all kinds of work"
    //     },
    //     {
    //         name: "Building Plumber",
    //         img: { third },
    //         id: 3,
    //         price: 50,
    //         des: "This type of workers are best for Building work.They are expert at Building Maintanance "
    //     },
    //     {
    //         name: "Water Line Plumber",
    //         img: { forth },
    //         id: 4,
    //         price: 50,
    //         des: "This type of workers are best at Water Line management .They are expert at it ."
    //     },
    //     {
    //         name: "Wall Plumber",
    //         img: { fifth },
    //         price: 50,
    //         id: 5,
    //         des: "This type of workers are best at Wall related work. They can clean and maintain your Buildings wall"
    //     }
    // ]
    return (
        <section className="m-5">
            <div className="text-center my-5 py-5">
                <h1>Our Team Members</h1>

            </div>
            <div className="container my-5">
                <div className="row d-flex justify-content-center my-2">
                    {
                        services.map(service => <TeamMember key= {service._id} service={service}></TeamMember>)
                    }
                </div>

            </div>
        </section>
    );
};

export default Team;