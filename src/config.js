export const appConfig = {
  mainDomain: "https://crmleadedu.herokuapp.com",
};
export const middlePoints = "api";

export const endPoints = {
  login: `${middlePoints}/identity/token`,
  register: `${middlePoints}/identity/register`,
  all_branches: `${middlePoints}/v1/Settings/GetAllBranch`,
  all_countries: `${middlePoints}/v1/Settings/GetAllCountry`,
  all_visa_type: `${middlePoints}/v1/Settings/GetAllVisaTypes`,
  all_lead_source: `${middlePoints}/v1/Settings/GetAllLeadSource`,
  all_qualifications: `${middlePoints}/v1/Settings/GetAllQualification`,
  all_universities: `${middlePoints}/v1/Settings/GetAllUniversity`,
  all_leads_status: `${middlePoints}/v1/Settings/GetAllLeadsStatus`,
  all_leads: `${middlePoints}/v1/Leads`,
  all_user: `${middlePoints}/identity/getalluser`,

  save_branch: `${middlePoints}/v1/Settings/SaveBranch`,
};
