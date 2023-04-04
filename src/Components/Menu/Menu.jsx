import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Meal from "../Meals/Meal";

const Menu = () => {
  const mealData = useLoaderData();
  const mealsData = mealData.meals;
  return (
    <div className="md:mt-28">
        <h1 className="text-2xl font-bold text-center underline">Enjoy This <span className="text-red-600">Foods</span></h1>
      <div className="grid md:grid-cols-3 gap-11 container mx-auto mt-20">
        {mealsData.map((meal) => (
          <Meal key={meal.idMeal} meal={meal}></Meal>
        ))}
      </div>
    </div>
  );
};

export default Menu;
