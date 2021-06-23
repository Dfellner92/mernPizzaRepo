import React from "react";
import { useDispatch, useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { placeOrder } from "../actions/orderActions";
import Error from "./Error";
import Loading from "./Loading";
import Success from "./Success";

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
        amount={subtotal * 100}
        shippingAddress
        token={tokenHandler}
        stripeKey="pk_test_51Iz4xKLMLLJCAzmY3SLcsOlwlhjyAX4DvkaIYIwb84gJWa4sgQgq4aU9CJU65zb8ryjkohlEWs1OcKG6DeizoA2400Z6GnxzQQ"
        currency="usd"
      >
        <button className="btn">Pay Now</button>
      </StripeCheckout>
    </div>
  );
}
