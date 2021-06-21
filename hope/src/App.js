import "./App.css";
import bootstrap from "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homescreen from "./screens/Homescreen";
import Cartscreen from "./screens/Cartscreen";
import Loginscreen from "./screens/Loginscreen";
import Registerscreen from "./screens/Registerscreen";
import Ordersscreen from "./screens/Ordersscreen";
import Adminscreen from "./screens/Adminscreen";
import Userslist from "./screens/Userlist";
import Orderlist from "./screens/Orderlist";
import Pizzalist from "./screens/Pizzalist";
import Addpizza from "./screens/Addpizza";
import Editpizza from "./screens/Editpizza";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Route path="/" exact component={Homescreen} />
        <Route path="/cart" exact component={Cartscreen} />
        <Route path="/Login" exact component={Loginscreen} />
        <Route path="/Register" exact component={Registerscreen} />
        <Route path="/orders" exact component={Ordersscreen} />
        <Route path="/admin" exact component={Adminscreen} />
        <Route path="/admin/userlist" exact component={Userslist} />
        <Route path="/admin/pizzalist" exact component={Pizzalist} />
        <Route path="/admin/addpizza" exact component={Addpizza} />
        <Route path="/admin/orderlist" exact component={Orderlist} />
        <Route path="/admin/editpizza/:pizzaId" exact component={Editpizza} />
      </BrowserRouter>
    </div>
  );
}

export default App;
