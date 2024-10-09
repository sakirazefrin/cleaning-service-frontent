import React, { useContext, useMemo, useState } from "react";
import {
    useStripe,
    useElements,
    CardNumberElement,
    CardCvcElement,
    CardExpiryElement
} from "@stripe/react-stripe-js";
import { useHistory } from "react-router";
import { UserContext } from "../../../App";


const useOptions = () => {
    const fontSize = "16px";
    const options = useMemo(
        () => ({
            style: {
                base: {
                    fontSize,
                    color: "#424770",
                    letterSpacing: "0.025em",
                    fontFamily: "Source Code Pro, monospace",
                    "::placeholder": {
                        color: "#aab7c4"
                    }
                },
                invalid: {
                    color: "#9e2146"
                }
            }
        }),
        [fontSize]
    );

    return options;
};

const StripePayment = ({id}) => {
    const date = new Date()
    const stripe = useStripe();
    const elements = useElements();
    const options = useOptions();

    const history = useHistory()
 
    const [loggedInUser, setLogedInUser] = useContext(UserContext)
    const userMail=loggedInUser.mail||sessionStorage.getItem("email")
    console.log(userMail)

    //Get a Single Product by id from database
    // const ordersHandler = () => {
    //     history.push(`/checkout/${item._id}`)
    // }
    const handleSubmit = async event => {
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }       
        const payload = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardNumberElement)
        });
        if (payload.paymentMethod) {
            fetch(`https://expressclean.herokuapp.com/specificProduct/${id.id}`)
                .then(res => res.json())
                .then(data => {
                   const newUser={
                       product:{...data},
                       status: 1
                   }
                    newUser.paymentId = payload.paymentMethod.id
                    newUser.cardInfo = payload.paymentMethod.card
                    newUser.email=userMail
                    newUser.time=date

                    fetch("https://expressclean.herokuapp.com/orderPlace",{
                        method:"POST",
                        headers:{"Content-Type":"application/json"},
                        body:JSON.stringify(newUser)
                    })
                    .then(res=>res.json())
                    .then(data=>{
                        if (data===true){
                            alert(`Ordered Placed Successfully\nYour Payment ID:  ${payload.paymentMethod.id}`)
                            history.push("/")
                        }
                    })
                    .catch(err=>console.log(err))
                })
                .catch(err => console.log(err))

            
        }
        else if (payload.error) {
            console.log("This is Stripe Payment and Product Id is", id)
            alert(`Oder Placed Unseccessful Please Try again LAter\nMessage:${payload.error.message}`)

        }
    };

    return (
        <form onSubmit={handleSubmit}>
            
            <div className=" justify-content-center">
                <div className="d-flex">
                    <div >
                        <label className="m-5">
                            <h5>Card number</h5>
                            <CardNumberElement
                                options={options}
                                onReady={() => {

                                }}
                                onChange={event => {

                                }}
                                onBlur={() => {

                                }}
                                onFocus={() => {

                                }}
                            />
                        </label>

                    </div>


                    <div>


                        <label className="m-5">
                            <h5>Expiration date</h5>
                            <CardExpiryElement
                                options={options}
                                onReady={() => {

                                }}
                                onChange={event => {

                                }}
                                onBlur={() => {

                                }}
                                onFocus={() => {

                                }}
                            />

                        </label>
                    </div>



                    <div>

                        <label className="m-5">
                            <h5>CVC</h5>

                            <CardCvcElement
                                options={options}
                                onReady={() => {

                                }}
                                onChange={event => {

                                }}
                                onBlur={() => {

                                }}
                                onFocus={() => {

                                }}
                            />
                        </label>

                    </div>
                </div>
                <div style={{ marginLeft: "50px" }} className="ms-5 ps-5">
                    <button className="justify-content-center" className="btn btn-primary" type="submit" disabled={!stripe}>
                        Pay To Proceed
      </button>
                </div>
            </div>

        </form>
    );
};

export default StripePayment;
