/** @format */

import React, { useState, useEffect } from "react";
// import sikhlo from "../../Image/shopping.jpg";
import axios from "axios";

//css file
import "./reset.css";

//login,register,resetpassword uses material ui text-feild
import {
  Button,
  Card,
  TextField,
  IconButton,
  OutlinedInput,
  InputAdornment,
  FormControl,
} from "@material-ui/core";

//icons to show & hide th password
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { useNavigate } from "react-router-dom";
import { blankValidator, showNotificationMsz } from "../../../utils/Validation";

const VideoReset = (props) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState(null);
  const [confirm, setConfirm] = useState("");
  const token = localStorage.getItem("token");

  //---------------------local state ----------------------
  const [showPassword, setshowPassword] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const videoResetPass = async () => {
    let temp = {
      email: email,
      password: password,
      confirmPassword: confirm,
      otp: otp,
    };

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    try {
      const res = await axios.post(
        "https://video-agent-flyweis.herokuapp.com/video-agents/reset-password",
        temp,
        config
      );
      console.log(res);
      alert("Password Reset Successfully");
      navigate("/videoAgent/login");
    } catch (e) {
      alert("Unable to Reset Password");
    }
  };

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
              <h6>Welcome!</h6>
            </span>
          </div>
          <div className="main_padding_top_bottom">
            <div className="pb-2">
              <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>

            <div className="pb-2">
              <TextField
                id="outlined-basic"
                label=" Enter OTP"
                variant="outlined"
                value={otp}
                onChange={(e) => {
                  setOtp(e.target.value);
                }}
              />
            </div>

            <div className="mt-2">
              <FormControl
                className="MuiFormControl-fullWidth"
                variant="outlined"
              >
                <OutlinedInput
                  id="outlined-adornment-password"
                  placeholder="Password *"
                  type={showPassword ? "text" : "password"}
                  autoComplete="off"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        autoComplete="off"
                        aria-label="toggle password visibility"
                        onClick={() => setshowPassword(!showPassword)}
                        onMouseDown={(event) => event.preventDefault()}
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
            </div>

            <div className="mt-2">
              <FormControl
                className="MuiFormControl-fullWidth"
                variant="outlined"
              >
                <OutlinedInput
                  id="outlined-adornment-password"
                  placeholder=" Confirm Password *"
                  type={showPassword ? "text" : "password"}
                  autoComplete="off"
                  value={confirm}
                  onChange={(e) => {
                    setConfirm(e.target.value);
                  }}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        autoComplete="off"
                        aria-label="toggle password visibility"
                        onClick={() => setshowPassword(!showPassword)}
                        onMouseDown={(event) => event.preventDefault()}
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
            </div>

            <div className="inputfiledformatting mt-2">
              <Button
                variant="contained"
                className="Login_page_button"
                onClick={videoResetPass}
              >
                Reset Password
              </Button>
              <div
                style={{
                  margin: "20px 0",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                {/* <span
                  onClick={() => navigate("/orgAdmin/profile")}
                  style={{
                    padding: "6px",
                    border: "1px solid lightblue",
                    borderRadius: "4px",
                    backgroundColor: "#3bcee6",
                    color: "#fff",
                  }}
                >
                  {" "}
                  Organization Admin
                </span> */}
                {/* <span
                  onClick={() => navigate("/videoAgent/profile")}
                  style={{
                    padding: "6px",
                    border: "1px solid lightblue",
                    borderRadius: "4px",
                    backgroundColor: "#3bcee6",
                    color: "#fff",
                  }}
                >
                  {" "}
                  Video Agent{" "}
                </span> */}
              </div>
            </div>
            {/* <div
              className="text-info hover_cursor  mb-3"
              //onClick={() => navigate("/forgotpassword")}
            >
              Forgot Password?
            </div> */}
            {/* <div className="text-center text-info hover_cursor  mb-3" >
                           Don't have an account? <span className="" style={{color:"#7558bf"}} onClick={()=> navigate("/signup")}>Regisgter</span>
                        </div> */}
          </div>
        </Card>
      </div>
    </>
  );
};

export default VideoReset;
