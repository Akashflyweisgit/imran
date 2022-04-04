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
import FormControl from "@mui/material/FormControl";
import { FormLabel, FormHelperText, Input } from "@mui/material";
import { InputLabel } from "@material-ui/core";
import { TextField } from "@material-ui/core";

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

function ViewForm() {
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
              <h3 className="mb-2">Add Images (System)</h3>
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
                {/* <span className="p-2">
                  <i class="fa fa-search"></i>
                </span> */}
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
            <Grid rid className="Component_main_grid">
              <Grid item md={6}>
                <div className="text_filed_heading">Name</div>
                <div className="mr-2 mt-1">
                  <input
                    type="text"
                    className="form-control "
                    placeholder="Enter Name"
                    autoComplete="off"
                    // value={name}
                    // onChange={(e) => {
                    //   setname(e.target.value);
                    // }}
                  />
                </div>
              </Grid>

              <Grid item md={6}>
                <div className="text_filed_heading">Upload</div>
                <div className="mr-2 mt-1">
                  <input
                    type="file"
                    className="form-control "
                    placeholder="Enter Course Name"
                    autoComplete="off"
                    // value={coursename}
                    // onChange={(e) => {
                    //   setcoursename(e.target.value);
                    // }}
                  />
                </div>
              </Grid>
            </Grid>
            <Grid className="Component_main_grid">
              <Grid item md={6}>
                <div className="text_filed_heading">Password</div>
                <div className=" mr-2  mt-1">
                  <input
                    type="email"
                    className="form-control "
                    autoComplete="off"
                    // value={password}
                    // onChange={(e) => {
                    //   setpassword(e.target.value);
                    // }}
                  />
                </div>
              </Grid>

              <Grid item md={6}>
                <div className="text_filed_heading">Email</div>
                <div className=" mr-2  mt-1">
                  <input
                    type="text"
                    className="form-control "
                    autoComplete="off"
                    // value={email}
                    // onChange={(e) => {
                    //   setemail(e.target.value);
                    // }}
                  />
                </div>
              </Grid>
            </Grid>
            <Grid item md={24}>
              <div className="text_filed_heading">Address</div>
              <div className=" mr-2  mt-1">
                <input
                  type="textarea"
                  className="form-control "
                  autoComplete="off"
                  // value={email}
                  // onChange={(e) => {
                  //   setemail(e.target.value);
                  // }}
                />
              </div>
            </Grid>
          </Card>
          <br />
        </div>
      </div>
      {/* <Loder loading={isloading} /> */}
    </>
  );
}
export default ViewForm;