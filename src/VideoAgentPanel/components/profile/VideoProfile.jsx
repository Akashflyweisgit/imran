/** @format */

import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import ViewProfile from "./ViewProfile";
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

function VideoProfile(props) {
  const navigate = useNavigate();
  const [isupdated, setisupdated] = useState(false);
  const [isloading, setisloading] = useState(false);
  const [expandOpen, setExpandOpen] = useState(false);
  const [isUpdated, setIsUpdated] = useState(false);

  const [videoAgents, setVideoAgents] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [address, setAddress] = useState("");
  const token = localStorage.getItem("token");
  const [image, setImage] = useState();

  //edit

  const auth = {
    headers: { Authorization: `Bearer ${token}` },
  };

  useEffect(() => {
    const Get = async () => {
      try {
        const res = await axios.get(
          "https://video-agent-flyweis.herokuapp.com/video-agents/profile",
          auth
        );
        const result = [res.data.data.profile];
        setVideoAgents(result);

        console.log(result);
      } catch (e) {}
    };
    // const fetchVideoAgents = async () => {
    //   // setLoading(true);
    //   const auth = {
    //     headers: { Authorization: `Bearer ${token}` },
    //   };
    //   try {
    //     const res = await axios.get(
    //       "https://video-agent-flyweis.herokuapp.com/video-agents/profile",
    //       auth
    //     );
    //     // setVideoAgents(response.data);
    //     console.log(res);
    //   } catch (error) {
    //     console.error(error.message);
    //   }
    // };
    // fetchVideoAgents();

    Get();
  }, []);

  // const videoAgentsData = videoAgents;

  // console.log("videoAgents", videoAgents);

  const addImage = () => {
    try {
      let url = "https://video-agent-flyweis.herokuapp.com/image-upload";
      //setisloading(true);

      const fd = new FormData();

      fd.append("image", image);

      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };

      axios
        .post(url, fd, config)
        .then(
          (res) => {
            console.log("data Category:::", res);
            alert("Image Added Successfully");
            ///setisloading(false);
            //showNotificationMsz(res.data.msg, "success");
          },

          (error) => {
            //setisloading(false);
            console.log("data response error:::", error);
            alert("Unable to Add Image");
            //showNotificationMsz(error, "danger");
          }
        )
        .catch((e) => {
          //setisloading(false);
          console.log("data response error:::", e);
          //showNotificationMsz(e, "danger");
        });
    } catch (error) {}
  };

  return (
    <Container>
      <MainContainer>
        <Header>
          <span>
            Video Agent
            <span onClick={() => navigate("/dashbord")}>/Profile</span>
          </span>
          <button onClick={() => setExpandOpen(!expandOpen)}>Add Image</button>
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
                    <Grid item md={6}>
                      <div className="text_filed_heading">Upload Image</div>
                      <div className="mr-2 mt-1">
                        <input
                          accept="image/*"
                          type="file"
                          className="form-control "
                          autoComplete="off"
                          onChange={(e) => {
                            setImage(e.target.files[0]);
                          }}
                        />
                      </div>
                    </Grid>

                    {/* <Grid item md={6}>
                      <div className="text_filed_heading">Email</div>
                      <div className="mr-2 mt-1">
                        <input
                          type="text"
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
                    <Grid item md={6}>
                      <div className=" mr-2  mt-1">
                        <input
                          type="number"
                          className="form-control "
                          placeholder="Enter Name"
                          autoComplete="off"
                          value={number}
                          onChange={(e) => {
                            setNumber(e.target.value);
                          }}
                        />
                      </div>
                    </Grid>

                    <Grid item md={6}>
                      <div className="text_filed_heading">Address</div>
                      <div className=" mr-2  mt-1">
                        <input
                          type="text"
                          className="form-control "
                          placeholder="Enter Address"
                          autoComplete="off"
                          value={address}
                          onChange={(e) => {
                            setAddress(e.target.value);
                          }}
                        />
                      </div>
                    </Grid> */}
                  </Grid>
                </div>
                <div className="mt-2 pb-2 ">
                  <Button
                    variant="contained"
                    className="button_formatting"
                    onClick={addImage}
                  >
                    Create
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </Expand>
        <ViewProfile videoAgents={videoAgents} />
      </MainContainer>
    </Container>
  );
}

export default HOC(VideoProfile);
