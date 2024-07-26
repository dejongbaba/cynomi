import axios from "@/services";

const getAllMT102Exceptions = () => {
  return axios
    .get("GetAllMT102Exceptions")
    .then((res) => res.data)
    .catch((e) => console.log(e));
};
const getAllMT103Exceptions = () => {
  return axios
    .get("GetAllMT103Exceptions")
    .then((res) => res.data)
    .catch((e) => console.log(e));
};
const getMT102ExceptionById = (id: string) => {
  return axios
    .get(`GetAllMT102ExceptionsById/${id}`)
    .then((res) => res.data)
    .catch((e) => console.log(e));
};

const getMT103ExceptionById = (id: string) => {
  return axios
    .get(`GetAllMT103ExceptionsById/${id}`)
    .then((res) => res.data)
    .catch((e) => console.log(e));
};
const getAllMT900Exceptions = () => {
  return axios
    .get("GetAllMT900Exceptions")
    .then((res) => res.data)
    .catch((e) => console.log(e));
};
const getAllMT910Exceptions = () => {
  return axios
    .get("GetAllMT910Exceptions")
    .then((res) => res.data)
    .catch((e) => console.log(e));
};

const getAllMT900ExceptionById = (id: string) => {
  return axios
    .get(`GetAllMT900ExceptionsById/${id}`)
    .then((res) => res.data)
    .catch((e) => console.log(e));
};
const getAllMT910ExceptionById = (id: string) => {
  return axios
    .get(`GetAllMT910ExceptionsById/${id}`)
    .then((res) => res.data)
    .catch((e) => console.log(e));
};

export {
  getAllMT102Exceptions,
  getMT102ExceptionById,
  getAllMT103Exceptions,
  getMT103ExceptionById,
  getAllMT900ExceptionById,
  getAllMT910Exceptions,
};
