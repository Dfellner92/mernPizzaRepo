import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllPizzas } from "../actions/pizzaActions";
import Error from "../components/Error";
import Filter from "../components/Filter";
import Loading from "../components/Loading";
import Adminbar from "../components/Adminbar";

export default function Pizzalist() {
  const dispatch = useDispatch();
  const pizzastate = useSelector((state) => state.getAllPizzasReducer);

  const { pizzas, error, loading } = pizzastate;

  useEffect(() => {
    dispatch(getAllPizzas());
  }, []);

  return (
    <div>
      <div className="row justify-content-center m-3">
        <div className="col-md-10">
          <Adminbar />
        </div>
        <h1>Pizza list</h1>
        {loading && <Loading />}
        {error && <Error error="Something went wrong" />}

        <table className="table table-bordered p-3">
          <thead className="thead table-dark">
            <tr>
              <th>Name</th>
              <th>Prices</th>
              <th>Category</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {pizzas &&
              pizzas.map((pizza) => {
                return (
                  <tr>
                    <td>{pizza.name}</td>
                    <td>
                      Small: {pizza.prices[0]["small"]}
                      <br />
                      Medium: {pizza.prices[0]["medium"]}
                      <br />
                      Large: {pizza.prices[0]["large"]}
                    </td>
                    <td>{pizza.category}</td>
                    <td>
                      <i className="fa fa-trash m-2"></i>
                      <Link to={`/admin/editpizza/${pizza._id}`}>
                        <i className="fa fa-edit m-2"></i>
                      </Link>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
