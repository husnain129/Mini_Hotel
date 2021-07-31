import React, { useContext } from "react";
import { RestaurantsContext } from "../context/RestaurantContext";
import StarRating from "./StarRating";

function Reviews({ id }) {
  const { reviews } = useContext(RestaurantsContext);
  let avg = 0;
  if (reviews) {
    avg =
      reviews.reduce((prev, curr) => prev + curr.rating, 0) / reviews.length;
  }
  return (
    <>
      <span>
        <StarRating rating={avg} />
      </span>
      <div
        className="row row-cols-3 mt-5 mb-2"
        style={{
          width: "90%",
        }}
      >
        {reviews?.map((r, i) => (
          <div
            key={i}
            className="card text-white bg-primary mb-3 mx-2"
            style={{ maxWidth: "30%" }}
          >
            <div className="card-header d-flex justify-content-between">
              <span>{r.name}</span>
              <span>
                <StarRating rating={r.rating} />
              </span>
            </div>
            <div className="card-body">
              <p className="card-text">{r.review}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Reviews;

//find average rating
