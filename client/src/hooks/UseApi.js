import axios from "axios";

const UseApi = () => {
  let baseUrl = "http://localhost:3001";
  return {
    get: async (endPoint) => {
      try {
        const { data } = await axios.get(`${baseUrl}/api/v1${endPoint}`);
        if (data.status === "success") return data;
      } catch (error) {
        console.log("err", error);
        throw error;
      }
    },
    post: async (endPoint, value) => {
      try {
        const { data } = await axios.post(
          `${baseUrl}/api/v1${endPoint}`,
          value
        );
        return data;
      } catch (error) {
        console.log("err", error);
        throw error;
      }
    },
    patch: async (endPoint, value) => {
      try {
        const { data } = await axios.patch(
          `${baseUrl}/api/v1${endPoint}`,
          value
        );
        return data;
      } catch (error) {
        console.log("err", error);
        throw error;
      }
    },
    delete: async (endPoint) => {
      try {
        const { data } = await axios.delete(`${baseUrl}/api/v1${endPoint}`);
        return data;
      } catch (error) {
        console.log("err", error);
        throw error;
      }
    },
  };
};

export default UseApi;
