/** @format */

import React, { useState, useEffect } from "react";
//import sikhlo from "../images/shopping.jpg";
import { useNavigate } from "react-router-dom";

//css file
import "./Login.css";

// //login,register,resetpassword uses material ui text-feild
import {
  Button,
  Card,
  TextField,
  IconButton,
  OutlinedInput,
  InputAdornment,
  FormControl,
} from "@material-ui/core";
import axios from "axios";
import { blankValidator, showNotificationMsz } from "../../../utils/Validation";

// //icons to show & hide th password
//import { Visibility, VisibilityOff } from "@material-ui/icons";
//import electionlogo from "../images/electionlogo.png"

const Signup = (props) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState(null);
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  //     //---------------------local state ----------------------
  //const [showPassword, setshowPassword] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  //   const adminSignUp = async () => {
  //     try {
  //       let url = "";
  //       let temp = {
  //         email: email,
  //         password: password,
  //         confirmPassword: confirm,
  //         phoneNumber: number,
  //       };
  //       await axios.post(url, temp).then((res) => {
  //         console.log("signUpData", res);
  //         //localStorage.setItem("token", res.data.loginToken);
  //         navigate("/login");
  //         showNotificationMsz(res.data.message, "success");
  //       });
  //     } catch (error) {
  //       console.log("Error in signUp", error);
  //       showNotificationMsz(error, "danger");
  //     }
  //   };

  return (
    <>
      <div className="Login_Main_div content_padding">
        <Card className="pt-2 pb-2 Card_shadow form_width mt-2">
          <div>
            <img
              style={{ height: "120px", width: "120px" }}
              src=""
              alt=""
              className="login_image"
            />
          </div>
          <div>
            <span>
              <h6>Register Account</h6>
            </span>
          </div>
          <div className="main_padding_top_bottom">
            <div className="pb-2"></div>
            <div className="pb-3">
              <TextField
                type="email"
                label="Email"
                autoComplete="off"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="pb-3">
              <TextField
                type="number"
                label="Phone Number"
                autoComplete="off"
                value={number}
                onChange={(e) => {
                  setNumber(e.target.value);
                }}
              />
            </div>
            <div className="pb-2">
              <TextField
                type="password"
                label="Password"
                autoComplete="off"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <div className="pb-2">
              <TextField
                type="password"
                label="Confirm Password"
                autoComplete="off"
                value={confirm}
                onChange={(e) => {
                  setConfirm(e.target.value);
                }}
              />
            </div>
            <div className="inputfiledformatting mt-2">
              <Button
                variant="contained"
                className="Login_page_button"
                // onClick={adminSignUp}
              >
                Register
              </Button>
            </div>
            <div
              className="hover_cursor  mb-3 mt-1"
              style={{ fontSize: "14px" }}
            ></div>
            <div className="text-center text-info hover_cursor  mb-3">
              Already have an account?{" "}
              <span
                className=""
                style={{ color: "#7558bf" }}
                onClick={() => navigate("/login")}
              >
                Login
              </span>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
};

export default Signup;
