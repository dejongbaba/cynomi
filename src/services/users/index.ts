import axios from "@/services";

const getUserChartById = (id: string) => {
    return axios
        .get(`${id}`)
        .then((res) => res.data)
        .catch((e) => console.log(e));
};
const getUsers = () => {
    return axios
        .get("users")
        .then((res) => res.data)
        .catch((e) => console.log(e));
};
const getUserByEmail = (email: string) => {
    return axios
        .get(`users/${email}`)
        .then((res) => res.data)
        .catch((e) => console.log(e));
};

const createUser = (data: { string }) => {
    return axios
        .post(`users/`, data)
        .then((res) => res.data)
        .catch((e) => console.log(e));
};


export {
    getUsers, getUserChartById, createUser, getUserByEmail
};
