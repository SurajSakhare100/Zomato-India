import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'
import { getDishes } from "..";
function Adminpage() {
    const [dishes, setDishes] = useState(null);
    useEffect(()=>{
       const api= getDishes();
       api.then(
        (res)=>{
            setDishes(res.data.data)
        }
       )
    },[]);
    const [dishname, setDishname] = useState('');
    const arrayOfDishes=[];
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const result=dishes.filter((dish)=>dish.dishname===dishname)
            arrayOfDishes.push(result[0]._id)
            console.log(arrayOfDishes)
            const response = await axios.post('/api/v1/restaurant/addDishes', arrayOfDishes, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            console.log(response)
        } catch (error) {
            console.log(error.message);
        }
    };
    console.log(dishname)
    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-4xl font-bold leading-9 tracking-tight text-gray-900">
                        Add Dish
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" onSubmit={handleSubmit}>

                        <div>
                            <label
                                htmlFor="dishname"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >
                                Dish Name
                            </label>
                            <div className="mt-2">
                                <select
                                    id="dishname"
                                    name="dishname"
                                    type="text"
                                    autoComplete="dishname"
                                    required
                                    onChange={(e) => setDishname(e.target.value)}
                                    placeholder="Gulabjamun"
                                    className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                                >
                                   {
                                   dishes?.map((dish)=>((
                                    <option key={dish._id}>{dish.dishname}</option>
                                   )))
                                   }
                                </select>
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label
                                    htmlFor="price"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    price
                                </label>

                            </div>
                            <div className="mt-2">
                                <input
                                    id="price"
                                    name="price"
                                    type="number"
                                    autoComplete="current-price"
                                    required
                                    placeholder="10$"
                                    onChange={(e) => setPrice(e.target.value)}
                                    className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-red-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                            >
                                Add Dish
                            </button>
                        </div>
                        <div>

                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Adminpage
