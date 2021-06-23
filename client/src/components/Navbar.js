import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../actions/userActions";

export default function Navbar() {
  const cartstate = useSelector((state) => state.cartReducer);
  const userstate = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userstate;
  const dispatch = useDispatch();
  return (
    <div>
      <nav className="navbar navbar-expand-lg shadow-lg p-3 mb-5 bg-white rounded">
        <a className="navbar-brand" href="/">
          Pizza Demo!
        </a>

        <div
          className=" navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav m1-auto">
            {currentUser ? (
              <div>
                <div className="dropdown">
                  <a
                    className="dropdown-toggle nav-link"
                    type="button"
                    href=""
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    {currentUser.name}
                  </a>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <a className="dropdown-item" href="/orders">
                      Orders
                    </a>
                    <a
                      className="dropdown-item"
                      href="#"
                      onClick={() => {
                        dispatch(logoutUser());
                      }}
                    >
                      Logout
                    </a>
                  </div>
                </div>

                <div className="nav-item">
                  <a className="nav-link" href="/cart">
                    Cart {cartstate.cartItems.length}
                  </a>
                </div>
              </div>
            ) : (
              <li className="nav-item">
                <a className="nav-link" href="/Login">
                  Login
                </a>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
}
