import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import React from "react";
import "react-pro-sidebar/dist/css/styles.css";
import {
  faFile,
  faLaptopHouse,
  faPeopleArrows,
} from "@fortawesome/free-solid-svg-icons";
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
            <MenuItem onClick={() => navigate("/orgAdmins")}>
              Org.Admin
            </MenuItem>

            <MenuItem
              title="Orders"
              onClick={() => navigate("/profile")}
              icon={<FontAwesomeIcon icon={faFile} />}
            >
              Profile
            </MenuItem>
            <MenuItem
              title="Orders"
              onClick={() => navigate("/createSubAdmin")}
              icon={<FontAwesomeIcon icon={faFile} />}
            >
              Sub Admin
            </MenuItem>
            <MenuItem
              title="Orders"
              //onClick={() => navigate("/payout")}
              icon={<FontAwesomeIcon icon={faFile} />}
            >
              Roles and Permission
            </MenuItem>
            <MenuItem
              title="Orders"
              //onClick={() => navigate("/review-and-rating")}
              icon={<FontAwesomeIcon icon={faFile} />}
            >
              Add New Role
            </MenuItem>
          </Menu>
        </ProSidebar>
      </div>
    </>
  );
};

export default Sidebar;
