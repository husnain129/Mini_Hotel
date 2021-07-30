import React, { useContext, useState } from "react";
import { RestaurantsContext } from "../context/RestaurantContext";
import UseRestaurant from "../hooks/UseRestaurant";

const AddRestaurant = () => {
  const { addRes } = useContext(RestaurantsContext);

  const api = UseRestaurant();
  const [name, setName] = useState();
  const [location, setLocation] = useState();
  const [price_range, setPriceRange] = useState();
  const submitHandler = (e) => {
    e.preventDefault();
    api
      .addRestaurant({
        name,
        location,
        price_range,
      })
      .then((res) => addRes(res.restaurant));
  };
  return (
    <div
      className="mb-4 my-4"
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <form action="">
        <div
          className="form-row"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            width: "100%",
            gap: "5px",
          }}
        >
          <div className="col">
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              type="text"
              className="form-control"
              placeholder="name"
            />
          </div>
          <div className="col">
            <input
              onChange={(e) => setLocation(e.target.value)}
              value={location}
              className="form-control"
              type="text"
              placeholder="location"
            />
          </div>
          <div className="row mx-2">
            <select
              onChange={(e) => setPriceRange(e.target.value)}
              value={price_range}
              className="form-control custom-select my-1 mr-sm-2"
            >
              <option default style={{ height: "50px" }}>
                Price Range
              </option>
              <option value="1">$</option>
              <option value="2">$$</option>
              <option value="3">$$$</option>
              <option value="4">$$$$</option>
              <option value="5">$$$$$</option>
            </select>
          </div>
          <button
            onClick={submitHandler}
            type="submit"
            className="btn btn-primary px-4"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddRestaurant;
