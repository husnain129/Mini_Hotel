import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import AddReview from "../components/AddReviews";
import Reviews from "../components/Reviews";
import { RestaurantsContext } from "../context/RestaurantContext";
import UseRestaurant from "../hooks/UseRestaurant";

const RestaurantDetailPage = () => {
  const { reviews, setReviews } = useContext(RestaurantsContext);
  const { id, name } = useParams();
  const api = UseRestaurant();
  useEffect(() => {
    (async () => {
      await api.getReviews(id).then((data) => {
        if (data.status === "success") {
          setReviews(data.result.restaurant);
        }
      });
    })();
  }, []);

  return (
    <div
      className="container"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <h1>{reviews[0]?.restaurant_name || name}</h1>
      <Reviews id={id} />
      <AddReview id={id} />
    </div>
  );
};

export default RestaurantDetailPage;
