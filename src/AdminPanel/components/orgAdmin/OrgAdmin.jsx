/** @format */

import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import ViewOrgAdmin from "./ViewOrgAdmin";
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

function OrgAdmin(props) {
  const navigate = useNavigate();
  const [orgData, setOrgData] = useState([]);
  const [expandOpen, setExpandOpen] = useState(false);
  const [isUpdated, setIsUpdated] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState(null);
  const [orgName, setOrgName] = useState("");
  const [url, setUrl] = useState("");
  const [logo, setLogo] = useState("");
  const [password, setPassword] = useState(null);
  const [contact, setContact] = useState("");
  const token = localStorage.getItem("loginToken");

  useEffect(() => {
    const fetchOrgAdminData = async () => {
      // setLoading(true);

      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNDQxNzUwOTQxZGM1MjQ0MjcyYWNhOSIsInNjb3BlIjoibG9naW4iLCJpYXQiOjE2NDkyMjY1NDksImV4cCI6MTY1MTgxODU0OX0.Kb-obkAWFS-9XZnJuZ1QLmoa3511dQQY6N7NTzgeuGI";
      const auth = {
        headers: { Authorization: `Bearer ${token}` },
      };
      try {
        const { data: response } = await axios.get(
          "https://video-agent-flyweis.herokuapp.com/organization-admin",
          auth
        );
        setOrgData(response.data.organizationAdmins);
      } catch (error) {
        console.error(error.message);
      }
      // setLoading(false);
    };

    fetchOrgAdminData();
  }, []);

  // console.log("data is ", orgData);
  const addOrgAdmin = () => {
    try {
      let url = "https://video-agent-flyweis.herokuapp.com/organization-admin";

      const fd = new FormData();

      fd.append("organizationName", name);
      fd.append("phoneNumber", number);
      fd.append("email", email);
      fd.append("url", url);
      fd.append("logo", logo);
      fd.append("password", password);
      fd.append("contactPerson", contact);

      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };

      axios
        .post(url, fd, config)
        .then(
          (res) => {
            console.log("data Category:::", res);
          },

          (error) => {
            console.log("data response error:::", error);
          }
        )
        .catch((e) => {
          console.log("data response error:::", e);
        });
    } catch (error) {}
  };
  //edit
  // const [editDailogOpen, setEditDailogOpen] = useState(false);
  // const [editName, setEditName] = useState(false);
  // const [EditId, setEditId] = useState("");
  // const [editEmail, setEditEmail] = useState("");
  // const [editNumber, setEditNumber] = useState("");
  // const [editAddress, setEditAddress] = useState("");

  // const handleDialog = () => {};

  // const editUser = (row) => {
  //   console.log("editsubcategory", row);
  //   setEditName(row.name);
  //   setEditEmail(row.email);
  //   setEditNumber(row.address);
  //   setEditId(row._id);

  //   handleDialog();
  // };

  return (
    <Container>
      <MainContainer>
        <Header>
          <span>
            Organization Admins
            <span onClick={() => navigate("/dashbord")}>/ Home</span>
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
                  <form>
                    <Grid className="Component_main_grid">
                      <Grid item md={6}>
                        <div className="text_filed_heading">Name</div>
                        <div className="mr-2 mt-1">
                          <input
                            name="name"
                            type="text"
                            className="form-control "
                            placeholder="Enter Name"
                            autoComplete="off"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                          />
                        </div>
                      </Grid>

                      <Grid item md={6}>
                        <div className="text_filed_heading">Email</div>
                        <div className="mr-2 mt-1">
                          <input
                            name="email"
                            type="email"
                            className="form-control "
                            placeholder="Enter Email"
                            autoComplete="off"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>
                      </Grid>
                    </Grid>

                    <Grid className="Component_main_grid">
                      <Grid item md={6}>
                        <div className="text_filed_heading">Phone Number</div>
                        <div className=" mr-2  mt-1">
                          <input
                            type="tel"
                            className="form-control "
                            placeholder="Enter Phone Number"
                            autoComplete="off"
                            value={number}
                            onChange={(e) => setNumber(e.target.value)}
                          />
                        </div>
                      </Grid>

                      <Grid item md={6}>
                        <div className="text_filed_heading">Url</div>
                        <div className=" mr-2  mt-1">
                          <input
                            type="text"
                            className="form-control "
                            placeholder="Enter Url"
                            autoComplete="off"
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}
                          />
                        </div>
                      </Grid>
                    </Grid>
                    <Grid className="Component_main_grid">
                      <Grid item md={6}>
                        <div className="text_filed_heading">Logo</div>
                        <div className=" mr-2  mt-1">
                          <input
                            type="file"
                            className="form-control "
                            placeholder="Enter Phone Number"
                            autoComplete="off"
                            value={logo}
                            onChange={(e) => setLogo(e.target.value)}
                          />
                        </div>
                      </Grid>

                      <Grid item md={6}>
                        <div className="text_filed_heading">Password</div>
                        <div className=" mr-2  mt-1">
                          <input
                            type="password"
                            className="form-control "
                            placeholder="Enter Url"
                            autoComplete="off"
                            value={url}
                            onChange={(e) => setPassword(e.target.value)}
                          />
                        </div>
                      </Grid>
                    </Grid>
                    <Grid className="Component_main_grid">
                      <Grid item md={6}>
                        <div className="text_filed_heading">Contact Person</div>
                        <div className=" mr-2  mt-1">
                          <input
                            type="text"
                            className="form-control "
                            placeholder="Contact Person"
                            autoComplete="off"
                            value={contact}
                            onChange={(e) => setContact(e.target.value)}
                          />
                        </div>
                      </Grid>
                    </Grid>
                  </form>
                </div>

                <div className="mt-2 pb-2 ">
                  <Button
                    variant="contained"
                    className="button_formatting"
                    onClick={addOrgAdmin}
                  >
                    Create
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </Expand>
        <ViewOrgAdmin orgData={orgData} />
      </MainContainer>
    </Container>
  );
}

export default HOC(OrgAdmin);
