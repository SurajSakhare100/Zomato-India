import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { getAllDishes, getRestaurants } from "..";
function LandingPage() {
  const [restaurants, setRestaurants] = useState(null)
  const [dishes, setDishes] = useState(null)
  
  useEffect(() => {
    const fetchData=async()=>{
      const data= await getRestaurants()
      setRestaurants(data)
    }
    fetchData()
  }, [setRestaurants])

  useEffect(() => {
    const fetchData=async()=>{
      const data= await getAllDishes()
      setDishes(data)
    }
    fetchData()
  }, [setDishes])
  return (
    <div>
      <div className="flex flex-col w-full px-4 sm:w-3/4 mx-auto mb-10 ">
        <h1 className="text-4xl my-6">Dishes</h1>
        <div className="w-full overflow-x-auto h-auto flex gap-8 py-4">
          {
            dishes?dishes.map((dish, index) => {
             return (
               <div key={dish._id} className="w-32 sm:w-40 flex-shrink-0">
                  <Link to={`/dish/${dish._id}`}>
                  <img src={dish.dish_image} alt={dish.name} className="rounded-full w-full" />
                  
                  <h4 className="text-md text-center">{dish.dishname}</h4>
                </Link>
                </div>
              )
}):<>dishes</>
          }
        </div>
      </div>
      <div className="flex flex-col w-full  sm:w-3/4 mx-auto mb-10 ">
        <h1 className="text-4xl px-4 my-6">Restaurants</h1>
        <div className="flex w-full h-auto flex-wrap gap-12 justify-center items-center">
          {
            restaurants?restaurants.map((restaurant, index) => {
             return (
               <div key={restaurant._id} className="w-full sm:w-auto flex flex-col p-4 rounded-xl hover:shadow-lg ">
                  <Link to={`/restaurants/${restaurant._id}`}>
                  <img src={restaurant.restaurant_image} alt={restaurant.name} className="rounded-xl h-56 w-full sm:w-80" />
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
}):<>restaurants</>
          }
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
