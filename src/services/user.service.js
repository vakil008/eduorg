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

const UserService = {
  singin,
  Getuni,
  GetAllQualification,
};
export default UserService;
