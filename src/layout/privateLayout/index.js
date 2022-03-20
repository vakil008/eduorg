import { Outlet } from "react-router";
// import { Navigate } from "react-router-dom";
import AppHeader from "./header";
import { useSelector } from "react-redux";

const PrivateLayout = () => {
  const loginTokenRes = useSelector((state) => state.user.loginToken);
  console.log("loginTokenRes", loginTokenRes);
  return (
    <>
     <div className="private-pages">
          <AppHeader />
            <Outlet />
        </div>
      {/* {loginTokenRes ? (
        <div className="private-pages">
          <AppHeader />
          <div>
            <Outlet />
          </div>
        </div>
      ) : (
        <Navigate to="/" />
      )} */}
    </>
  );
};

export default PrivateLayout;
