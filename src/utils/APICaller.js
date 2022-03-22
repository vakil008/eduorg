import axios from "axios";
import { useSelector } from "react-redux";
import { appConfig } from "../config";
import { store } from "../store";
const { mainDomain } = appConfig;

 const Api = async (endpoint,isauthenticated, method, body, contentType) => {
  try {


    var newState = store.getState().user.loginToken;
    let headers={
      Accept: "application/json",
      "Content-Type": contentType || "application/json",
    };
    if(isauthenticated){
      headers = {
        Authorization: `Bearer  ${newState}`,
        Accept: "application/json",
        "Content-Type": contentType || "application/json",
      }
    }
   

    const response = await axios({
      url: `${mainDomain}/${endpoint}`,
      method: method || "GET",
      data: body,
      headers:headers,
      responseType: "json",
    });

    return response;
  } catch (error) {
    if (error.response !== undefined) {
      const errObj = error.response.body;
      return errObj; // return success to frontend
    }
    return error;
  }
};

store.subscribe(Api);

export default Api;
