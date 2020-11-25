import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8000/api/meme/";

const getPublicmeme = () => {
  return axios.get(API_URL + "meme_list");
};

function PostMeme () {
  return axios.Post(API_URL + "meme", { headers: authHeader() });
};

const UserDeleteMeme=()=>{
// axios.delete()
}

const UserMeme=()=>{
    return axios.get(API_URL + "meme_list",{ headers: authHeader() });

}

const MemeCat=()=>{
    return axios.get(API_URL + "cat_meme");

}

export default {
  getPublicmeme,
 
};