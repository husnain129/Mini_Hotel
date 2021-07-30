import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import UseRestaurant from "../hooks/UseRestaurant";

function UpdateRestaurant() {
  const { id } = useParams();
  const [name, setName] = useState();
  const [location, setLocation] = useState();
  const [price_range, setPriceRange] = useState();
  const api = UseRestaurant();
  const history = useHistory();
  const submitHandler = (e, id) => {
    e.preventDefault();
    api
      .updateRestaurant(id, {
        name,
        location,
        price_range,
      })
      .then((res) => {
        if (res.status === "success") {
          history.push("/");
        }
      });
  };
  return (
    <div
      className="my-5"
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <form
        action=""
        style={{
          width: "50%",
          display: "flex",
          flexDirection: "column",
          gap: "12px",
        }}
      >
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            id="name"
            className="form-control"
            type="text"
          />
        </div>

        <div className="form-group">
          <label htmlFor="location">Location</label>
          <input
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            id="location"
            className="form-control"
            type="text"
          />
        </div>
        <div className="form-group">
          <label htmlFor="price_range">Price Range</label>
          <input
            value={price_range}
            onChange={(e) => setPriceRange(e.target.value)}
            id="price_range"
            className="form-control"
            type="number"
          />
        </div>
        <button
          type="submit"
          onClick={(e) => submitHandler(e, id)}
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default UpdateRestaurant;
