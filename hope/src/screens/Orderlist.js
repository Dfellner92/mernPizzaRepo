import React from "react";
import Adminbar from "../components/Adminbar";

export default function Orderlist() {
  return (
    <div>
      <div className="row justify-content-center p-3">
        <div className="col-md-10">
          <Adminbar />
        </div>
      </div>
      <h1>Orders list</h1>
    </div>
  );
}
