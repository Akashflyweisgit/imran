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

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function ViewCustomers({ userData }) {
  // for pagination hadler
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [page, setPage] = React.useState(0);
  const token = localStorage.getItem("token");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [id, setId] = useState("");

  const [notifications, setNotifications] = useState([]);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleChangePage = (event, newPage) => {
    window.scrollTo(0, 0);
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const [titlename, settitlename] = useState("");
  const filterData = userData?.filter((event) => {
    return event.name?.toLowerCase().indexOf(titlename?.toLowerCase()) !== -1;
  });

  const classes = useStyles();

  const handleClick = (notifications) => {
    setBody(notifications.body);
    setTitle(notifications.title);
    setId(notifications._id);
    console.log(notifications._id);
  };

  return (
    <>
      <div className="home_padding">
        <div className="content_padding">
          <Grid className="Component_main_grid mb-3">
            <Grid item md={9}>
              <h3 className="mb-2">Customers</h3>
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
                    <TableCell>Email</TableCell>
                    <TableCell>PhoneNumber</TableCell>
                    <TableCell>Actions</TableCell>
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
                      <TableCell>{row.email}</TableCell>
                      <TableCell>{row.phoneNumber}</TableCell>
                      {/* <TableCell>{row.id}</TableCell> */}
                      <TableCell>
                        <Link
                          to={{
                            pathname: `/orgAdmin/notification/${row.id}`,
                            state: notifications,
                          }}
                          type="button"
                          class="btn btn-info mr-4"
                          // onClick={() => {
                          //   fetchNotifications(row.id);
                          // }}
                        >
                          View Notification
                        </Link>
                        {/* <button
                          type="button"
                          class="btn btn-info"
                          // onClick={() => deleteUser(row)}
                        >
                          <i class="fa fa-trash"></i>
                        </button> */}
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
          <Dialog
            open={dialogOpen}
            aria-labelledby="form-dialog-title"
            maxWidth="sm"
            fullWidth="fullWidth"
          >
            <DialogTitle>
              User Notification
              <span className="float-right icon_color"></span>
            </DialogTitle>
            <DialogContent>
              <div className="text_filed_heading">Title</div>
              <div className="mr-2 mt-1">
                <input
                  type="text"
                  className="form-control "
                  placeholder="Enter Name"
                  autoComplete="off"
                  value={title}
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                />
              </div>

              <div className="text_filed_heading">Body </div>
              <div className="mr-2 mt-1">
                <input
                  type="text"
                  className="form-control "
                  placeholder="Enter Number"
                  autoComplete="off"
                  value={body}
                  onChange={(e) => {
                    setBody(e.target.value);
                  }}
                />
              </div>
            </DialogContent>
            <DialogActions>
              <Button
                className="button_formatting"
                //onClick={() => setEditDailogOpen(!editDailogOpen)}
              >
                Cancel
              </Button>

              {/* <Button
                className="button_formatting"
                onClick={() => {
                  fetchNotifications(id);
                  setDialogOpen({ dialogOpen: true });
                }}
              >
                Upload
              </Button> */}
            </DialogActions>
          </Dialog>
        </div>
      </div>
      {/* <Loder loading={isloading} /> */}
    </>
  );
}
export default ViewCustomers;
