import axios from "axios";

export const wildersRequest = {
  getAll: () =>
    axios
      .get("/api/wilder/readAll")
      .then((res) => res)
      .catch((err) => err),
  find: (id) =>
    axios
      .get(`/api/wilder/readOne/${id}`)
      .then((res) => res)
      .catch((err) => err),
  create: (data) =>
    axios
      .post(`/api/wilder/create`, data)
      .then((res) => res)
      .catch((err) => err),
  update: (data) =>
    axios
      .put(`/api/wilder/update`, data)
      .then((res) => res)
      .catch((err) => err),
  delete: (id, data) =>
    axios
      .delete(`/api/wilder/delete/${id}`, {data: {...data}})
      .then((res) => res)
      .catch((err) => err),
};
