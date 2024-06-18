import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getdish } from '..';

function DishPage() {
  const [dish, setDish] = useState(null);
  const { id } = useParams();
 
  useEffect(() => {
    const fetchData=async()=>{
      const data=await getdish(id);
      setDish(data)
    }
    fetchData()
  }, []);
  return (
    <div>{dish?.dishname}</div>
  )
}

export default DishPage