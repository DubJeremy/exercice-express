import axios from "axios";

export const wildersRequest = {
  getAll: () =>
    axios
      .get("/api/wilder/readAll")
      .then((res) => res)
      .catch((err) => err)
};
