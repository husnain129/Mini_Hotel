import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { RestaurantsContext } from "../context/RestaurantContext";
import UseRestaurant from "../hooks/UseRestaurant";
const RestaurantList = () => {
  const { restaurants, setRestaurants, delRes } =
    useContext(RestaurantsContext);
  let history = useHistory();
  const api = UseRestaurant();
  useEffect(() => {
    (async () => {
      await api.getAll().then((data) => setRestaurants(data.restaurants));
    })();
  }, []);
  const deleteRestaurant = (id) => {
    (async () => {
      await api.deleteOne(id).then((res) => {
        if (res.status === "success") {
          delRes(id);
        }
      });
    })();
  };
  const handleUpdate = (id) => {
    history.push(`/restaurant/${id}/update`);
  };
  restaurants && console.log(restaurants);
  return (
    <div className="list-group mx-5">
      <table className="table table-hover table-dark">
        <thead>
          <tr className="bg-primary">
            <th scope="col">Restaurant</th>
            <th scope="col">Location</th>
            <th scope="col">Price Range</th>
            <th scope="col">Ratings</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {restaurants &&
            restaurants.map((res, ind) => (
              <tr key={ind}>
                <td>{res.name}</td>
                <td>{res.location}</td>
                <td>{"$".repeat(res.price_range)}</td>
                <td>*****</td>
                <td>
                  <button
                    onClick={() => handleUpdate(res.id)}
                    className="btn btn-warning"
                  >
                    Update
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteRestaurant(res.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default RestaurantList;
