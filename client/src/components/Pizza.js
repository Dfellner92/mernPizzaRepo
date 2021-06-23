import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addToCart } from "../actions/cartActions";
import AOS from "aos";
import "aos/dist/aos.css";

const Pizza = ({ pizza }) => {
  AOS.init();
  const [quantity, setQuantity] = useState(1);
  const [variant, setVariant] = useState("small");

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();

  function addtocart() {
    dispatch(addToCart(pizza, quantity, variant));
  }

  return (
    <div
      data-aos="zoom-in"
      key={pizza._id}
      className="pizza shadow-lg p-3 mb-5 bg-white rounded"
    >
      <h1>{pizza.name}</h1>
      <img
        src={pizza.image}
        alt="pizza img"
        className="img-fluid"
        onClick={handleShow}
        style={{ height: "200px", width: "200px" }}
      />

      <div className="flex-container">
        <div className="w-100 m-1">
          <p>Variants</p>
          <select
            className="form-control"
            value={variant}
            onChange={(e) => setVariant(e.target.value)}
          >
            {pizza.varients.map((variant) => {
              return <option value={variant}>{variant}</option>;
            })}
          </select>
        </div>

        <div className="w-100 m-1">
          <p>Quantity</p>
          <select
            className="form-control"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          >
            {[...Array(10).keys()].map((x, i) => {
              return <option value={i + 1}>{i + 1}</option>;
            })}
          </select>
        </div>
      </div>

      <div className="flex-container">
        <div className="w-100 m-1">
          <h1 className="mt-1">
            Price : ${pizza.prices[0][variant] * quantity}
          </h1>
        </div>
        <div className="w-100 m-1">
          <button className="btn" onClick={addtocart}>
            ADD TO CART
          </button>
        </div>
      </div>

      <Modal show={show}>
        <Modal.Header>
          <Modal.Title>{pizza.name}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <img
            src={pizza.image}
            className="img-fluid"
            alt="pizza image modal"
            style={{
              height: "400px",
            }}
          />
          <p>{pizza.description}</p>
        </Modal.Body>

        <Modal.Footer>
          <button className="btn" onClick={handleClose}>
            CLOSE
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Pizza;
