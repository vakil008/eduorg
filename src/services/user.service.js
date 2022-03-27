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
    const res = await Api(login, false, method, body);
    return res;
  } catch (error) {
    return error;
  }
};

const GetAllQualification = async () => {
  try {
    const { all_qualifications } = endPoints;

    const res = await Api(all_qualifications, false);
    return res;
  } catch (error) {
    return error;
  }
};

const GetAllCountry = async () => {
  try {
    const { all_countries } = endPoints;

    const res = await Api(all_countries, false);
    return res;
  } catch (error) {
    return error;
  }
};

const GetAllVisaTypes = async () => {
  try {
    const { all_visa_type } = endPoints;

    const res = await Api(all_visa_type, false);
    return res;
  } catch (error) {
    return error;
  }
};

const GetAllLeadSource = async () => {
  try {
    const { all_lead_source } = endPoints;

    const res = await Api(all_lead_source, false);
    return res;
  } catch (error) {
    return error;
  }
};

const GetAllBranch = async () => {
  try {
    const { all_branches } = endPoints;

    const res = await Api(all_branches, false);
    return res;
  } catch (error) {
    return error;
  }
};

const GetAllLeadsStatus = async () => {
  try {
    const { all_leads_status } = endPoints;

    const res = await Api(all_leads_status, false);
    return res;
  } catch (error) {
    return error;
  }
};

const GetAllLead = async () => {
  try {
    const { all_leads } = endPoints;

    const res = await Api(all_leads, true);
    return res;
  } catch (error) {
    return error;
  }
};

const GetAllUniversity = async () => {
  try {
    const { all_universities } = endPoints;

    const res = await Api(all_universities, true);
    return res;
  } catch (error) {
    return error;
  }
};

const SaveBranch = async (
  name,
  emailAddress,
  mobileNumber,
  city,
  address,
  description
) => {
  const method = "POST";
  let body = {
    name,
    emailAddress,
    mobileNumber,
    city,
    address,
    description,
  };
  try {
    const { save_branch } = endPoints;

    const res = await Api(save_branch, true, method, body);
    return res;
  } catch (error) {
    return error;
  }
};



const SaveUser = async (
   firstName,lastName, userName, email, password, confirmPassword,roles,branchId,
) => {
  const method = "POST";
  let body = {
    branchId,
     firstName,
     lastName, 
     userName,
      email,
       password, 
       confirmPassword,roles
  };
  try {
    const { register } = endPoints;

    const res = await Api(register, true, method, body);
    return res;
  } catch (error) {
    return error;
  }
};


const Saveleadr = async (lead) => {
 const method = "POST";
 
 try {
   const { all_save_leads } = endPoints;

   const res = await Api(all_save_leads, true, method, lead);
   return res;
 } catch (error) {
   return error;
 }
};

const GetAllUser = async () => {
  try {
    const { all_user } = endPoints;

    const res = await Api(all_user, true);
    return res;
  } catch (error) {
    return error;
  }
};

const GetLeadbyid = async (id) => {
  try {
    const { get_leadbyid } = endPoints;

    const res = await Api(`${get_leadbyid}?id=${id}`, true);
    return res;
  } catch (error) {
    return error;
  }
};

const GetUserbyBranchid = async (id) => {
  try {
    const { get_user_by_branch } = endPoints;

    const res = await Api(`${get_user_by_branch}?id=${id}`, true);
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
  GetAllLead,
  SaveBranch,
  GetAllUniversity,
  SaveUser,
  GetAllUser,
  GetLeadbyid,
  Saveleadr,
  GetUserbyBranchid

};
export default UserService;
