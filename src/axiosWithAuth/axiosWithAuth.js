import axios from "axios";

export const axiosWithAuth = () => {
  const token = localStorage.getItem("token");
  return axios.create({
    baseURL: "http://co-make-3.herokuapp.com/",
    headers: {
      authorization: token
    }
  });
};

