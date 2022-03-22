import Api from "../utils/APICaller";
import { endPoints, appConfig } from "../config";
const singin = async (email, password) => {
  try {
    const { login } = endPoints;
    const method = "POST";
    let body = {
      email,
      password,
    };
    const res = await Api(login, method, body);
    return res;
  } catch (error) {
    return error;
  }
};

const Getuni = async () => {
  try {
    const endPoints = appConfig.mainDomain;
    const method = "Get";

    const res = await Api(
      `${endPoints}/v1/Settings/GetAllQualification`,
      method
    );
    return res;
  } catch (error) {
    return error;
  }
};

const GetAllQualification = async () => {
  try {
    const { all_qualifications } = endPoints;

    const res = await Api(all_qualifications);
    return res;
  } catch (error) {
    return error;
  }
};

const GetAllCountry = async () => {
  try {
    const { all_countries } = endPoints;

    const res = await Api(all_countries);
    return res;
  } catch (error) {
    return error;
  }
};

const GetAllVisaTypes = async () => {
  try {
    const { all_visa_type } = endPoints;

    const res = await Api(all_visa_type);
    return res;
  } catch (error) {
    return error;
  }
};

const GetAllLeadSource = async () => {
  try {
    const { all_lead_source } = endPoints;

    const res = await Api(all_lead_source);
    return res;
  } catch (error) {
    return error;
  }
};

const UserService = {
  singin,
  Getuni,
  GetAllQualification,
  GetAllCountry,
  GetAllVisaTypes,
  GetAllLeadSource,
};
export default UserService;
