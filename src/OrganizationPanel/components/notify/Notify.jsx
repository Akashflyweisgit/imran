/** @format */

import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import ViewNotify from "./ViewNotify";
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

function Notify(props) {
  const navigate = useNavigate();

  const [expandOpen, setExpandOpen] = useState(false);

  const [notifications, setNotifications] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [address, setAddress] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const token = localStorage.getItem("token");

  // useEffect(() => {
  //   const fetchNotifications = async () => {
  //     // setLoading(true);

  //     const auth = {
  //       headers: { Authorization: `Bearer ${token}` },
  //     };
  //     try {
  //       const { data: response } = await axios.get(
  //         "https://video-agent-flyweis.herokuapp.com",
  //         auth
  //       );

  //       setNotifications(response.data.packages);

  //       // console.log("packages", packages);
  //     } catch (error) {
  //       console.error(error.message);
  //     }
  //   };
  //   fetchNotifications();
  // }, []);

  // console.log("notifications", notifications);

  const sendNotifications = () => {
    try {
      let url = "https://video-agent-flyweis.herokuapp.com/notifications";

      let temp = {
        title: title,
        body: body,
      };

      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };

      axios
        .post(url, temp, config)
        .then(
          (res) => {
            console.log("data Category:::", res);
            alert("Notification Sent");
          },

          (error) => {
            console.log("data response error:::", error);
            alert(" Unable To Send Notifications ");
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
          <button onClick={() => setExpandOpen(!expandOpen)}>
            Add Details
          </button>
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

                  {/* <Grid className="Component_main_grid"> */}
                  {/* <Grid item md={6}> */}
                  <div className="text_filed_heading">Title</div>
                  <div className="mr-2 mt-1">
                    <input
                      type="text"
                      className="form-control "
                      placeholder="Enter Title"
                      autoComplete="off"
                      value={title}
                      onChange={(e) => {
                        setTitle(e.target.value);
                      }}
                    />
                  </div>
                  {/* </Grid> */}

                  {/* <Grid item md={6}> */}
                  <div className="text_filed_heading">Body</div>
                  <div className="mr-2 mt-1">
                    <input
                      type="text"
                      className="form-control "
                      placeholder="Enter Body"
                      autoComplete="off"
                      value={body}
                      onChange={(e) => {
                        setBody(e.target.value);
                      }}
                    />
                  </div>
                  {/* </Grid> */}
                  {/* </Grid> */}
                </div>
                <div className="mt-2 pb-2 ">
                  <Button
                    variant="contained"
                    className="button_formatting"
                    onClick={sendNotifications}
                  >
                    Create
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </Expand>
        <ViewNotify />
      </MainContainer>
    </Container>
  );
}

export default HOC(Notify);
