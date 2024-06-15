import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
function LandingPage() {
  const [restaurants, setRestaurants] = useState(null)
  const getRestaurants = async () => {
    try {
      await axios.get('/api/v1/restaurant/getallrestaurants')
        .then((res) => { setRestaurants(res.data.data) })
        .catch((err) => { console.log(err) })
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getRestaurants()
  }, [setRestaurants])
  return (
    <div>
      <div className="flex flex-col w-3/4 mx-auto mb-10 ">
        <h1 className="text-4xl px-4 my-6">Restaurants</h1>
        <div className="flex w-full h-auto flex-wrap gap-12 justify-center items-center">
          {
            restaurants?restaurants.map((restaurant, index) => {
             return (
               <div key={restaurant._id} className="flex flex-col p-4 rounded-xl hover:shadow-lg ">
                  <Link to={`/restaurants/${restaurant._id}`}>
                  <img src={restaurant.restaurant_image} alt={restaurant.name} className="rounded-xl h-56 w-80" />
                  <div className="flex justify-between my-1">
                    <h3 className="text-lg">{restaurant.name}</h3>
                    <div className="bg-green-700 px-2 text-white text-sm rounded-md flex items-center gap-1">
                      {restaurant.ratings}
                      <FaStar />
                    </div>
                  </div>
                  <h4 className="text-md text-slate-500">{restaurant.description?.slice(0, 42)} ...</h4>
                </Link>
                </div>
              )
}):<>hello</>
          }
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
