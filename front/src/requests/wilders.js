import axios from "axios";

export const wildersRequest = {
  getAll: () =>
    axios
      .get("/api/wilder/readAll")
      .then((res) => res)
      .catch((err) => err),
  create: (data) =>
    axios
      .post(`/api/wilder/create`, data)
      .then((res) => res)
      .catch((err) => err),
};
