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
import Signup from "./AdminPanel/components/Login/Signup";
import Change from "./AdminPanel/components/Login/Change";
import OrgLogin from "./OrganizationPanel/components/orgLogin/OrgLogin";
import SupportProfile from "./SupportAgentPanel/components/profile/SupportProfile";
import SupportLogin from "./SupportAgentPanel/components/login/SupportLogin";
import SupportForgot from "./SupportAgentPanel/components/forgot/SupportForgot";
import SupportResetPass from "./SupportAgentPanel/components/reset/SupportResetPass";
import SupportAgentTickets from "./SupportAgentPanel/tickets/SupportAgentTickets";
import VideoLogin from "./VideoAgentPanel/login/VideoLogin";
import VideoForgot from "./VideoAgentPanel/components/forgot/VideoForgot";
import VideoReset from "./VideoAgentPanel/components/reset/VideoReset";
import Notification from "./OrganizationPanel/components/notify/Notification";
import ViewSingleProfile from "./OrganizationPanel/components/videoAgents/ViewSingleProfile";
import ViewImage from "./OrganizationPanel/components/videoAgents/ViewImage";
import ViewSingleTicket from "./OrganizationPanel/components/supportTickets/ViewSingleTicket";
import Ticket from "./SupportAgentPanel/tickets/Ticket";
import VideoAgentImages from "./VideoAgentPanel/components/videoAgentImages/VideoAgentImages";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Routes>
        {/* <-----------------Admin-Panel------------------>  */}
        {/* <Route path="/" element={<Signup />} /> */}
        <Route path="/" element={<Login />} />
        <Route path="/forgot" element={<Change />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/orgAdmins" element={<OrgAdmin />} />
        <Route path="/createSubAdmin" element={<SubAdmin />} />

        <Route path="/orgAdmin/login" element={<OrgLogin />} />

        <Route path="/orgAdmin/profile" element={<OrgProfile />} />
        <Route path="/orgAdmin/addImagesSystem" element={<AddImagesSystem />} />
        <Route path="/orgAdmin/addImagesScript" element={<AddImagesScript />} />
        <Route path="/orgAdmin/advertisements" element={<Advertisements />} />
        <Route path="/orgAdmin/supportAgents" element={<SupportAgents />} />
        <Route path="/orgAdmin/videoAgents" element={<VideoAgents />} />
        <Route
          path="/orgAdmin/videoAgentsProfile/:id"
          element={<ViewSingleProfile />}
        />
        <Route path="/orgAdmin/videoAgentsImages/:id" element={<ViewImage />} />
        <Route path="/orgAdmin/customers" element={<Customers />} />
        <Route path="/orgAdmin/supportTickets" element={<SupportTickets />} />
        <Route
          path="/orgAdmin/supportTickets/view/:id"
          element={<ViewSingleTicket />}
        />
        <Route path="/orgAdmin/packages" element={<Packages />} />
        <Route path="/orgAdmin/notify" element={<Notify />} />
        <Route path="/orgAdmin/notification/:id" element={<Notification />} />
        <Route path="/supportAgent/login" element={<SupportLogin />} />
        <Route path="/supportAgent/forgot" element={<SupportForgot />} />
        <Route path="/supportAgent/reset" element={<SupportResetPass />} />
        <Route path="/supportAgent/tickets" element={<SupportAgentTickets />} />
        <Route path="/supportAgent/ticket/:id" element={<Ticket />} />
        <Route path="/supportAgent/profile" element={<SupportProfile />} />
        <Route path="/videoAgent/login" element={<VideoLogin />} />
        <Route path="/videoAgent/forgot" element={<VideoForgot />} />
        <Route path="/videoAgent/reset" element={<VideoReset />} />
        <Route path="/videoAgent/profile" element={<VideoProfile />} />
        <Route path="/videoAgent/history" element={<History />} />
        <Route path="/videoAgent/images" element={<VideoAgentImages />} />
        {/* <Route path="/videoAgent/tickets" element={<VideoAgentsTicket />} /> */}
      </Routes>
    </>
  );
}

export default App;
