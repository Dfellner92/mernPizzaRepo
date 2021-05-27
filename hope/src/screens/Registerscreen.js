import React, { useState } from "react";

export default function Registerscreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");

  function register() {
    if (password !== cpassword) {
      alert("passwords do not match!");
    } else {
      const user = {
        name,
        email,
        password,
      };
      console.log(user);
    }
  }

  return (
    <div>
      <div className="row justify-content-center mt-5">
        <div className="col-md-5 mt-5 text-left">
          <h2 className="text-center m-2" style={{ fontSize: "35px" }}>
            Register
          </h2>
          <div>
            <input
              type="text"
              placeholder="name"
              className="form-control"
              value={name}
              required
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <input
              type="text"
              placeholder="email"
              className="form-control"
              value={email}
              required
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              type="text"
              placeholder="password"
              className="form-control"
              value={password}
              required
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <input
              type="text"
              placeholder="confirm password"
              className="form-control"
              value={cpassword}
              required
              onChange={(e) => {
                setCpassword(e.target.value);
              }}
            />
            <button className="btn mt-3" onClick={register}>
              REGISTER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
