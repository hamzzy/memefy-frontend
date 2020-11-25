import axios from "axios";
import React from 'react';
const API_URL = "http://localhost:8000/api/auth/";

const register = (name, email, password) => {
  return axios.post(API_URL + "sign_up", {
    name,
    email,
    password,
  })
};

const login = (email, password) => {
  return axios
    .post(API_URL + "sign_in", {
      email,
      password,
    }).then((response) => {
      if (response.data.tokens) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
    })
    


};

const logout = () => {
  localStorage.removeItem("user");
};

export default {
  register,
  login,
  logout,
};
