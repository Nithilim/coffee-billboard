import Axios from "axios";

Axios.defaults.baseURL = "http://localhost:5000/api";

const Coffee = {
    getAll: () => {
        return Axios.get("/CoffeeList");
    },
    generateRandom: () => {
        return Axios.get("/RandomSeed");
    },
    details: (id) => {
        return Axions.get(`/CoffeeList/${id}`);
    },
    create: (coffeeItem) => {
        return Axios.post("/CoffeeList", coffeeItem);
    },
    delete: (id) => {
        return Axios.delete(`/CoffeeList/${id}`);
    }
}

export default{
    Coffee
};