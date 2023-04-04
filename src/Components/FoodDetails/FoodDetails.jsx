import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const FoodDetails = () => {
    const meal = useLoaderData();
    const mealData = meal.meals[0];
    const {strArea,strCategory,strIngredient1,strIngredient2,strIngredient3,strIngredient4,strIngredient5,strIngredient6,strInstructions,strMeal,strMealThumb,strSource,strYoutube} = mealData;

// console.log(mealData);

    return (
        <div className="card md:card-side bg-base-100 shadow-xl container mx-auto">
  <figure className='md:w-[50%]'><img src={strMealThumb}  alt="Movie"/></figure>
  <div className="card-body md:w-[50%]">
    <h2 className="card-title text-red-600 text-3xl">{strMeal}</h2>
    <p><span className='underline text-red-400'>Main Ingredients</span> : 1.{strIngredient1},2.{strIngredient2},3.{strIngredient3},4.{strIngredient4},5.{strIngredient5},6.{strIngredient6} </p>
    <p><span className='text-red-400 underline'>Recepie</span> : {strInstructions}</p>
    <a href={strYoutube} className='text-red-800 underline'>Youtube Link</a>
    <div className="card-actions justify-end">
      <Link to='/menu'><button className="btn btn-primary">Go back</button></Link>
    </div>
  </div>
</div>
    );
};

export default FoodDetails;