import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";
import Adminbar from "../components/Adminbar";

import Addpizza from "./Addpizza";
import Orderslist from "./Orderlist";
import Pizzaslist from "./Pizzalist";
import Userslist from "./Userlist";

export default function Adminscreen() {
  const userstate = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userstate;
  const dispatch = useDispatch();

  useEffect(() => {
    if (!currentUser.isAdmin) {
      window.location.href = "/";
    }
  }, []);

  return (
    <div>
      <div className="row justify-content-center p-3">
        <div className="col-md-10">
          <Adminbar />

          <Switch>
            <Route path="/admin/userlist" component={Userslist} exact />
            <Route path="/admin/orderlist" component={Orderslist} exact />
            <Route path="/admin/pizzalist" component={Pizzaslist} exact />
            <Route path="/admin/addpizza" component={Addpizza} exact />
          </Switch>
        </div>
      </div>
    </div>
  );
}
