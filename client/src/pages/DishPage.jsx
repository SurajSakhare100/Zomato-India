import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function DishPage() {
  const [dish, setDish] = useState(null);
  const { id } = useParams();
  const getdish = async () => {
    try {
      await axios
        .get(`/api/v1/dish/getdish/${id}`)
        .then((res) => {
          setDish(res.data.data);
        })
        .catch((err) => {
          console.log(err.message);
        });
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getdish();
  }, []);
  return (
    <div>{dish?.dishname}</div>
  )
}

export default DishPage