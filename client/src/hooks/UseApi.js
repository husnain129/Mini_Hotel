import axios from "axios";

const UseApi = () => {
  let baseUrl = `${window.location.origin}baseUrl`;
  return {
    get: async (endPoint) => {
      try {
        const { data } = await axios.get(`${baseUrl}${endPoint}`);
        if (data.status === "success") return data;
      } catch (error) {
        console.log("err", error);
        throw error;
      }
    },
    post: async (endPoint, value) => {
      try {
        const { data } = await axios.post(`${baseUrl}${endPoint}`, value);
        return data;
      } catch (error) {
        console.log("err", error);
        throw error;
      }
    },
    patch: async (endPoint, value) => {
      try {
        const { data } = await axios.patch(`${baseUrl}${endPoint}`, value);
        return data;
      } catch (error) {
        console.log("err", error);
        throw error;
      }
    },
    delete: async (endPoint) => {
      try {
        const { data } = await axios.delete(`${baseUrl}${endPoint}`);
        return data;
      } catch (error) {
        console.log("err", error);
        throw error;
      }
    },
  };
};

export default UseApi;
