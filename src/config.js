export const appConfig = {
  mainDomain: "https://crmleadedu.herokuapp.com",
};
export const middlePoints = "api";

export const endPoints = {
  login: `${middlePoints}/identity/token`,
  all_branches: `${middlePoints}/v1/Settings/GetAllBranch`,
  all_countries: `${middlePoints}/v1/Settings/GetAllCountry`,
  all_visa_type: `${middlePoints}/v1/Settings/GetAllVisaTypes`,
  all_lead_source: `${middlePoints}/v1/Settings/GetAllLeadSource`,
  all_qualifications: `${middlePoints}/v1/Settings/GetAllQualification`,
  all_leads_status: `${middlePoints}/v1/Settings/GetAllLeadsStatus`,
};
