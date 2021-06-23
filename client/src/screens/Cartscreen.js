import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../actions/cartActions";
import { deleteFromCart } from "../actions/cartActions";
import Checkout from "../components/Checkout";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Cartscreen() {
  AOS.init();

  const cartstate = useSelector((state) => state.cartReducer);
  const cartItems = cartstate.cartItems;
  let subtotal = cartItems.reduce((x, item) => x + item.price, 0);
  const dispatch = useDispatch();

  return (
    <div>
      <div className="row justify-content-center" data-aos="fade-up">
        <div className="col-md-6">
          <h2 style={{ fontSize: "40px" }}>My Cart</h2>

          {cartItems.map((item) => (
            <div className="flex-container">
              <div className="text-left m-1">
                <h1>
                  {item.name} [{item.varient}]
                </h1>
                <h1>
                  Price: {item.quantity} * {item.prices[0][item.varient]} =
                  {" " + item.price}
                </h1>
                <h1 style={{ display: "inline" }}>Quantity: </h1>
                <i
                  class="fa fa-plus"
                  aria-hidden="true"
                  onClick={() => {
                    dispatch(addToCart(item, item.quantity + 1, item.varient));
                  }}
                ></i>
                <b>{" " + item.quantity + " "}</b>
                <i
                  class="fa fa-minus"
                  aria-hidden="true"
                  onClick={() => {
                    dispatch(addToCart(item, item.quantity - 1, item.varient));
                  }}
                ></i>
                <hr />
              </div>
              <div className="m-1 w-40">
                <img
                  src={item.image}
                  style={{ height: "80px", width: "80px" }}
                />
              </div>
              <div className="m-1 w-100">
                <i
                  class="fa fa-trash mt-4"
                  aria-hidden="true"
                  onClick={() => dispatch(deleteFromCart(item))}
                ></i>
              </div>
            </div>
          ))}
        </div>
        <div className="col-md-4 text-right">
          <h2 style={{ fontSize: "45px" }}>Subtotal: ${subtotal}</h2>
          <Checkout subtotal={subtotal} />
        </div>
      </div>
    </div>
  );
}
