import axios from "axios";

export default axios.create({
  baseURL: "https://625b0e12398f3bc782a9b2a0.mockapi.io/api/",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json; charset=UTF-8",
  },
});