/** @format */

import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./AdminPanel/components/Login/Login";
import { useEffect } from "react";
import OrgAdmin from "./AdminPanel/components/orgAdmin/OrgAdmin";
import Profile from "./AdminPanel/components/profile/Profile";
import SubAdmin from "./AdminPanel/components/subAdmin/SubAdmin";
import OrgProfile from "./OrganizationPanel/components/orgProfile/OrgProfile";
import AddImagesSystem from "./OrganizationPanel/components/addImagesSystem/AddImagesSystem";
import Advertisements from "./OrganizationPanel/components/advertisements/Advertisements";
import SupportAgents from "./OrganizationPanel/components/supportAgents/SupportAgents";
import AddImagesScript from "./OrganizationPanel/components/addImagesScript/AddImagesScript";
import VideoAgents from "./OrganizationPanel/components/videoAgents/VideoAgents";
import Customers from "./OrganizationPanel/components/customers/Customers";
import SupportTickets from "./OrganizationPanel/components/supportTickets/SupportTickets";
import Packages from "./OrganizationPanel/components/packages/Packages";
import Notify from "./OrganizationPanel/components/notify/Notify";
import VideoProfile from "./VideoAgentPanel/components/profile/VideoProfile";
import History from "./VideoAgentPanel/components/history/History";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Routes>
        {/* <-----------------Admin-Panel------------------>  */}
        <Route path="/" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/orgAdmins" element={<OrgAdmin />} />
        <Route path="/createSubAdmin" element={<SubAdmin />} />

        <Route path="/orgAdmin/profile" element={<OrgProfile />} />
        <Route path="/orgAdmin/addImagesSystem" element={<AddImagesSystem />} />
        <Route path="/orgAdmin/addImagesScript" element={<AddImagesScript />} />
        <Route path="/orgAdmin/advertisements" element={<Advertisements />} />
        <Route path="/orgAdmin/supportAgents" element={<SupportAgents />} />
        <Route path="/orgAdmin/videoAgents" element={<VideoAgents />} />
        <Route path="/orgAdmin/customers" element={<Customers />} />
        <Route path="/orgAdmin/supportTickets" element={<SupportTickets />} />
        <Route path="/orgAdmin/packages" element={<Packages />} />
        <Route path="/orgAdmin/notify" element={<Notify />} />
        <Route path="/videoAgent/profile" element={<VideoProfile />} />
        <Route path="/videoAgent/history" element={<History />} />
        {/* <Route path="/videoAgent/tickets" element={<VideoAgentsTicket />} /> */}
      </Routes>
    </>
  );
}

export default App;
