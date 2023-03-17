import { RouterProvider } from "react-router-dom";
import { AppRouter } from "./router/AppRouter";
import { useEffect, useState } from "react";
import {
  getRestaurant,
  getRestaurantPopulate,
} from "./utilities/api/resturant/getRestaurant";
import { getPlatesPopulate } from "./utilities/api/plate/getPlates";
import { LoadingFullscreen } from "./components";

const App = () => {
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    const init = async () => {
      try {
        console.log("COnsultamos");
        const respPlatePopulate = await getPlatesPopulate();
        const dataPlatePopulate = await respPlatePopulate.json();
        const respRestaurantPopulates = await getRestaurantPopulate();
        const dataRestaurantPopulates = await respRestaurantPopulates.json();
        const data = await getRestaurant();
        const restaurant = await data.json();

        localStorage.setItem(
          "platesPopulate",
          JSON.stringify(dataPlatePopulate)
        );
        localStorage.setItem("restaurants", JSON.stringify(restaurant));
        localStorage.setItem(
          "restaurantsPopulates",
          JSON.stringify(dataRestaurantPopulates)
        );

        setisLoading(false)
      } catch (error) {
        throw error;
      }
    };
    init();
  }, []);

  return  isLoading ? <LoadingFullscreen/> : <RouterProvider router={AppRouter} />;
};

export default App;
