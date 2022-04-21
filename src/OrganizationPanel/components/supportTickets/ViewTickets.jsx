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
import { Link } from "react-router-dom";
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

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function ViewTickets({ tickets }) {
  // for pagination hadler
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [page, setPage] = React.useState(0);

  const handleChangePage = (event, newPage) => {
    window.scrollTo(0, 0);
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const [titlename, settitlename] = useState("");
  const filterData = tickets?.filter((event) => {
    return event.name?.toLowerCase().indexOf(titlename?.toLowerCase()) !== -1;
  });

  const classes = useStyles();

  return (
    <>
      <div className="home_padding">
        <div className="content_padding">
          <Grid className="Component_main_grid mb-3">
            <Grid item md={9}>
              <h3 className="mb-2">Support Tickets</h3>
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
                    <TableCell>Name</TableCell>
                    <TableCell>Title</TableCell>
                    <TableCell>Description</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Operations</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {(rowsPerPage > 0
                    ? filterData?.slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                    : filterData
                  )?.map((row) => (
                    <TableRow>
                      <TableCell>{row.user.name}</TableCell>
                      <TableCell>{row.title}</TableCell>
                      <TableCell>{row.description}</TableCell>
                      <TableCell>{row.status}</TableCell>

                      <TableCell>
                        <Link
                          to={`/orgAdmin/supportTickets/view/${row._id}`}
                          type="button"
                          class="btn btn-info mr-4"
                          // onClick={() => editUser(row)}
                        >
                          {/* <i
                            class="fa fa-edit"
                            // onClick={() => setEditDailogOpen(!editDailogOpen)}
                          ></i> */}
                          View Ticket
                        </Link>
                        <button
                          type="button"
                          class="btn btn-info"
                          // onClick={() => deleteUser(row)}
                        >
                          <i class="fa fa-trash"></i>
                        </button>
                      </TableCell>
                    </TableRow>
                  ))}
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
          {/* <Dialog
            open={editDailogOpen}
            onClose={() => setEditDailogOpen(!editDailogOpen)}
            aria-labelledby="form-dialog-title"
            maxWidth="sm"
            fullWidth="fullWidth"
          >
            <DialogTitle>
              Add Category
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
                  value={editName}
                  onChange={(e) => {
                    setEditName(e.target.value);
                  }}
                />
              </div>

              <div className="text_filed_heading">Edit Number </div>
              <div className="mr-2 mt-1">
                <input
                  type="text"
                  className="form-control "
                  placeholder="Enter Number"
                  autoComplete="off"
                  value={editNumber}
                  onChange={(e) => {
                    setEditNumber(e.target.value);
                  }}
                />
              </div>

              <div className="text_filed_heading">Edit Email</div>
              <div className="mr-2 mt-1">
                <input
                  type="text"
                  className="form-control "
                  placeholder="Enter Email"
                  autoComplete="off"
                  value={editEmail}
                  onChange={(e) => {
                    setEditEmail(e.target.value);
                  }}
                />
              </div>

              <div className="text_filed_heading">Edit Address</div>
              <div className="mr-2 mt-1">
                <input
                  type="text"
                  className="form-control "
                  placeholder="Enter Address"
                  autoComplete="off"
                  value={editAddress}
                  onChange={(e) => {
                    setEditAddress(e.target.value);
                  }}
                />
              </div>
            </DialogContent>
            <DialogActions>
              <Button
                className="button_formatting"
                onClick={() => setEditDailogOpen(!editDailogOpen)}
              >
                Cancel
              </Button>
              <Button
                className="button_formatting"
                onClick={() => {
                  updateUser(EditId);
                  handleDialog();
                }}
              >
                Upload
              </Button>
            </DialogActions>
          </Dialog> */}
        </div>
      </div>
      {/* <Loder loading={isloading} /> */}
    </>
  );
}
export default ViewTickets;
