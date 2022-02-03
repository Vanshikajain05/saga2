import axios from "axios";

// const userapi = axios.create({
//   baseURL: "http://localhost:3000/",
// });

export const userapi = async () => {
  const response = await axios.get("http://jsonplaceholder.typicode.com/users");
  console.log(response);
  return response;
};

export const addUserApi = async (name) => {
  const response = await axios.post(
    "http://jsonplaceholder.typicode.com/users",
    name
  );
  return response;
};

export const delUserApi = async (id) => {
  console.log(id);
  const response = await axios.delete(
    `http://jsonplaceholder.typicode.com/users/${id}`
  );
  console.log(response);
  return response;
};

export const editUserApi = async (id) => {
  console.log(id);
  const response = await axios.put(
    `http://jsonplaceholder.typicode.com/users/${id}`
  );
  console.log(response);
  return response;
};
//export default userapi;
