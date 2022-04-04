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
            <MenuItem onClick={() => navigate("/dashbord")}>Dashboard</MenuItem>
            <MenuItem
              title="Orders"
              onClick={() => navigate("/orgAdmins")}
              icon={<FontAwesomeIcon icon={faFile} />}
            >
              Org.Admins
            </MenuItem>
            <MenuItem
              title="Orders"
              onClick={() => navigate("/profile")}
              icon={<FontAwesomeIcon icon={faFile} />}
            >
              Profile
            </MenuItem>
            <MenuItem
              title="Categories"
              icon={<FontAwesomeIcon icon={faFile} />}
              onClick={() => navigate("/createSubAdmin")}
            >
              {" "}
              Sub Admin{" "}
            </MenuItem>
            <MenuItem
              title="Reports"
              icon={<FontAwesomeIcon icon={faFile} />}
              // onClick={() => navigate("/reports")}
            >
              {" "}
              Roles and Permission
            </MenuItem>
            <MenuItem
              title="Services"
              icon={<FontAwesomeIcon icon={faFile} />}
              // onClick={() => navigate("/services")}
            >
              {" "}
              Add New Role
            </MenuItem>
            {/* <MenuItem
              title="Notifaction"
              icon={<FontAwesomeIcon icon={faFile} />}
              onClick={() => navigate("/admin-notificatin")}
            >
              Push-Notifaction
            </MenuItem>
            <SubMenu title="Setting" icon={<FontAwesomeIcon icon={faFile} />}>
              <MenuItem onClick={() => navigate("/admin-profile")}>
                Profile Settings
              </MenuItem>
              <MenuItem onClick={() => navigate("/terms-conditions")}>
                Terms & Condition
              </MenuItem>
              <MenuItem onClick={() => navigate("/privacypolicy")}>
                Privacy Policy
              </MenuItem>
              <MenuItem onClick={() => navigate("/")}>Logout</MenuItem>
            </SubMenu> */}
          </Menu>
        </ProSidebar>
      </div>
    </>
  );
};

export default Sidebar;
