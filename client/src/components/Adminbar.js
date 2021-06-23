import React from "react";
import { Link } from "react-router-dom";

export default function Adminbar() {
  return (
    <div>
      <h2 style={{ fontSize: "35px" }}>Admin Panel</h2>
      <ul className="admin-function">
        <li>
          <Link to={"/admin/userlist"} style={{ color: "white" }}>
            Users List
          </Link>
        </li>
        <li>
          <Link to={"/admin/pizzalist"} style={{ color: "white" }}>
            Pizzas List
          </Link>
        </li>
        <li>
          <Link to={"/admin/addpizza"} style={{ color: "white" }}>
            Add Pizza
          </Link>
        </li>
        <li>
          <Link to={"/admin/orderlist"} style={{ color: "white" }}>
            Orders List
          </Link>
        </li>
      </ul>
    </div>
  );
}
