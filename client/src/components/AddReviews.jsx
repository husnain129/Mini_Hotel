import React, { useContext, useState } from "react";
import { RestaurantsContext } from "../context/RestaurantContext";
import UseRestaurant from "../hooks/UseRestaurant";

const AddReview = ({ id }) => {
  const { updateReviews } = useContext(RestaurantsContext);

  const [name, setName] = useState("");
  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState("Rating");

  const api = UseRestaurant();
  const reviewHandler = (e) => {
    e.preventDefault();
    const review = {
      restaurant_id: id,
      name: name,
      review: reviewText,
      rating: rating,
    };
    (async () => {
      await api
        .addReview(id, review)
        .then((res) => updateReviews(res.restaurant));
    })();
    setName("");
    setReviewText("");
    setRating("Rating");
  };
  return (
    <div className="my-2 " style={{ width: "87%" }}>
      <form
        action=""
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "10px",
        }}
      >
        <div
          className="form-row"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            gap: "10px",
          }}
        >
          <div className="form-group col-8">
            <label htmlFor="name">Name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              id="name"
              placeholder="name"
              type="text"
              className="form-control"
            />
          </div>
          <div className="form-group col-4">
            <label htmlFor="rating">Rating</label>
            <select
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              id="rating"
              className="custom-select form-control"
            >
              <option disabled>Rating</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="Review">Review</label>
          <textarea
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            id="Review"
            className="form-control"
          ></textarea>
        </div>
        <button
          type="submit"
          onClick={reviewHandler}
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddReview;
