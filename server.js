const express = require("express");

const app = express();
const Pizza = require("./models/pizzaModel");
app.use(express.json());
const db = require("./db");

const pizzaRoutes = require("./routes/pizzaRoutes");

app.use("/api/pizza/", pizzaRoutes);

app.get("/", (req, res) => {
  res.send("Server working 🔥");
});

app.get("/getallpizzas", async (req, res) => {
  try {
    const pizzas = await Pizza.find({});
    res.send(pizzas);
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

const port = process.env.PORT || 8000;

app.listen(port, () => "Server running on port 🔥");
