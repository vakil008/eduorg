import axios from "axios";
import { appConfig } from "../config";
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

export default APICaller;
