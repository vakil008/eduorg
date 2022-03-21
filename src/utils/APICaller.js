import axios from "axios";
import { useSelector } from "react-redux";
import { appConfig } from "../config";
import { store } from "../store";
const { mainDomain } = appConfig;

const APICaller = (endpoint, method, body, contentType) =>
  axios({
    url: `${mainDomain}/${endpoint}`,
    method: method || "GET",
    data: body,
    headers: {
      Authorization: "WVdzdGVXOTFkSFZpWlMxdGIyUjFiR1ZBZG1scmNtRnQ=",
      Accept: "application/json",
      "Content-Type": contentType || "application/json",
    },
    responseType: "json",
  })
    .then((response) => {
      console.log(`response from ${mainDomain}/${endpoint} >> ${response}`);
      return response;
    })
    .catch((error) => {
      console.log(`Error from ${mainDomain}/${endpoint}>> ${error}`);

      throw error.response;
    });

export const Api = async (endpoint, method, body, contentType) => {
  try {
    var newState = store.getState();

    const response = await axios({
      url: `${mainDomain}/${endpoint}`,
      method: method || "GET",
      data: body,
      headers: {
        Authorization: `Bearer  ${newState.user.loginToken}`,
        Accept: "application/json",
        "Content-Type": contentType || "application/json",
      },
      responseType: "json",
    });

    return await response.json();
  } catch (error) {
    if (error.response !== undefined) {
      const errObj = error.response.body;
      return errObj; // return success to frontend
    }
    return error;
  }
};

store.subscribe(Api);

export default APICaller;
