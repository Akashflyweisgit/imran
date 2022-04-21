/** @format */

import React, { useState, useEffect } from "react";
// import sikhlo from "../../Image/shopping.jpg";
import axios from "axios";

//css file
import "./login.css";

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

const OrgLogin = (props) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  //---------------------local state ----------------------
  const [showPassword, setshowPassword] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const orgAdminLogIn = async () => {
    try {
      let url =
        "https://video-agent-flyweis.herokuapp.com/organization-admin/login";
      let temp = {
        email: email,
        password: password,
      };
      await axios.post(url, temp).then((res) => {
        console.log("signUpData", res);
        localStorage.setItem("token", res.data.data.loginToken);
        navigate("/orgAdmin/profile");
      });
    } catch (error) {
      console.log("Error in login:;;:::::::;;;", error);
      // showNotificationMsz(error, "danger");
      setMsg("Invalid Login Credentials");
      alert("Unable to Login");
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

            <span>{msg} </span>

            <div className="inputfiledformatting mt-2">
              <Button
                variant="contained"
                className="Login_page_button"
                onClick={orgAdminLogIn}
              >
                Log in As Organization Admin
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
            <div
              className="text-info hover_cursor  mb-3"
              //onClick={() => navigate("/forgotpassword")}
            >
              Forgot Password?
            </div>
            {/* <div className="text-center text-info hover_cursor  mb-3" >
                           Don't have an account? <span className="" style={{color:"#7558bf"}} onClick={()=> navigate("/signup")}>Regisgter</span>
                        </div> */}
          </div>
        </Card>
      </div>
    </>
  );
};

export default OrgLogin;
