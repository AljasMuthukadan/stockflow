import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001/", //   backend API URL
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;