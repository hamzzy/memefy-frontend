import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8000/api/meme/";

const getPublicmeme = () => {
  return axios.get(API_URL + "meme_list");
};

const PostMeme =(title,file,meme_type,meme_cat)=>{
  return axios.Post(API_URL + "meme",{
    title,
    file,
    meme_type,
    meme_cat
  } ,{ headers: authHeader() });
};

const UserDeleteMeme=()=>{
// axios.delete()
}

const UserMeme=()=>{
    return axios.get(API_URL + "meme",{ headers: authHeader() });

}

const MemeCat=()=>{
    return axios.get(API_URL + "cat_meme");

}

export default {
  getPublicmeme,
  UserMeme,
  PostMeme,
  MemeCat
 
};