import axios from "axios";

export const getDishes = async () => {
    try {
     const response= await axios.get('/api/v1/Dish/getalldishes')
       return response
    } catch (error) {
      console.log(error.message);
    }
  };