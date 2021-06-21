import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Adminbar from "../components/Adminbar";
export default function Userslist() {
  const dispatch = useDispatch();

  return (
    <div>
      <div className="row justify-content-center p-3">
        <div className="col-md-10">
          <Adminbar />
        </div>
      </div>
      <h1>Users list</h1>
    </div>
  );
}
