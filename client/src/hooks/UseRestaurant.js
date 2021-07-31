import UseApi from "./UseApi";

function UseRestaurant() {
  const api = UseApi();
  return {
    getAll: async () => {
      try {
        const { data } = await api.get("/restaurants");
        return data;
      } catch (error) {
        console.log("error getProfile", error);
        return [];
      }
    },
    getOne: async (id) => {
      try {
        const data = await api.get(`/restaurants/${id}`);
        return data;
      } catch (error) {
        console.log("error getProfile", error);
        return [];
      }
    },
    getReviews: async (id) => {
      try {
        const data = await api.get(`/restaurants/${id}/reviews`);
        return data;
      } catch (error) {
        console.log("error getProfile", error);
        return [];
      }
    },
    deleteOne: async (id) => {
      try {
        const data = await api.delete(`/restaurants/${id}`);
        return data;
      } catch (error) {
        console.log("error getProfile", error);
        return [];
      }
    },
    addRestaurant: async (value) => {
      try {
        const data = await api.post("/restaurants", value);
        return data.result;
      } catch (error) {
        console.log("error getProfile", error);
        return [];
      }
    },
    addReview: async (id, value) => {
      try {
        const data = await api.post(`/restaurants/${id}/review`, value);
        return data.result;
      } catch (error) {
        console.log("error getProfile", error);
        return [];
      }
    },
    updateRestaurant: async (id, value) => {
      try {
        const data = await api.patch(`/restaurants/${id}`, value);
        return data;
      } catch (error) {
        console.log("error getProfile", error);
        return [];
      }
    },
  };
}

export default UseRestaurant;
