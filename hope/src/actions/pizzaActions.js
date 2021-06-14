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
