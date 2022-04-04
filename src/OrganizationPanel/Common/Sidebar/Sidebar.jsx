/** @format */

import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import React from "react";
import "react-pro-sidebar/dist/css/styles.css";
import { faFile, faPeopleArrows } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Sidebar.css";
import { useNavigate } from "react-router-dom";

const Sidebar = (props) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="sidebar_in_mobile_view">
        <ProSidebar collapsed={props.isloading}>
          <Menu iconShape="circle">
            {/* <MenuItem onClick={() => navigate("/dashbord")}>Dashboard</MenuItem> */}

            <MenuItem
              title="Orders"
              onClick={() => navigate("/orgAdmin/profile")}
              icon={<FontAwesomeIcon icon={faFile} />}
            >
              Profile
            </MenuItem>
            <MenuItem
              title="Categories"
              icon={<FontAwesomeIcon icon={faFile} />}
              onClick={() => navigate("/orgAdmin/advertisements")}
            >
              {" "}
              Advertisement{" "}
            </MenuItem>
            <MenuItem
              title="Reports"
              icon={<FontAwesomeIcon icon={faFile} />}
              onClick={() => navigate("/orgAdmin/addImagesSystem")}
            >
              {" "}
              Add Images(System)
            </MenuItem>
            <MenuItem
              title="Services"
              icon={<FontAwesomeIcon icon={faFile} />}
              onClick={() => navigate("/orgAdmin/addImagesScript")}
            >
              {" "}
              Add Images (Script)
            </MenuItem>
            <MenuItem
              title="Notifaction"
              icon={<FontAwesomeIcon icon={faFile} />}
              onClick={() => navigate("/orgAdmin/supportAgents")}
            >
              Support Agent
            </MenuItem>
            <MenuItem
              title="Notifaction"
              icon={<FontAwesomeIcon icon={faFile} />}
              onClick={() => navigate("/orgAdmin/videoAgents")}
            >
              Video Agent
            </MenuItem>
            <MenuItem
              title="Notifaction"
              icon={<FontAwesomeIcon icon={faFile} />}
              onClick={() => navigate("/orgAdmin/customers")}
            >
              Customer
            </MenuItem>
            <MenuItem
              title="Notifaction"
              icon={<FontAwesomeIcon icon={faFile} />}
              onClick={() => navigate("/orgAdmin/supportTickets")}
            >
              Support Ticket
            </MenuItem>
            <MenuItem
              title="Notifaction"
              icon={<FontAwesomeIcon icon={faFile} />}
              onClick={() => navigate("/orgAdmin/packages")}
            >
              Packages
            </MenuItem>
            <MenuItem
              title="Notifaction"
              icon={<FontAwesomeIcon icon={faFile} />}
              onClick={() => navigate("/orgAdmin/notify")}
            >
              Notifications
            </MenuItem>
          </Menu>
        </ProSidebar>
      </div>
    </>
  );
};

export default Sidebar;
