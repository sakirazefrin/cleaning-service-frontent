import React from 'react';
import AdminNav from '../AdminNav/AdminNav';
import { useForm } from "react-hook-form";
import { Button, Form } from 'react-bootstrap';

const AddAdmin = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        fetch("https://expressclean.herokuapp.com/addAdmin",{
            method:"POST",
            headers:{"Content-Type":"Application/json"},
            body:JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data===true){
                alert("Admin Added SuccessFully")
            }
        })
    };


    return (
        <div>
            <AdminNav></AdminNav>
                <div className="d-flex justify-content-center">
                <Form onSubmit={handleSubmit(onSubmit)} style={{ width: "50%" }} className="m-5 px-5">
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label> <h5>Email address of New Admin</h5> </Form.Label>
                        <Form.Control {...register("email", { required: true })}  className="form-control" type="email" placeholder="Enter email For Adding as An Admin" />
                    </Form.Group>

                    <Form.Group controlId="formBasicCheckbox">
                    </Form.Group>
                    <input className="form-control" type="submit" />
                </Form>
                </div>
        </div>
    );
};

export default AddAdmin;