
import { Controller, useForm } from "react-hook-form";
import AdminNav from '../AdminNav/AdminNav';
import { Button, Form } from 'react-bootstrap';
import { useState } from "react";
import { Checkbox, TextField } from "@material-ui/core";
import Blogger from "./Blogger";
import { makeStyles } from '@material-ui/core/styles';

const axios = require('axios');

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '100%',
        },
    },
}));

const AddBlog = () => {

    const classes = useStyles();
    const [img, setImg] = useState("")
    const { register, handleSubmit, control,watch, formState: { errors } } = useForm();

    const onSubmit = data => {
        if (img) {
            const newData = {
                name: data.name,
                post: data.blog,
                file: img,
            }

            fetch("https://expressclean.herokuapp.com/addBlog", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newData)
            })
                .then(res => res.json())
                .then(data => {
                    if (data === true) {
                        alert("Blog Added Successfully")
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
        else {
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
            <AdminNav></AdminNav>

            <div className="d-flex justify-content-center">

                <div style={{ width: "50%" }} className="container container-fluid ">
                    <h1>Review And Complain AddBlog Us</h1>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Select A File</label>
                        <input onChange={database} type="file" className="form-control" name="file" id="exampleInputPassword1" placeholder="Select A File" />
                    </div>
                    <form class="form-group" onSubmit={handleSubmit(onSubmit)}>
                        {/* register your input into the hook by invoking the "register" function */}
                        <input className="form-control"  placeholder="Enter Service Name" name="name" {...register("name", { required: true })} /> <br></br>

                        <div class="form-group" >
                            <textarea name="blog" {...register("blog", { required: true })} placeholder="Enter Blog Here" class="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
                        </div>


                        <input className="form-control classes.root" type="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddBlog;
