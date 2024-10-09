import React, { useContext, useEffect, useState } from 'react';
import AdminNav from '../AdminNav/AdminNav';
import { useForm } from "react-hook-form";
import { Button, Form } from 'react-bootstrap';
import AddSingleMember from './AddSingleMember';
import { useHistory } from 'react-router';
import { UserContext } from '../../../App';
const axios = require('axios');

const Admin = () => {

    const history=useHistory()
    let [admin, setAdmin] = useState(false)
    const [img, setImg] = useState("")
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [member,setMember]=useState([])


    //SessionStorage Can save Time Sometimes
    

    // const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    // const [isAdmin, setIsAdmin] = useState(false)

    // if (!loggedInUser.email) {
    //     const newUser = {
    //         email: sessionStorage.getItem("email")
    //     }
    //     setLoggedInUser(newUser)
    // }

    // useEffect(() => {
    //     fetch("https://expressclean.herokuapp.com/checkIsAdmin", {
    //         method: "POST",
    //         headers: { "Content-Type": "application/json" },
    //         body: JSON.stringify({ email: loggedInUser.email })
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             setIsAdmin(data)
    //             setAdmin(data)
    //         })
    // }, [loggedInUser.email])
    const isAdmin=sessionStorage.getItem("admin")
    // console.log("This is from Admin",isAdmin)


    useEffect(()=>{
        fetch("https://expressclean.herokuapp.com/allMember")
        .then(res=>res.json())
        .then(data=>setMember(data))
        .catch(err=>console.log(err))
    },[])

    const onSubmit = data => {
        if (img) {
            const newData = {
                name: data.name,
                spec: data.spec,
                file: img,
            }
            console.log("This is New Data", newData)

            fetch("https://expressclean.herokuapp.com/addMember", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newData)
            })
                .then(res => res.json())
                .then(data => {
                    if (data === true) {
                        alert("Member Added Successfully")
                    }
                })
                .catch(err => console.log(err))

                // history.push("/admin")
        }
    };

    const database = (e) => {
        const imageData = new FormData()
        const image = e.target.files[0]
        imageData.set("key", "d480ee043158dcf9557f12bdb19ed335")
        imageData.append("image", image)

        axios.post("https://api.imgbb.com/1/upload", imageData)
            .then(data => {
                setImg(data.data.data.display_url)
                console.log("IMG BB Done")
                console.log(data.data.data.display_url)
            })
            .catch(err => console.log(err))
    }

    return (
        <div >
            <AdminNav ></AdminNav>
            <div style={{ display: (isAdmin==="true") ? "block" : "none" }}>
                <div className=" row d-flex justify-content-center">
                    <div className="col-md-4">
                        <div className="d-flex justify-content-center">

                            <div style={{ width: "100%" }} className="container container-fluid ">
                                <h4 className="text-center my-4">Add A member</h4>
                                <div class="form-group">
                                    <label for="exampleInputPassword1">Select A File</label>
                                    <input {...register("file", { required: true })} onChange={database} type="file" className="form-control" name="file" id="exampleInputPassword1" placeholder="Select A File" />
                                </div>
                                <form class="form-group" onSubmit={handleSubmit(onSubmit)}>
                                    {/* register your input into the hook by invoking the "register" function */}
                                    <input className="form-control" placeholder="Enter  Profession" name="name" {...register("name", { required: true })} /> <br></br>

                                    <input className="form-control" placeholder="Enter name" name="spec" {...register("spec", { required: true })} /><br></br>
                                    {/* <input className="form-control" onChange={()=>database()} type="file" name="file" placeholder="Select A File" {...register("file", { required: true })} /><br></br> */}


                                    <input className="form-control" type="submit" />
                                </form>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-7 my-5">
                        <div className="row d-flex justify-content-center">
                            {
                                member.map(service => <AddSingleMember key={service._id} service={service}></AddSingleMember>)
                            }

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Admin;

























