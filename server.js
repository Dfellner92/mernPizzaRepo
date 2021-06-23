const express = require("express");

const app = express();
const Pizza = require("./models/pizzaModel");
app.use(express.json());
const db = require("./db");
const path = require("path");

const pizzaRoutes = require("./routes/pizzaRoutes");
const userRoutes = require("./routes/userRoutes");
const ordersRoutes = require("./routes/orderRoutes");

app.use("/api/pizza/", pizzaRoutes);
app.use("/api/users/", userRoutes);
app.use("/api/orders/", ordersRoutes);

if (process.env.NODE_ENV === "production") {
  app.use("/", express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "/client/build/index.html"));
  });
}



const port = process.env.PORT || 8000;

app.listen(port, () => "Server running on port 🔥");
