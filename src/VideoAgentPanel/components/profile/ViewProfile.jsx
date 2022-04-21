/** @format */

import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import HOC from "../../Common/HOC";
import { Card, Grid, Button } from "@material-ui/core";
//pagination
import TablePagination from "@material-ui/core/TablePagination";

import axios from "axios";
import { Link } from "react-router-dom";
//DIALOG BOX
import {
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
} from "@material-ui/core";
import { Edit } from "@material-ui/icons";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function ViewProfile({ videoAgents }) {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [desc, setDesc] = useState("");
  const [hobbies, setHobbies] = useState([]);
  const token = localStorage.getItem("token");
  const [dialogTwo, setDialogTwo] = useState(false);
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [number, setNumber] = useState(null);

  const hideDialog = () => {
    setDialogOpen(dialogOpen);
  };

  const hideDialogTwo = () => {
    setDialogTwo(dialogTwo);
  };

  const updateProfile = () => {
    try {
      let url =
        "https://video-agent-flyweis.herokuapp.com/video-agents/profile";

      let temp = {
        description: desc,
        hobbies: [hobbies],
      };

      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };

      axios
        .put(url, temp, config)
        .then(
          (res) => {
            console.log("data Category:::", res);
            alert("Profile Updated");
          },

          (error) => {
            console.log("data response error:::", error);
            alert("Unable");
          }
        )
        .catch((e) => {
          console.log("data response error:::", e);
        });
    } catch (error) {}
  };

  const updateBankDetails = () => {
    try {
      let url =
        "https://video-agent-flyweis.herokuapp.com/video-agents/bank-details";

      let temp = {
        name: name,
        ifscCode: code,
        accountNumber: number,
      };

      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };

      axios
        .put(url, temp, config)
        .then(
          (res) => {
            console.log("data Category:::", res);
            alert("Bank Details Updated");
          },

          (error) => {
            console.log("data response error:::", error);
            alert("Unable");
          }
        )
        .catch((e) => {
          console.log("data response error:::", e);
        });
    } catch (error) {}
  };

  const classes = useStyles();

  return (
    <>
      <div className="home_padding">
        <div className="content_padding">
          <Grid className="Component_main_grid mb-3">
            <Grid item md={9}>
              <h3 className="mb-2">Profile</h3>
              {/* <button
                type="button"
                class="btn btn-info mr-4"
                onClick={() => props.history.push("/create-course")}
              >
                <i class="fa fa-plus"></i> Create
              </button>
              <button
                type="button"
                class="btn btn-info mr-4"
                onClick={() => props.history.goBack()}
              >
                <i class="fa fa-arrow-left"></i>Go Back
              </button> */}
            </Grid>
            <Grid item md={3}>
              <div className="d-flex mt-3">
                <span className="p-2">
                  <i class="fa fa-search"></i>
                </span>
                {/* <span>
                  <input
                    value={titlename}
                    onChange={(e) => {
                      settitlename(e.target.value);
                    }}
                    type="text"
                    class="form-control"
                    placeholder="Search by Name"
                  />
                </span> */}
              </div>
            </Grid>
          </Grid>

          <Card classname="main_card p-3">
            <TableContainer>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>First Name</TableCell>
                    <TableCell>Last Name</TableCell>
                    <TableCell>Audio Points</TableCell>
                    <TableCell>Bank Account Name</TableCell>
                    <TableCell>Bank Account No.</TableCell>
                    <TableCell>IFSC</TableCell>
                    <TableCell>Date Of Birth</TableCell>
                    <TableCell>Education</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone Number</TableCell>
                    <TableCell>Video Points</TableCell>
                    <TableCell>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {videoAgents.map((row) => {
                    return (
                      <TableRow>
                        <TableCell>{row.first_name}</TableCell>
                        <TableCell>{row.last_name}</TableCell>
                        <TableCell>{row.audio_points}</TableCell>
                        <TableCell>{row.bank_account.name}</TableCell>
                        <TableCell>{row.bank_account.account_number}</TableCell>
                        <TableCell>{row.bank_account.ifsc_code}</TableCell>
                        <TableCell>{row.date_of_birth}</TableCell>
                        <TableCell>{row.education}</TableCell>
                        <TableCell>{row.email}</TableCell>
                        <TableCell>{row.phone_number}</TableCell>
                        <TableCell>{row.video_points}</TableCell>

                        <TableCell>
                          <Link
                            type="button"
                            class="btn btn-info mr-4"
                            to="/videoAgent/images"
                          >
                            {/* <i
                              class="fa fa-edit"
                              // onClick={() => setEditDailogOpen(!editDailogOpen)}
                            ></i> */}
                            Images
                          </Link>
                          <button
                            type="button"
                            class="btn btn-info"
                            onClick={() => setDialogOpen({ dialogOpen: true })}
                          >
                            <i class="fa fa-edit"></i>
                          </button>
                          <button
                            type="button"
                            class="btn btn-info mt-2"
                            onClick={() => setDialogTwo({ dialogTwo: true })}
                          >
                            {/* <i class="fa fa-edit"></i> */}
                            Update Bank Details
                          </button>
                          {/* <button
                            type="button"
                            class="btn btn-info"
                            // onClick={() => deleteUser(row)}
                          >
                            <i class="fa fa-trash"></i>
                          </button> */}
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          </Card>

          <br />
          <Dialog
            open={dialogOpen}
            onClose={hideDialog}
            aria-labelledby="form-dialog-title"
            maxWidth="sm"
            fullWidth="fullWidth"
          >
            <DialogTitle>
              Add Category
              <span className="float-right icon_color"></span>
            </DialogTitle>
            <DialogContent>
              <div className="text_filed_heading">Description</div>
              <div className="mr-2 mt-1">
                <input
                  type="text"
                  className="form-control "
                  autoComplete="off"
                  value={desc}
                  onChange={(e) => {
                    setDesc(e.target.value);
                  }}
                />
              </div>

              <div className="text_filed_heading">Hobbies </div>
              <div className="mr-2 mt-1">
                <input
                  type="text"
                  className="form-control "
                  placeholder=""
                  autoComplete="off"
                  value={hobbies}
                  onChange={(e) => {
                    setHobbies(e.target.value);
                  }}
                />
              </div>

              {/* <div className="text_filed_heading">Edit Status</div>
              <div className="mr-2 mt-1">
                <input
                  type="text"
                  className="form-control "
                  placeholder="Enter Email"
                  autoComplete="off"
                  value={status}
                  onChange={(e) => {
                    setStatus(e.target.value);
                  }}
                />
              </div> */}
            </DialogContent>
            <DialogActions>
              <Button
                className="button_formatting"
                onClick={() => setDialogOpen(false)}
              >
                Cancel
              </Button>
              <Button className="button_formatting" onClick={updateProfile}>
                Upload
              </Button>
            </DialogActions>
          </Dialog>

          <Dialog
            open={dialogTwo}
            onClose={hideDialogTwo}
            aria-labelledby="form-dialog-title"
            maxWidth="sm"
            fullWidth="fullWidth"
          >
            <DialogTitle>
              Add Category
              <span className="float-right icon_color"></span>
            </DialogTitle>
            <DialogContent>
              <div className="text_filed_heading">Name</div>
              <div className="mr-2 mt-1">
                <input
                  type="text"
                  className="form-control "
                  autoComplete="off"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>

              <div className="text_filed_heading">Ifsc </div>
              <div className="mr-2 mt-1">
                <input
                  type="text"
                  className="form-control "
                  placeholder=""
                  autoComplete="off"
                  value={code}
                  onChange={(e) => {
                    setCode(e.target.value);
                  }}
                />
              </div>

              <div className="text_filed_heading">Account Number</div>
              <div className="mr-2 mt-1">
                <input
                  type="text"
                  className="form-control "
                  placeholder="Enter Email"
                  autoComplete="off"
                  value={number}
                  onChange={(e) => {
                    setNumber(e.target.value);
                  }}
                />
              </div>
            </DialogContent>
            <DialogActions>
              <Button
                className="button_formatting"
                onClick={() => setDialogTwo(false)}
              >
                Cancel
              </Button>
              <Button className="button_formatting" onClick={updateBankDetails}>
                Upload
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      </div>
      {/* <Loder loading={isloading} /> */}
    </>
  );
}
export default ViewProfile;
