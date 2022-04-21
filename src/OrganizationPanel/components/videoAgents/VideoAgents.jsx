/** @format */

import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import View from "./View";
import HOC from "../../Common/HOC";
import axios from "axios";
import Expand from "react-expand-animated";
import { Card, Grid, Button } from "@material-ui/core";
// import {
//   Checkbox,
//   FormControl,
//   FormControlLabel,
//   InputLabel,.

//   MenuItem,
//   Select,
//   TextField,
// } from "@mui/material";

const Container = styled.div`
  width: 100%;
  padding: 20px;
`;
const MainContainer = styled.div`
  margin: 80px 0;
  width: 100%;

  h5 {
    margin: 20px 0;
  }
`;
const Header = styled.div`
  display: flex;
  width: 100%;
  height: 70px;
  align-items: center;
  border: 1px solid lightblue;
  margin-bottom: 20px;
  border-radius: 4px;

  span {
    padding: 0 20px;
    font-size: 1.1rem;
    font-weight: 600;
    color: #17a2b8;
    display: flex;
    align-items: center;
    cursor: pointer;
  }
`;
const Inputs = styled.div`
  width: 50%;
`;
const CheckBoxs = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
`;

function VideoAgents(props) {
  const navigate = useNavigate();
  const [isupdated, setisupdated] = useState(false);
  const [isloading, setisloading] = useState(false);
  const [expandOpen, setExpandOpen] = useState(false);
  const [isUpdated, setIsUpdated] = useState(false);
  const [videoAgents, setVideoAgents] = useState([]);
  const [userData, setUserData] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [country, setCountry] = useState("");
  const [education, setEducation] = useState("");
  const [height, setHeight] = useState({
    feet: null,
    inches: null,
  });
  const [birthDate, setBirthDate] = useState(null);
  const [audioPoints, setAudioPoints] = useState(null);
  const [videoPoints, setVideoPoints] = useState(null);
  const [currency, setCurrency] = useState("");
  const [images, setImages] = useState([]);
  const [hobbies, setHobbies] = useState([]);
  const token = localStorage.getItem("token");

  const auth = {
    headers: { Authorization: `Bearer ${token}` },
  };

  useEffect(() => {
    const getVAgents = async () => {
      try {
        const res = await axios.get(
          "https://video-agent-flyweis.herokuapp.com/video-agents/all",
          auth
        );
        const result = res.data.data.videoAgents;
        setVideoAgents(result);

        console.log(result);
      } catch (e) {}
    };

    getVAgents();
  }, []);

  const addVideoAgent = () => {
    try {
      let url = "https://video-agent-flyweis.herokuapp.com/video-agents";

      let temp = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phoneNumber: number,
        password: password,
        confirmPassword: confirm,
        country: country,
        education: education,
        height: {
          feet: height.feet,
          inches: height.inches,
        },
        dateOfBirth: birthDate,
        audioPoints: audioPoints,
        videoPoints: videoPoints,
        currency: currency,
        images: images,
        hobbies: hobbies,
      };

      // console.log("temp", temp);

      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };

      axios
        .post(url, temp, config)
        .then(
          (res) => {
            console.log("data Category:::", res);
            alert("Successfully Created");
          },

          (error) => {
            console.log("data response error:::", error);
            alert("Unable to  create video agent.Please Try again");
          }
        )
        .catch((e) => {
          console.log("data response error:::", e);
        });
    } catch (error) {}
  };

  return (
    <Container>
      <MainContainer>
        <Header>
          <span>
            Organization Admins
            <span onClick={() => navigate("/dashbord")}>/ Home </span>
          </span>
          {/* <button onClick={() => setExpandOpen(!expandOpen)}>
            Add Details
          </button> */}
        </Header>

        <Expand open={expandOpen}>
          <Card className=" mb-2 Card_shadow p-3">
            <div className="card_admissiondetails_height">
              <div className="textfiled_margin">
                <div className="card_content_instition">
                  <div className="text-right">
                    <span
                      className="icon_color"
                      onClick={() => setExpandOpen(!expandOpen)}
                    >
                      <i class="fa fa-times hover_cursor"></i>
                    </span>
                  </div>

                  <Grid className="Component_main_grid">
                    <Grid item md={4}>
                      <div className="text_filed_heading"> FirstName</div>
                      <div className="mr-2 mt-1">
                        <input
                          type="text"
                          className="form-control "
                          placeholder="Enter First Name"
                          autoComplete="off"
                          value={firstName}
                          onChange={(e) => {
                            setFirstName(e.target.value);
                          }}
                        />
                      </div>
                    </Grid>

                    <Grid item md={4}>
                      <div className="text_filed_heading">Last Name</div>
                      <div className="mr-2 mt-1">
                        <input
                          type="text"
                          className="form-control "
                          placeholder="Enter Last Name"
                          autoComplete="off"
                          value={lastName}
                          onChange={(e) => {
                            setLastName(e.target.value);
                          }}
                        />
                      </div>
                    </Grid>
                    <Grid item md={4}>
                      <div className="text_filed_heading">Email</div>
                      <div className="mr-2 mt-1">
                        <input
                          type="email"
                          className="form-control "
                          placeholder="Enter Email"
                          autoComplete="off"
                          value={email}
                          onChange={(e) => {
                            setEmail(e.target.value);
                          }}
                        />
                      </div>
                    </Grid>
                  </Grid>

                  <Grid className="Component_main_grid">
                    <Grid item md={4}>
                      <div className="text_filed_heading">Phone Number</div>
                      <div className=" mr-2  mt-1">
                        <input
                          type="tel"
                          className="form-control "
                          placeholder="Enter Phone Number"
                          autoComplete="off"
                          value={number}
                          onChange={(e) => {
                            setNumber(e.target.value);
                          }}
                        />
                      </div>
                    </Grid>

                    <Grid item md={4}>
                      <div className="text_filed_heading">Password</div>
                      <div className=" mr-2  mt-1">
                        <input
                          type="password"
                          className="form-control "
                          placeholder="Enter Password"
                          autoComplete="off"
                          value={password}
                          onChange={(e) => {
                            setPassword(e.target.value);
                          }}
                        />
                      </div>
                    </Grid>
                    <Grid item md={4}>
                      <div className="text_filed_heading">Confirm Password</div>
                      <div className=" mr-2  mt-1">
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Confirm Password"
                          autoComplete="off"
                          value={confirm}
                          onChange={(e) => {
                            setConfirm(e.target.value);
                          }}
                        />
                      </div>
                    </Grid>
                  </Grid>
                  <Grid className="Component_main_grid">
                    <Grid item md={3}>
                      <div className="text_filed_heading">Country</div>
                      <div className=" mr-2  mt-1">
                        <input
                          type="text"
                          className="form-control "
                          placeholder="Country Name"
                          autoComplete="off"
                          value={country}
                          onChange={(e) => {
                            setCountry(e.target.value);
                          }}
                        />
                      </div>
                    </Grid>

                    <Grid item md={3}>
                      <div className="text_filed_heading">Education</div>
                      <div className=" mr-2  mt-1">
                        <input
                          type="text"
                          className="form-control "
                          placeholder="Education"
                          autoComplete="off"
                          value={education}
                          onChange={(e) => {
                            setEducation(e.target.value);
                          }}
                        />
                      </div>
                    </Grid>
                    <Grid item md={3}>
                      <div className="text_filed_heading">Height(ft)</div>
                      <div className=" mr-2  mt-1">
                        <input
                          name="feet"
                          type="number"
                          className="form-control "
                          placeholder="Feet"
                          autoComplete="off"
                          value={height.feet}
                          onChange={(e) => {
                            setHeight(e.target.value);
                          }}
                        />
                      </div>
                    </Grid>
                    <Grid item md={3}>
                      <div className="text_filed_heading">Height(inches)</div>
                      <div className=" mr-2  mt-1">
                        <input
                          name="inches"
                          type="number"
                          className="form-control "
                          placeholder="Inches"
                          autoComplete="off"
                          value={height.inches}
                          onChange={(e) => {
                            setHeight(e.target.value);
                          }}
                        />
                      </div>
                    </Grid>
                  </Grid>

                  <Grid className="Component_main_grid">
                    <Grid item md={4}>
                      <div className="text_filed_heading">Date of Birth</div>
                      <div className=" mr-2  mt-1">
                        <input
                          type="date"
                          className="form-control "
                          placeholder="Birth Date"
                          autoComplete="off"
                          value={birthDate}
                          onChange={(e) => {
                            setBirthDate(e.target.value);
                          }}
                        />
                      </div>
                    </Grid>

                    <Grid item md={4}>
                      <div className="text_filed_heading">Audio Points</div>
                      <div className=" mr-2  mt-1">
                        <input
                          type="number"
                          className="form-control "
                          placeholder="Audio Points"
                          autoComplete="off"
                          value={audioPoints}
                          onChange={(e) => {
                            setAudioPoints(e.target.value);
                          }}
                        />
                      </div>
                    </Grid>
                    <Grid item md={4}>
                      <div className="text_filed_heading">Video Points</div>
                      <div className=" mr-2  mt-1">
                        <input
                          type="number"
                          className="form-control "
                          placeholder="Video Points"
                          autoComplete="off"
                          value={videoPoints}
                          onChange={(e) => {
                            setVideoPoints(e.target.value);
                          }}
                        />
                      </div>
                    </Grid>
                  </Grid>
                  <Grid className="Component_main_grid">
                    <Grid item md={4}>
                      <div className="text_filed_heading">Currency</div>
                      <div className=" mr-2  mt-1">
                        <input
                          type="text"
                          className="form-control "
                          placeholder="Birth Date"
                          autoComplete="off"
                          value={currency}
                          onChange={(e) => {
                            setCurrency(e.target.value);
                          }}
                        />
                      </div>
                    </Grid>

                    <Grid item md={4}>
                      <div className="text_filed_heading">Images</div>
                      <div className=" mr-2  mt-1">
                        <input
                          type="text"
                          className="form-control "
                          placeholder="Audio Points"
                          autoComplete="off"
                          value={images}
                          onChange={(e) => {
                            setImages(e.target.value);
                          }}
                        />
                      </div>
                    </Grid>
                    <Grid item md={4}>
                      <div className="text_filed_heading">Hobbies</div>
                      <div className=" mr-2  mt-1">
                        <input
                          type="text"
                          className="form-control "
                          placeholder="Video Points"
                          autoComplete="off"
                          value={hobbies}
                          onChange={(e) => {
                            setHobbies(e.target.value);
                          }}
                        />
                      </div>
                    </Grid>
                  </Grid>
                </div>
                <div className="mt-2 pb-2 ">
                  <Button
                    variant="contained"
                    className="button_formatting"
                    //onClick={addVideoAgent}
                  >
                    Create
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </Expand>
        <View
          videoAgents={videoAgents}
          setExpandOpen={setExpandOpen}
          expandOpen={expandOpen}
        />
      </MainContainer>
    </Container>
  );
}

export default HOC(VideoAgents);
