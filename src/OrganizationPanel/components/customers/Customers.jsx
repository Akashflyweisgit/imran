/** @format */

import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import ViewCustomers from "./ViewCustomers";
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

function Customers(props) {
  const navigate = useNavigate();

  const [expandOpen, setExpandOpen] = useState(false);

  const [userData, setUserData] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [address, setAddress] = useState("");
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchUsers = async () => {
      // setLoading(true);

      const auth = {
        headers: { Authorization: `Bearer ${token}` },
      };
      try {
        const { data: response } = await axios.get(
          "https://video-agent-flyweis.herokuapp.com/users",
          auth
        );

        setUserData(response.data.users);

        // console.log("packages", packages);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchUsers();
  }, []);

  console.log("users", userData);

  return (
    <Container>
      <MainContainer>
        <Header>
          <span>
            Organization Admin
            <span onClick={() => navigate("/dashbord")}>/View Customers</span>
          </span>
          {/* <button onClick={() => setExpandOpen(!expandOpen)}>
            Add Details
          </button> */}
        </Header>

        {/* <Expand open={expandOpen}>
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
                    </Grid>
                  </Grid>
                </div>
                <div className="mt-2 pb-2 ">
                  <Button
                    variant="contained"
                    className="button_formatting"
                    // onClick={addUser}
                  >
                    Create
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </Expand> */}
        <ViewCustomers userData={userData} />
      </MainContainer>
    </Container>
  );
}

export default HOC(Customers);
