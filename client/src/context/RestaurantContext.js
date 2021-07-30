import React, { createContext, useState } from "react";

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = (props) => {
  const [restaurants, setRestaurants] = useState([]);
  const addRes = (restaurant) => {
    setRestaurants([...restaurants, restaurant]);
  };
  const delRes = (id) => {
    setRestaurants(restaurants.filter((r) => r.id !== id));
  };
  return (
    <RestaurantsContext.Provider
      value={{ restaurants, setRestaurants, addRes, delRes }}
    >
      {props.children}
    </RestaurantsContext.Provider>
  );
};
