import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import Home from './Components/Home/Home';
import Error from './Components/Home/Error-page/Error';
import Navbar from './Components/Navbar/Navbar';
import DefaultPage from './Components/DefaultPage/DefaultPage';
import Menu from './Components/Menu/Menu';
import FoodDetails from './Components/FoodDetails/FoodDetails';

const router = createBrowserRouter([
  {
    path : "/",
    element : <Home></Home>,
    errorElement : <Error></Error>,
    children : [
      {
        path : "/",
        element : <DefaultPage></DefaultPage>
      },
      {
        path : "menu",
        element : <Menu></Menu>,
        loader : () => fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=b')
      },
      {
        path : "menu/:menuId",
        element : <FoodDetails></FoodDetails>,
        loader : ({params}) => fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.menuId}`)
      },
      {
        path : '*',
        element : <div>404 Not Found.....</div>
      }
    ],
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
