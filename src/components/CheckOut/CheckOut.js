
import React from 'react';

import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { CardElement } from '@stripe/react-stripe-js';
import StripePayment from './StripePayment/StripePayment';
import { useParams } from 'react-router';
import NavBar from '../Home/Navbar/NavBar';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.

/////Testing Key 
const stripePromise = loadStripe('pk_test_51Ig4PWFxv6yuNyFQVBkFMFUuiKtOmqQ3zYvLoLIhawzhJfVuGM9JWrGTyB0YZjt6NjDkslrNnLG0xEEdXez2wk8S003RtHDzHY');

const CheckOut = () => {
    const id=useParams()

    console.log("This is CheckOut and Product Id is", id)
    
    
    return (
        <div>
            <NavBar></NavBar>
        <div className="mx-5 p-5" >
            <h3 className="ps-5">Pay To Continue Your Order</h3>
            <Elements stripe={stripePromise}>
               <StripePayment id={id}></StripePayment>
            </Elements>

        </div>
        </div>
    );
};

export default CheckOut;