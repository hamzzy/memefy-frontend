import axios from "axios";
import React from 'react';
import authHeader from "./auth-header";

const API_URL = "http://localhost:8000/api/auth/";

const config = {
  headers: {
      'Content-Type': 'application/json'
  }
}

const config_auth={ headers: authHeader() }


/*  Register service     */
const register = (name, email, password) => {
  return axios.post(API_URL + "sign_up", {
    name,
    email,
    password,
  },config)
};



/*  Login services     */

const login = (email, password) => {
  return axios
    .post(API_URL + "sign_in", {
      email,
      password,
    },config).then((response) => {
      if (response.data.tokens) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
    })
    


};



/*  LogOut service     */

const logout = () => {
  localStorage.removeItem("user");
};



/*  send email for Forget password      */

const forget_password_email=(email)=>{
  return axios.post(API_URL + "request-reset-email",{
    email
  },config)

};


/*  Reseting password services    */

const reset_password_confirm=(uidb64,token,password)=>{
  

const body = JSON.stringify({ uidb64, token, password}); 
  return axios.patch(`${API_URL}password-reset-complete`, body, config);

}


/*  email Verification services   */

const verify_email=(token)=>{
  

  const body = JSON.stringify({token}); 
  return axios.post(`${API_URL}email-verify`, body, config);

}

/*  User details Updating services   */

 const updateUser=(email,name)=>{
  const body = JSON.stringify({email,name}); 
  return axios.put(`${API_URL}update-user`, body, config_auth);
 }

 /*  forget password  services   */

 const forgetpassword=(old_password,new_password)=>{
  const body = JSON.stringify({old_password,new_password}); 
  return axios.put(`${API_URL}update-user`, body, config_auth);
 }

 

export default {
  register,
  login,
  logout,
  forget_password_email,
  reset_password_confirm,
  verify_email,
  updateUser
};
