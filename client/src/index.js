import axios from "axios";


export const url = 'https://zomato-india.onrender.com'
const axiosInstance = axios.create({

  headers: {
    "Content-Type": "application/json",
  },
});
const handleResponse = (res) => res.data.data;
const handleError = (err) => {
  console.error(err.message);
  return null;
};

export const getDishesOfRestaurant = async (ids) => {
  try {
    const response = await axiosInstance.get(url+
      "/api/v1/Dish/getdishesofrestaurant",
      { params: { ids } }
    );
    return handleResponse(response);
  } catch (error) {
    return handleError(error);
  }
};

export const getRestaurants = async () => {
  try {
    const response = await axiosInstance.get(url+
      "/api/v1/restaurant/getallrestaurants"
    );
    return handleResponse(response);
  } catch (error) {
    return handleError(error);
  }
};

export const getAllDishes = async () => {
  try {
    const response = await axiosInstance.get(url+"/api/v1/Dish/getalldishes");
    return handleResponse(response);
  } catch (error) {
    return handleError(error);
  }
};

export const getRestaurant = async (id) => {
  try {
    const response = await axiosInstance.get(url+
      `/api/v1/restaurant/getrestaurant/${id}`
    );
    return handleResponse(response);
  } catch (error) {
    return handleError(error);
  }
};

export const getdish = async (id) => {
  try {
    const response = await axiosInstance.get(url+`/api/v1/dish/getdish/${id}`);
    return handleResponse(response);
  } catch (error) {
    console.log(error.message);
    return null;
  }
};
