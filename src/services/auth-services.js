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


const forget_password_email=(email)=>{
  return axios.post(API_URL + "request-reset-email",{
    email
  })

};

const reset_password_confirm=(uidb64,token,password)=>{
  const config = {
    headers: {
        'Content-Type': 'application/json'
    }
}

const body = JSON.stringify({ uidb64, token, password}); 
  return axios.patch(`${API_URL}password-reset-complete`, body, config);

}


const verify_email=(token)=>{
  const config = {
    headers: {
        'Content-Type': 'application/json'
    }
}

  const body = JSON.stringify({token}); 
  return axios.post(`${API_URL}email-verify`, body, config);

}


 const updateUser=()=>{

 }

 const forgetpassword=()=>{

 }

export default {
  register,
  login,
  logout,
  forget_password_email,
  reset_password_confirm,
  verify_email
};
