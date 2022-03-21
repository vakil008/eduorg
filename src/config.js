export const appConfig = {
  mainDomain: "https://crmleadedu.herokuapp.com",
};
export const middlePoints = "api";

export const endPoints = {
  login: `${middlePoints}/identity/token`,

  all_countries: `${middlePoints}/v1/Settings/GetAllCountry`,
  all_visa_type: `${middlePoints}/v1/Settings/GetAllVisaTypes`,
  all_lead_source: `${middlePoints}/v1/Settings/GetAllLeadSource`,
  all_qualifications: `${middlePoints}/v1/Settings/GetAllQualification`,
};
