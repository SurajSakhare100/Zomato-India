import axios from "axios";

export const getDishes = async () => {
    try {
     const response= await axios.get('/api/v1/Dish/getalldishes')
       return response
    } catch (error) {
      console.log(error.message);
    }
  };
export const getDishesOfRestaurant = async (ids) => {
  // console.log(ids)
    try {
     const response=await axios.get('/api/v1/Dish/getdishesofrestaurant',{
      params: { ids},
      // ids:{ids}
    }
  )
  return response.data.data
      
    } catch (error) {
      console.log(error.message);
    }
  };
