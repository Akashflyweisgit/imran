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

function View({ setExpandOpen, expandOpen, videoAgents }) {
  // for pagination hadler
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [page, setPage] = React.useState(0);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleChangePage = (event, newPage) => {
    window.scrollTo(0, 0);
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // const [titlename, settitlename] = useState("");
  // const filterData = videoAgentsData?.filter((event) => {
  //   return event.name?.toLowerCase().indexOf(titlename?.toLowerCase()) !== -1;
  // });

  const classes = useStyles();

  return (
    <>
      <div className="home_padding">
        <div className="content_padding">
          <Grid className="Component_main_grid mb-3">
            <Grid item md={9}>
              <h3 className="mb-2">Video Agents</h3>
              <button
                type="button"
                class="btn btn-info mr-4"
                onClick={() => setExpandOpen(!expandOpen)}
              >
                <i class="fa fa-plus"></i> Create
              </button>
              {/* <button
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
                <span>
                  {/* <input
                    value={titlename}
                    onChange={(e) => {
                      settitlename(e.target.value);
                    }}
                    type="text"
                    class="form-control"
                    placeholder="Search by Name"
                  /> */}
                </span>
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
                    <TableCell>Email</TableCell>
                    <TableCell>Phone Number</TableCell>
                    <TableCell>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {videoAgents.map((row) => {
                    return (
                      <TableRow>
                        <TableCell>{row.firstName}</TableCell>
                        <TableCell>{row.lastName}</TableCell>
                        <TableCell>{row.email}</TableCell>
                        <TableCell>{row.phoneNumber}</TableCell>

                        <TableCell>
                          <button type="button" class="btn btn-info mr-4">
                            {/* <i
                              class="fa fa-edit"
                              // onClick={() => setEditDailogOpen(!editDailogOpen)}
                            >
                              Edit Bank Details
                            </i> */}
                            Edit Bank Details
                          </button>

                          <Link
                            type="button"
                            class="btn btn-info"
                            to={`/orgAdmin/videoAgentsProfile/${row.id}`}
                          >
                            View Profile
                          </Link>
                          <Link
                            type="button"
                            class="btn btn-info ml-4"
                            to={`/orgAdmin/videoAgentsImages/${row.id}`}
                          >
                            View Images
                          </Link>
                          <button
                            type="button"
                            class="btn btn-info ml-4"
                            // onClick={() => deleteUser(row)}
                          >
                            <i class="fa fa-trash"></i>
                          </button>
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
                //count={filterData?.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
              />
            </TableContainer>
          </Card>

          <br />
          <Dialog
            //open={editDailogOpen}
            //onClose={() => setEditDailogOpen(!editDailogOpen)}
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
                  // value={editName}
                  // onChange={(e) => {
                  //   setEditName(e.target.value);
                  // }}
                />
              </div>

              <div className="text_filed_heading">Edit Ifsc </div>
              <div className="mr-2 mt-1">
                <input
                  type="text"
                  className="form-control "
                  placeholder="Enter IFSC"
                  autoComplete="off"
                  // value={editNumber}
                  // onChange={(e) => {
                  //   setEditNumber(e.target.value);
                  // }}
                />
              </div>

              <div className="text_filed_heading">Edit Account Number</div>
              <div className="mr-2 mt-1">
                <input
                  type="number"
                  className="form-control "
                  placeholder="Enter Account Number"
                  autoComplete="off"
                  // value={editEmail}
                  // onChange={(e) => {
                  //   setEditEmail(e.target.value);
                  // }}
                />
              </div>
            </DialogContent>
            <DialogActions>
              <Button
                className="button_formatting"
                // onClick={() => setEditDailogOpen(!editDailogOpen)}
              >
                Cancel
              </Button>
              <Button
                className="button_formatting"
                // onClick={() => {
                //   updateUser(EditId);
                //   handleDialog();
                // }}
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
export default View;
