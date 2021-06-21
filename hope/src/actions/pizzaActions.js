import axios from "axios";
export const getAllPizzas = () => async (dispatch) => {
  dispatch({ type: "GET_PIZZAS_REQUEST" });

  try {
    const response = await axios.get("/api/pizza/getallpizzas");
    console.log(response);
    dispatch({ type: "GET_PIZZAS_SUCCESS", payload: response.data });
  } catch (error) {
    console.log("error");
    dispatch({ type: "GET_PIZZAS_FAILED", payload: error });
  }
};

export const filterPizzas = (searchkey, category) => async (dispatch) => {
  var filterPizzas;
  var lowerCaseKey = searchkey.toLowerCase();
  var lowerCaseCategory = category.toLowerCase().slice(0, 3);

  dispatch({ type: "GET_PIZZAS_REQUEST" });
  console.log(lowerCaseCategory);

  try {
    const response = await axios.get("/api/pizza/getallpizzas");
    filterPizzas = response.data.filter((pizza) =>
      pizza.name.toLowerCase().includes(lowerCaseKey)
    );

    if (category != "all") {
      filterPizzas = filterPizzas.filter((pizza) =>
        pizza.category.toLowerCase().slice(0, 3).includes(lowerCaseCategory)
      );
    }
    dispatch({ type: "GET_PIZZAS_SUCCESS", payload: filterPizzas });
  } catch (error) {
    dispatch({ type: "GET_PIZZAS_FAILED" });
  }
};

export const addPizza = (pizza) => async (dispatch) => {
  dispatch({ type: "ADD_PIZZAS_REQUEST" });
  try {
    const response = await axios.post("/api/pizza/addpizza", { pizza });
    console.log(response);
    dispatch({ type: "ADD_PIZZAS_SUCCESS" });
  } catch (error) {
    dispatch({ type: "ADD_PIZZAS_FAILED", payload: error });
  }
};

export const getPizzaById = (pizzaId) => async (dispatch) => {
  dispatch({ type: "GET_PIZZABYID_REQUEST" });

  try {
    const response = await axios.post("/api/pizza/getpizzabyid", { pizzaId });
    console.log(response);
    dispatch({ type: "GET_PIZZABYID_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "GET_PIZZABYID_FAILED", payload: error });
  }
};

export const editPizza = (editedpizza) => async (dispatch) => {
  dispatch({ type: "EDIT_PIZZA_REQUEST" });

  try {
    const response = await axios.post("/api/pizza/editpizza", { editedpizza });
    console.log(response);
    dispatch({ type: "EDIT_PIZZA_SUCCESS" });
    window.location.href = "/admin/pizzalist";
  } catch (error) {
    dispatch({ type: "EDIT_PIZZA_FAILED", message: error });
  }
};

export const deletePizza = (pizzaid) => async (dispatch) => {
  try {
    const response = await axios.post("/api/pizza/deletepizza", { pizzaid });
    alert("Pizza Deleted Successfully");
    console.log(response);
    window.location.reload();
  } catch (error) {}
};
