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
    const res = await Api(login,false, method, body);
    return res;
  } catch (error) {
    return error;
  }
};



const GetAllQualification = async () => {
  try {
    const { all_qualifications } = endPoints;

    const res = await Api(all_qualifications,false);
    return res;
  } catch (error) {
    return error;
  }
};

const GetAllCountry = async () => {
  try {
    const { all_countries } = endPoints;

    const res = await Api(all_countries,false);
    return res;
  } catch (error) {
    return error;
  }
};

const GetAllVisaTypes = async () => {
  try {
    const { all_visa_type } = endPoints;

    const res = await Api(all_visa_type,false);
    return res;
  } catch (error) {
    return error;
  }
};

const GetAllLeadSource = async () => {
  try {
    const { all_lead_source } = endPoints;

    const res = await Api(all_lead_source,false);
    return res;
  } catch (error) {
    return error;
  }
};

const GetAllBranch = async () => {
  try {
    const { all_branches } = endPoints;

    const res = await Api(all_branches,false);
    return res;
  } catch (error) {
    return error;
  }
};

const GetAllLeadsStatus = async () => {
  try {
    const { all_leads_status } = endPoints;

    const res = await Api(all_leads_status,false);
    return res;
  } catch (error) {
    return error;
  }
};

const GetAllLead = async () => {
  try {
    const { all_leads } = endPoints;

    const res = await Api(all_leads,true);
    return res;
  } catch (error) {
    return error;
  }
};

const UserService = {
  singin,
  GetAllQualification,
  GetAllCountry,
  GetAllVisaTypes,
  GetAllLeadSource,
  GetAllBranch,
  GetAllLeadsStatus,
  GetAllLead
};
export default UserService;
