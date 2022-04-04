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

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function ViewProfile() {
  // const [isupdated, setisupdated] = useState(false);
  // const [isloading, setisloading] = useState(false);
  // const [userData, setUserData] = useState([]);

  //edit
  // const [EditDailogOpen, setEditDailogOpen] = useState("");
  // const [EditcategoryName, setEditcategoryName] = useState(false);
  // const [EditId, setEditId] = useState("");
  // const token = localStorage.getItem("token");

  // useEffect(() => {
  //   window.scrollTo(0, 0);

  //   let url = "https://urban-home.herokuapp.com/api/alluser";

  //   axios
  //     .get(url)
  //     .then(
  //       (res) => {
  //         // console.log("data userData:::", res);

  //         setUserData(res.data.getalluser);
  //       },

  //       (error) => {
  //         setisloading(false);
  //         console.log("data response error:::", error);
  //       }
  //     )
  //     .catch((e) => {
  //       setisloading(false);
  //       console.log("data response error:::", e);
  //     });
  // }, [isupdated]);

  // console.log("user data", userData);

  ///delete Category Name
  // const deleteCategory = (row) => {
  //   let id = row._id;
  //   setisloading(false);
  //   let url = getBaseUrl() + `deleteCategory/${id}`;
  //   axios
  //     .delete(url)
  //     .then(
  //       (res) => {
  //         console.log("data response:::", res);
  //         setisupdated(!isupdated);
  //         showNotificationMsz(res.data.msg, "success");
  //         setisloading(false);
  //       },

  //       (error) => {
  //         console.log("data response error:::", error);
  //         showNotificationMsz(error, "danger");
  //         setisloading(false);
  //       }
  //     )
  //     .catch((e) => {
  //       console.log("data response error:::", e);
  //       showNotificationMsz(e, "danger");
  //       setisloading(false);
  //     });
  // };

  ///update Category Name
  // const UpdateBrand = (ID) => {
  //   let id = ID;
  //   setisloading(true);
  //   let url = getBaseUrl() + `updateCategory/${id}`;
  //   let temp = {
  //     categoryName: EditcategoryName,
  //   };

  //   axios
  //     .patch(url, temp)
  //     .then(
  //       (res) => {
  //         console.log("data response:::", res);
  //         setisupdated(!isupdated);
  //         showNotificationMsz(res.data.msg, "success");
  //         setEditDailogOpen(!EditDailogOpen);
  //         setisloading(false);
  //       },

  //       (error) => {
  //         console.log("data response error:::", error);
  //         showNotificationMsz(error, "danger");
  //         setisloading(false);
  //       }
  //     )
  //     .catch((e) => {
  //       console.log("data response error:::", e);
  //       showNotificationMsz(e, "danger");
  //       setisloading(false);
  //     });
  // };

  //paginaton

  // const UpdateCategoryData = (row) => {
  //   setEditDailogOpen(!EditDailogOpen);
  //   setEditcategoryName(row.categoryName);
  //   setEditId(row._id);
  // };

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

  // const [titlename, settitlename] = useState("");
  // const filterData = userData?.filter((event) => {
  //   return event.name?.toLowerCase().indexOf(titlename?.toLowerCase()) !== -1;
  // });

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
                    <TableCell>Image</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Number</TableCell>
                    <TableCell>Address</TableCell>
                    <TableCell>Operations</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      {/* <img
                          src={getBaseUrl() + row.CourseImg}
                          style={{ height: "30px", width: "50px" }}
                        /> */}
                    </TableCell>
                    <TableCell>row.name</TableCell>
                    <TableCell>row.email</TableCell>
                    <TableCell>row.number</TableCell>
                    <TableCell>row.address</TableCell>

                    <TableCell>
                      <button
                        type="button"
                        class="btn btn-info mr-4"
                        // onClick={() => editUser(row)}
                      >
                        <i
                          class="fa fa-edit"
                          // onClick={() => setEditDailogOpen(!editDailogOpen)}
                        ></i>
                      </button>
                      <button
                        type="button"
                        class="btn btn-info"
                        // onClick={() => deleteUser(row)}
                      >
                        <i class="fa fa-trash"></i>
                      </button>
                    </TableCell>
                  </TableRow>
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
export default ViewProfile;
