import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { placeOrder } from "../actions/orderActions";
import Error from "../components/Error";
import Loading from "../components/Loading";
import Success from "../components/Success";

export default function Checkout({ subtotal }) {
  const orderstate = useSelector((state) => state.placeOrderReducer);
  const { success, loading, error } = orderstate;
  const dispatch = useDispatch();
  const tokenHandler = (token) => {
    console.log(token);
    dispatch(placeOrder(token, subtotal));
  };
  return (
    <div>
      {loading && <Loading />}
      {error && <Error error="Something went wrong" />}
      {success && <Success success="Your Order was Placed Successfully" />}

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
