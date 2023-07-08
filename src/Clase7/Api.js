import axios from "axios"

const base = axios.create({
    baseURL:"https://jsonplaceholder.typicode.com"
});

export default base;