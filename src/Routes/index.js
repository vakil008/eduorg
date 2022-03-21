import { Routes, Route } from "react-router-dom";

import PublicLayout from "../layout/publicLayout";
import PrivateLayout from "../layout/privateLayout";
import Login from "../pages/Login";
import Home from "../pages/Home";
import AddUser from "../pages/AddUser";
import Leads from "../pages/Leads";
import AddLead from "../pages/AddLead";

import AddBranch from "../pages/AddBranch";
import "../../src/theme/assets/App.scss";
import Register from "../pages/Login/register";
const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<PublicLayout />}>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
      </Route>
      <Route path="/" element={<PrivateLayout />}>
        <Route exact path="/dashboard" element={<Home />} />
        <Route path="/addUser" element={<AddUser />} />
        <Route path="/Addlead" element={<AddLead />} />
        <Route path="/leads" element={<Leads />} />
        <Route path="/branch" element={<AddBranch />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
