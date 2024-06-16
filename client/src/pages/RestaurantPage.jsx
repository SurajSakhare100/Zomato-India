import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { getDishesOfRestaurant } from "..";

function RestaurantsPage() {
  const [restaurants, setRestaurants] = useState(null);
  const [ids, setIds] = useState([]);
  const [dishes, setDishes] = useState([]);
  const { id } = useParams();
  const getRestaurants = async () => {
    try {
      const response = await axios
        .get(`/api/v1/restaurant/getrestaurant/${id}`)
        .then((res) => {
          setRestaurants(res.data.data);
          setIds(res.data.data.dishes)
        })
        .catch((err) => {
          console.log(err.message);
        });
      return response
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getRestaurants()
  }, [])
  useEffect(() => {
    if (ids.length > 0) {
      const fetchDishes = async () => {
        try {
          const dishesData = await getDishesOfRestaurant(ids);
          setDishes(dishesData);
        } catch (error) {
          console.error('Error fetching dishes:', error);
        }
      };

      fetchDishes();
    }
  }, [ids]);
  return (
    <div>
      <div className="flex flex-col w-3/4 mx-auto my-4 ">
        <div className=" w-full h-auto  gap-12 justify-center items-center">
          {
            restaurants && <div
              className="flex flex-col p-4 rounded-xl hover:shadow-lg "
            >
              <div className="w-full ">
                <img
                  src={restaurants.restaurant_image}
                  alt={restaurants.name}
                  className="w-full rounded-xl "
                />
              </div>
              <div className="flex justify-between my-2">
                <h3 className="text-lg">{restaurants.name}</h3>
                <div className="bg-green-700 px-2 text-white text-sm rounded-md flex items-center gap-1">
                  {restaurants.ratings}
                  <FaStar />
                </div>
              </div>
              <h4 className="text-md text-slate-500">
                {restaurants.description?.slice(0, 42)} ...
              </h4>
            </div>
          }
        </div>
        <h1 className="text-5xl text-center my-6">
          Top Dishes
        </h1>
        <div className="w-full overflow-x-auto h-auto flex gap-8 py-4 my-2">
          {dishes.length > 0 && dishes.map(dish => (
            <div key={dish._id} className="w-32 sm:w-40 flex-shrink-0">
              <Link to={``}>
                <img src={dish.dish_image} alt={dish.name} className="rounded-full w-full" />

                <h4 className="text-md text-center">{dish.dishname}</h4>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RestaurantsPage;
