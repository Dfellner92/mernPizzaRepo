import React from "react";
import { useDispatch } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { placeOrder } from "../actions/orderActions";

export default function Checkout({ subtotal }) {
  const dispatch = useDispatch();
  const tokenHandler = (token) => {
    console.log(token);
    dispatch(placeOrder(token, subtotal));
  };
  return (
    <div>
      <StripeCheckout
        amount={subtotal}
        shippingAddress
        token={tokenHandler}
        stripeKey="pk_test_51Iz4xKLMLLJCAzmY3SLcsOlwlhjyAX4DvkaIYIwb84gJWa4sgQgq4aU9CJU65zb8ryjkohlEWs1OcKG6DeizoA2400Z6GnxzQQ"
        currency="USD"
      >
        <button className="btn">Pay Now</button>
      </StripeCheckout>
    </div>
  );
}
