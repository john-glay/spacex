import { get } from "../../util/https";

export const getAllList = () => {
  const url = "/launches/";
  return new Promise((resolve, reject) => {
    const promise = get(url);
    promise
      .then((response) => {
        resolve({
          type: "SET_LIST",
          payload: response,
        });
      })
      .catch((error) => {
        reject(error);
      });
  });
};