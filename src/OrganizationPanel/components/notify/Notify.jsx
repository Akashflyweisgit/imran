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

function Notify(props) {
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

  const navigate = useNavigate();
  const [isupdated, setisupdated] = useState(false);
  const [isloading, setisloading] = useState(false);
  const [expandOpen, setExpandOpen] = useState(false);
  const [isUpdated, setIsUpdated] = useState(false);

  const [userData, setUserData] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [address, setAddress] = useState("");

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

  //   useEffect(() => {
  //     window.scrollTo(0, 0);

  //     let url = "https://urban-home.herokuapp.com/api/alluser";

  //     axios
  //       .get(url)
  //       .then(
  //         (res) => {
  //           // console.log("data userData:::", res);

  //           setUserData(res.data.getalluser);
  //         },

  //         (error) => {
  //           setisloading(false);
  //           console.log("data response error:::", error);
  //         }
  //       )
  //       .catch((e) => {
  //         setisloading(false);
  //         console.log("data response error:::", e);
  //       });
  //   }, [isupdated]);

  //   console.log("user data", userData);

  //   const addUser = () => {
  //     try {
  //       let url = "https://urban-home.herokuapp.com/api/userdetail";
  //       console.log("url::", url);
  //       //   setisloading(true);

  //       let temp = {
  //         name,
  //         email,
  //         number,
  //         address,
  //       };
  //       console.log("temp", temp);

  //       axios
  //         .post(url, temp)
  //         .then(
  //           (res) => {
  //             console.log("data user", res);
  //             // setisloading(false);
  //             // props.history.push("/home");
  //             // showNotificationMsz(res.data.message, "success");
  //           },

  //           (error) => {
  //             // setisloading(false);
  //             console.log("data response error:::", error);
  //             // showNotificationMsz(error, "danger");
  //           }
  //         )
  //         .catch((e) => {
  //           //   setisloading(false);
  //           console.log("data response error:::", e);
  //           //   showNotificationMsz(e, "danger");
  //         });
  //     } catch (error) {}
  //   };

  //   const updateUser = (EditId) => {
  //     console.log("editid", EditId);
  //     let id = EditId;

  //     try {
  //       let url = `https://urban-home.herokuapp.com/api/updateuser/${id}`;
  //       // setisloading(true);

  //       let temp = {
  //         name: editName,
  //         number: editNumber,
  //         email: editEmail,
  //         address: editAddress,
  //       };

  //       axios
  //         .put(url, temp)
  //         .then(
  //           (res) => {
  //             console.log("response :::", res);
  //             handleDialog();
  //             // setisloading(false);
  //             setIsUpdated(!isUpdated);

  //             //  showNotificationMsz(res.data.msg, "success");
  //             // props.history.push("/customer-purchace-order")
  //           },

  //           (error) => {
  //             // setisloading(false);
  //             console.log("data response error:::", error);
  //             //   showNotificationMsz(error, "success");
  //           }
  //         )
  //         .catch((e) => {
  //           // setisloading(false);
  //           console.log("data response error:::", e);
  //           // showNotificationMsz(e, "success");
  //         });
  //     } catch (error) {}
  //   };

  //   const deleteUser = (row) => {
  //     let id = row._id;

  //     try {
  //       // setisloading(true);
  //       let url = `https://urban-home.herokuapp.com/api/deleteuser/${id}`;
  //       axios.delete(url).then(
  //         (res) => {
  //           // setisloading(false);
  //           setIsUpdated(!isUpdated);
  //           // showNotificationMsz(res.data.msg, "success");
  //           console.log("resdeletedata", res);
  //         },
  //         (error) => {
  //           // showNotificationMsz(error, "danger");
  //           // setisloading(false);
  //         }
  //       );
  //     } catch (error) {
  //       // showNotificationMsz(error, "danger");
  //       // setisloading(false);
  //     }
  //   };

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
        </Expand>
        <ViewNotify
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

export default HOC(Notify);
