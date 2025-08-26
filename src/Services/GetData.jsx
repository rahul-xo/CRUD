import axios from "axios";

const baseURL="https://jsonplaceholder.typicode.com";
const api=axios.create({
    baseURL
})

export const getPost=()=>{
    return api.get("/posts");
    
}