import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterPizzas } from "../actions/pizzaActions";

export default function Filter() {
  const dispatch = useDispatch();
  const [searchkey, setsearchkey] = useState("");
  const [category, setcategory] = useState("all");
  return (
    <div className="container">
      <div className="row justify-content-center shadow-lg p-3 mb-5 bg-white rounded">
        <div className="col-md-3 w-33 mt-2">
          <input
            value={searchkey}
            onChange={(e) => {
              setsearchkey(e.target.value);
            }}
            type="text"
            className="form-control w-33"
            placeholder="search pizzas"
          />
        </div>
        <div className="col-md-2 w-33 mt-3">
          <select
            value={category}
            onChange={(e) => {
              setcategory(e.target.value);
            }}
            className="form-control w-33"
          >
            <option value="all">All</option>
            <option value="veg">Veg</option>
            <option value="nonveg">Non-Veg</option>
          </select>
        </div>
        <div className="col-md-2 w-33 mt-3">
          <button
            className="btn w-100 mt-1 p-2"
            onClick={() => dispatch(filterPizzas(searchkey, category))}
          >
            FILTER
          </button>
        </div>
      </div>
    </div>
  );
}
