import React, { useState } from 'react';
import AdminNav from '../AdminNav/AdminNav';
import { useForm } from "react-hook-form";
import { Button, Form } from 'react-bootstrap';
const axios = require('axios');

const AddService = () => {
    const [img,setImg]=useState("")
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = data =>{
        if (img){
            const newData = {
                name: data.name,
                price: data.price,
                spec: data.spec,
                file: img,
            }
            console.log("This is New Data",newData)

            fetch("https://expressclean.herokuapp.com/addProduct", {
                method: "Post",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newData)
            })
            .then(res=>res.json())
            .then(data=>{
                if(data===true){
                    alert("Servics Added Successfully")
                }
            })
            .catch(err=>console.log(err))
        }
    };


    const database=(e)=>{
        const imageData = new FormData()
        const image = e.target.files[0]
        imageData.set("key", "d480ee043158dcf9557f12bdb19ed335")
        imageData.append("image", image)

        axios.post("https://api.imgbb.com/1/upload", imageData)
            .then(data => {
                setImg(data.data.data.display_url)
                console.log("IMG BB Done")
               console.log( data.data.data.display_url)
            })
            .catch(err => console.log(err))
    }


    return (
        <div>
            <AdminNav></AdminNav>
            <div className="d-flex justify-content-center">

                <div style={{width:"50%"}} className="container container-fluid ">
                    <h3 className="text-center my-4">Plaese Enter Product Info</h3>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Select A File</label>
                        <input onChange={database} type="file" className="form-control" name="file" id="exampleInputPassword1" placeholder="Select A File" />
                    </div>
                    <form class="form-group" onSubmit={handleSubmit(onSubmit)}>
                        {/* register your input into the hook by invoking the "register" function */}
                        <input className="form-control" placeholder="Enter Service Name" name="name" {...register("name", { required: true })} /> <br></br>

                        {/* include validation with required or other standard HTML validation rules */}
                        <input className="form-control" placeholder="Enter Product Price" name="price" {...register("price", { required: true })} /><br></br>
                        {/* errors will return when field validation fails  */}
                        <input className="form-control" placeholder="Enter Service Specification" name="spec" {...register("spec", { required: true })} /><br></br>
                        {/* <input className="form-control" onChange={()=>database()} type="file" name="file" placeholder="Select A File" {...register("file", { required: true })} /><br></br> */}
                      

                        <input className="form-control" type="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddService;
