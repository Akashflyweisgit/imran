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
import { useParams } from "react-router";

//DIALOG BOX
import {
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function ViewProfile({ setExpandOpen, expandOpen, videoAgents }) {
  // for pagination hadler
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [page, setPage] = React.useState(0);
  const [dialogOpen, setDialogOpen] = useState(false);

  const [name, setName] = useState("");
  const [ifscCode, setIfscCode] = useState("");
  const [accNumber, setAccNumber] = useState(null);
  const token = localStorage.getItem("token");
  const [isupdated, setisupdated] = useState(false);
  const { id } = useParams();
  const [profile, setProfile] = useState([]);

  const handleChangePage = (event, newPage) => {
    window.scrollTo(0, 0);
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const classes = useStyles();

  useEffect(() => {
    const auth = {
      headers: { Authorization: `Bearer ${token}` },
    };
    let url = `https://video-agent-flyweis.herokuapp.com/video-agents/${id}/profile`;

    axios
      .get(url, auth)
      .then(
        (res) => {
          console.log("data:::", res);
          const result = [res.data.data.profile];
          setProfile(result);
        },

        (error) => {
          //setisloading(false);
          console.log("data response error:::", error);
        }
      )
      .catch((e) => {
        //setisloading(false);
        console.log("data response error:::", e);
      });
  }, [isupdated]);

  console.log("-------------", profile);

  const handleClick = (profile) => {
    setDialogOpen({ dialogOpen: true });
    setName(profile.name);
    setAccNumber(profile.bank_account.account_number);
    setIfscCode(profile.bank_account.ifsc_code);
  };

  const hideDialog = () => {
    setDialogOpen(dialogOpen);
  };

  const editBankDetails = () => {
    try {
      let url = `https://video-agent-flyweis.herokuapp.com/video-agents/${id}/bank-details`;

      let temp = {
        name: name,
        ifscCode: ifscCode,
        accountNumber: accNumber,
      };

      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };

      axios
        .put(url, temp, config)
        .then(
          (res) => {
            console.log("data Category:::", res);
            alert("Bank Updated Successfully");
          },

          (error) => {
            console.log("data response error:::", error);
            alert(" Unable To Update");
          }
        )
        .catch((e) => {
          console.log("data response error:::", e);
        });
    } catch (error) {}
  };

  return (
    <>
      <div className="home_padding">
        <div className="content_padding">
          <Grid className="Component_main_grid mb-3">
            {/* <Grid item md={9}>
              <h3 className="mb-2">Video Agents</h3>
              <button
                type="button"
                class="btn btn-info mr-4"
                onClick={() => setExpandOpen(!expandOpen)}
              >
                <i class="fa fa-plus"></i> Create
              </button>
              <button
                type="button"
                class="btn btn-info mr-4"
                onClick={() => props.history.goBack()}
              >
                <i class="fa fa-arrow-left"></i>Go Back
              </button>
            </Grid> */}
            {/* <Grid item md={3}>
              <div className="d-flex mt-3">
                <span className="p-2">
                  <i class="fa fa-search"></i>
                </span>
                <span>
                  <input
                    value={titlename}
                    onChange={(e) => {
                      settitlename(e.target.value);
                    }}
                    type="text"
                    class="form-control"
                    placeholder="Search by Name"
                  />
                </span>
              </div>
            </Grid> */}
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
                    {/* <TableCell>Actions</TableCell> */}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {profile?.map((row) => {
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
                          <button
                            type="button"
                            class="btn btn-info mr-4"
                            onClick={() => handleClick(row)}
                          >
                            <i
                              class="fa fa-edit"
                              // onClick={() => setEditDailogOpen(!editDailogOpen)}
                            ></i>
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
              <TablePagination
                true
                rowsPerPageOptions={false}
                component="div"
                // count={filterData?.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
              />
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
              Update Bank Details
              <span className="float-right icon_color"></span>
            </DialogTitle>
            <DialogContent>
              <div className="text_filed_heading">Edit Name</div>
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

              <div className="text_filed_heading">Edit Ifsc </div>
              <div className="mr-2 mt-1">
                <input
                  type="text"
                  className="form-control "
                  placeholder="Enter Number"
                  autoComplete="off"
                  value={ifscCode}
                  onChange={(e) => {
                    setIfscCode(e.target.value);
                  }}
                />
              </div>

              <div className="text_filed_heading">Edit Account Number</div>
              <div className="mr-2 mt-1">
                <input
                  type="text"
                  className="form-control "
                  placeholder="Enter Email"
                  autoComplete="off"
                  value={accNumber}
                  onChange={(e) => {
                    setAccNumber(e.target.value);
                  }}
                />
              </div>
            </DialogContent>
            <DialogActions>
              <Button
                className="button_formatting"
                onClick={() => setDialogOpen(false)}
              >
                Cancel
              </Button>
              <Button
                className="button_formatting"
                onClick={() => {
                  editBankDetails();
                  handleClick();
                }}
              >
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
