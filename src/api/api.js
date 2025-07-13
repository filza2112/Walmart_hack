// src/api/api.js
import axios from "axios";

export const productsData = async () => {
  try {
    const response = await axios.get("https://dummyjson.com/products");
    return response.data.products;
  } catch (error) {
    console.error("Error fetching product data:", error);
    return []; // Return an empty array in case of an error
  }
};