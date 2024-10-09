import { useForm } from "react-hook-form";
import { Button, Form } from 'react-bootstrap';
import NavBar from "../Home/Navbar/NavBar";
import { useState } from "react";
const axios = require('axios');

const About = () => {
    const [img, setImg] = useState("")
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = data => {
        if (img) {
            const newData = {
                name: data.name,
                price: data.review,
                spec: data.suggestion,
                file: img,
            }

            fetch("https://expressclean.herokuapp.com/addReview", {
                method: "Post",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newData)
            })
                .then(res => res.json())
                .then(data => {
                    if (data === true) {
                        alert("Review Added Successfully")
                    }
                })
                .catch(err => console.log(err))
        }
    };

    const database = (e) => {
        const imageData = new FormData()
        const image = e.target.files[0]
        if (!image) {
            setImg("https://ibb.co/G3T8wZR")
            console.log("No Image Selected No IMG BB")

        }
        else{
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
    }


    return (
        <div>
            <NavBar></NavBar>
            
            <div className="d-flex justify-content-center">

                <div style={{ width: "50%" }} className="container container-fluid ">
                    <h1>Review And Complain about Us</h1>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Select A File</label>
                        <input onChange={database} type="file" className="form-control" name="file" id="exampleInputPassword1" placeholder="Select A File" />
                    </div>
                    <form class="form-group" onSubmit={handleSubmit(onSubmit)}>
                        {/* register your input into the hook by invoking the "register" function */}
                        <input className="form-control" placeholder="Enter Service Name" name="name" {...register("name", { required: true })} /> <br></br>

                        {/* include validation with required or other standard HTML validation rules */}
                        <input className="form-control" placeholder="Enter Your Review" name="review" {...register("review", { required: true })} /><br></br>
                        {/* errors will return when field validation fails  */}
                        <input className="form-control" placeholder="Any Suggestion" name="suggestion" {...register("suggestion", { required: true })} /><br></br>
                        {/* <input className="form-control" onChange={()=>database()} type="file" name="file" placeholder="Select A File" {...register("file", { required: true })} /><br></br> */}


                        <input className="form-control" type="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default About;
