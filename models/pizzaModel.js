const { ObjectID } = require("bson");
const mongoose = require("mongoose");

const pizzaSchema = new mongoose.Schema(
  {
    _id: { type: ObjectID, require },
    name: { type: String, require },
    varients: [],
    prices: [],
    category: { type: String, require },
    image: { type: String, require },
    description: { type: String, require },
  },
  {
    collection: "pizza",
  },
  { timestamps: true }
);

const pizzaModel = mongoose.model("pizza", pizzaSchema);

module.exports = pizzaModel;
