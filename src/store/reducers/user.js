import ActionTypes from "../constants";

const initialState = {
  userID: "",
  userLogin: "",
  userPhone: "",
  userName: "",
  userEmail: "",
  userType: "",
  loginToken: "",
  roles:[]
};

const User = (state = initialState, action) => {
  console.log(action.type);
  switch (action.type) {
    case ActionTypes.STORE_USER_DETAIL:
      const {
        userLogin,
        userType,
        userID,
        userName,
        userPhone,
        userEmail,
        loginToken,
        roles
      } = action.payload;
      console.log("user detil in redux", action.payload);
      return Object.assign({}, state, {
        userLogin,
        userType,
        userID,
        userName,
        userPhone,
        userEmail,
        loginToken,
        roles
      });

    case ActionTypes.SET_USER_TOKEN:
      console.log("User Token saved", action.payload);
      return Object.assign({}, state, {
        loginToken: action.payload,
      });

      case ActionTypes.SET_USER_ROLE:
      console.log("User roles", action.payload);
      return Object.assign({}, state, {
        roles: action.payload,
      });

    case ActionTypes.SET_NOTIFICATION_COUNTER:
      console.log("counter of notification", action.payload);
      return Object.assign({}, state, {
        notificationCounter: action.payload,
      });

    default:
      return state;
  }
};

export default User;
