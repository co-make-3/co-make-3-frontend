import axios from "axios";

export const axiosWithAuth = () => {
  const token = localStorage.getItem("token");
  return axios.create({
    baseURL: "https://co-make-3.herokuapp.com/",
    headers: {
      authorization: token,
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    }
  });
};

