import React from "react";
import { Link } from "react-router-dom";

const Meal = ({ meal }) => {
//   console.log(meal);
  const {strMeal,strMealThumb,strCategory,strArea,idMeal
  } = meal;
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src={strMealThumb}
          alt="Foods"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Food : <span className="text-red-600">{strMeal}</span></h2>
        <p className="text-xl font-semibold">Food Catagory : <span className="text-red-600">{strCategory}</span> </p>
        <p>Food Origin : <span className="text-red-600">{strArea}</span> </p>
        <div className="card-actions justify-center mt-7">
          <Link className="w-[100%] ml-14" to={`/menu/${idMeal}`}><button className="btn btn-primary w-[80%]">See Details...</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Meal;
