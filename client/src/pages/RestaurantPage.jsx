import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";

function RestaurantsPage() {
  const [restaurants, setRestaurants] = useState(null);
  const { id } = useParams();
  const getRestaurants = async () => {
    try {
      await axios
        .get(`/api/v1/restaurant/getrestaurant/${id}`)
        .then((res) => {
          setRestaurants(res.data.data);
        })
        .catch((err) => {
          console.log(err.message);
        });
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getRestaurants();
  }, []);
  return (
    <div>
      <div className="flex flex-col w-3/4 mx-auto my-4 ">
        <div className=" w-full h-auto  gap-12 justify-center items-center">
         {
            restaurants &&  <div
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
      </div>
    </div>
  );
}

export default RestaurantsPage;
