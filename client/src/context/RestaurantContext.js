import React, { createContext, useState } from "react";

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = (props) => {
  const [restaurants, setRestaurants] = useState([]);
  const [reviews, setReviews] = useState([]);
  const addRes = (restaurant) => {
    setRestaurants([...restaurants, restaurant]);
  };
  const updateReviews = (data) => {
    setReviews([...reviews, data]);
  };
  const delRes = (id) => {
    setRestaurants(restaurants.filter((r) => r.id !== id));
  };
  return (
    <RestaurantsContext.Provider
      value={{
        restaurants,
        setRestaurants,
        addRes,
        delRes,
        reviews,
        setReviews,
        updateReviews,
      }}
    >
      {props.children}
    </RestaurantsContext.Provider>
  );
};
