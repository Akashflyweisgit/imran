/** @format */

import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import View from "./View";
import HOC from "../../Common/HOC";
import axios from "axios";
import Expand from "react-expand-animated";
import { Card, Grid, Button } from "@material-ui/core";

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

function SupportAgents(props) {
  const navigate = useNavigate();
  const [isupdated, setisupdated] = useState(false);
  const [isloading, setisloading] = useState(false);
  const [expandOpen, setExpandOpen] = useState(false);
  const [isUpdated, setIsUpdated] = useState(false);

  const [userData, setUserData] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState(null);
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const token = localStorage.getItem("token");

  //edit
  const [editDailogOpen, setEditDailogOpen] = useState(false);
  const [editName, setEditName] = useState(false);
  const [EditId, setEditId] = useState("");
  const [editEmail, setEditEmail] = useState("");
  const [editNumber, setEditNumber] = useState("");
  const [editAddress, setEditAddress] = useState("");

  const handleDialog = () => {
    setEditDailogOpen(!editDailogOpen);
  };

  const editUser = (row) => {
    console.log("editsubcategory", row);
    setEditName(row.name);
    setEditEmail(row.email);
    setEditNumber(row.address);
    setEditId(row._id);

    handleDialog();
  };

  const addSupportAgent = () => {
    try {
      let url = "https://video-agent-flyweis.herokuapp.com/support-agents";

      let temp = {
        name: name,
        email: email,
        phoneNumber: number,
        password: password,
        confirmPassword: confirm,
      };

      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };

      axios
        .post(url, temp, config)
        .then(
          (res) => {
            console.log("data Category:::", res);
            alert("Support Agent Created Successfully");
          },

          (error) => {
            console.log("data response error:::", error);
            alert("Unable to Create Support Agent");
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
            <span onClick={() => navigate("/")}>/ Home </span>
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

                  <Grid className="Component_main_grid">
                    <Grid item md={6}>
                      <div className="text_filed_heading">Name</div>
                      <div className="mr-2 mt-1">
                        <input
                          type="text"
                          className="form-control "
                          placeholder="Enter Name"
                          autoComplete="off"
                          value={name}
                          onChange={(e) => {
                            setName(e.target.value);
                          }}
                        />
                      </div>
                    </Grid>

                    <Grid item md={6}>
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
                      <div className="text_filed_heading">Phone Number</div>
                      <div className=" mr-2  mt-1">
                        <input
                          type="number"
                          className="form-control "
                          placeholder="Enter Number"
                          autoComplete="off"
                          value={number}
                          onChange={(e) => {
                            setNumber(e.target.value);
                          }}
                        />
                      </div>
                    </Grid>

                    <Grid item md={6}>
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
                  </Grid>
                  <Grid className="Component_main_grid">
                    <Grid item md={6}>
                      <div className="text_filed_heading">Confirm</div>
                      <div className=" mr-2  mt-1">
                        <input
                          type="password"
                          className="form-control "
                          placeholder="Confirm Password"
                          autoComplete="off"
                          value={confirm}
                          onChange={(e) => {
                            setConfirm(e.target.value);
                          }}
                        />
                      </div>
                    </Grid>

                    {/* <Grid item md={6}>
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
                    </Grid> */}
                  </Grid>
                </div>
                <div className="mt-2 pb-2 ">
                  <Button
                    variant="contained"
                    className="button_formatting"
                    onClick={addSupportAgent}
                  >
                    Create
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </Expand>
        <View
          userData={userData}
          editDailogOpen={editDailogOpen}
          setEditDailogOpen={setEditDailogOpen}
          editName={editName}
          setEditName={setEditName}
          editAddress={editAddress}
          setEditAddress={setEditAddress}
          editEmail={editEmail}
          setEditEmail={setEditEmail}
          editNumber={editNumber}
          setEditNumber={setEditNumber}
          //   updateUser={updateUser}
          EditId={EditId}
          handleDialog={handleDialog}
          editUser={editUser}
          //   deleteUser={deleteUser}
        />
      </MainContainer>
    </Container>
  );
}

export default HOC(SupportAgents);
