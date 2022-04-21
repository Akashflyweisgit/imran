/** @format */

import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { Card, Grid, Button } from "@material-ui/core";
import axios from "axios";

//pagination
import TablePagination from "@material-ui/core/TablePagination";

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

function ViewPackages({ packages, expandOpen, setExpandOpen, history }) {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [points, setPoints] = useState(null);
  const [price, setPrice] = useState(null);
  const [status, setStatus] = useState("");
  const [id, setPackageId] = useState("");
  const token = localStorage.getItem("token");

  // const showDialog = () => {
  //   setDialogOpen({ dialogOpen: true });
  // };

  const handleClick = (packages) => {
    setDialogOpen({ dialogOpen: true });

    setPoints(packages.points);
    setPrice(packages.price);
    setStatus(packages.status);
    setPackageId(packages.id);
  };

  const hideDialog = () => {
    setDialogOpen(dialogOpen);
  };

  const editPackage = () => {
    try {
      let url = `https://video-agent-flyweis.herokuapp.com/packages/${id}`;

      let temp = {
        price: price,
        points: points,
        status: status,
      };

      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };

      axios
        .put(url, temp, config)
        .then(
          (res) => {
            console.log("data Category:::", res);
            alert("Package Updated Successfully");
          },

          (error) => {
            console.log("data response error:::", error);
            alert(" Unable To Update Package ");
          }
        )
        .catch((e) => {
          console.log("data response error:::", e);
        });
    } catch (error) {}
  };

  const deletePackage = (id) => {
    let url = `https://video-agent-flyweis.herokuapp.com/packages/${id}`;

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    axios.delete(url, config).then((res) => console.log("deleted data", res));
    alert("Successfully Deleted").catch((err) => console.log(err));
  };
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
  const filterData = packages?.filter((event) => {
    return event.name?.toLowerCase().indexOf(titlename?.toLowerCase()) !== -1;
  });

  const classes = useStyles();

  return (
    <>
      <div className="home_padding">
        <div className="content_padding">
          <Grid className="Component_main_grid mb-3">
            <Grid item md={9}>
              <h3 className="mb-2">Packages</h3>
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
                onClick={() => history.goBack()}
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
            </Grid>
          </Grid>

          <Card classname="main_card p-3">
            <TableContainer>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Points</TableCell>
                    <TableCell>Price</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Actions</TableCell>
                    {/* <TableCell>Address</TableCell>
                    <TableCell>Operations</TableCell> */}
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
                    <TableRow key={row.name}>
                      {/* <TableCell component="th" scope="row"></TableCell> */}
                      <TableCell>{row.points}</TableCell>
                      <TableCell>{row.price}</TableCell>
                      <TableCell>{row.status}</TableCell>

                      <TableCell>
                        <button
                          type="button"
                          class="btn btn-info mr-4"
                          onClick={() => handleClick(row)}
                        >
                          <i class="fa fa-edit"></i>
                        </button>
                        <button
                          type="button"
                          class="btn btn-info"
                          onClick={() => deletePackage(row.id)}
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
                count={filterData?.length}
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
              Add Category
              <span className="float-right icon_color"></span>
            </DialogTitle>
            <DialogContent>
              <div className="text_filed_heading">Edit Point</div>
              <div className="mr-2 mt-1">
                <input
                  type="text"
                  className="form-control "
                  autoComplete="off"
                  value={points}
                  onChange={(e) => {
                    setPoints(e.target.value);
                  }}
                />
              </div>

              <div className="text_filed_heading">Edit Price </div>
              <div className="mr-2 mt-1">
                <input
                  type="text"
                  className="form-control "
                  placeholder="Enter Number"
                  autoComplete="off"
                  value={price}
                  onChange={(e) => {
                    setPrice(e.target.value);
                  }}
                />
              </div>

              <div className="text_filed_heading">Edit Status</div>
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
                  editPackage(id);
                  setDialogOpen(false);
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
export default ViewPackages;
