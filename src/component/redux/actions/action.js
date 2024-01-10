import axios from "axios";

export const getProducts = () => async (dispatch) => {
  try {
    const response = await axios.get(
      "https://ecommerce-w73k.onrender.com/getproducts",
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    // Access the response data using response.data
    console.log(response.data);

    dispatch({ type: "SUCCESS_GET_PRODUCTS", payload: response.data });
  } catch (error) {
    dispatch({ type: "FAIL_GET_PRODUCTS", payload: error.response });
  }
};
