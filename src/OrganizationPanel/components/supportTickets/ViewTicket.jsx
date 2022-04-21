/** @format */

import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { Card, Grid, Button } from "@material-ui/core";

//pagination
import TablePagination from "@material-ui/core/TablePagination";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function ViewTicket({ ticket }) {
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
  const filterData = ticket?.filter((event) => {
    return event.name?.toLowerCase().indexOf(titlename?.toLowerCase()) !== -1;
  });

  const classes = useStyles();

  return (
    <>
      <div className="home_padding">
        <div className="content_padding">
          <Grid className="Component_main_grid mb-3">
            <Grid item md={9}>
              <h3 className="mb-2">Tickets</h3>
              {/* <button
                type="button"
                class="btn btn-info mr-4"
                //onClick={() => setExpandOpen(!expandOpen)}
              >
                <i class="fa fa-plus"></i> Create
              </button> */}
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
                {/* <span className="p-2">
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
                </span> */}
              </div>
            </Grid>
          </Grid>

          <Card classname="main_card p-3">
            <TableContainer>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>User</TableCell>
                    <TableCell>Title</TableCell>
                    <TableCell>Description</TableCell>
                    <TableCell>Status</TableCell>
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
                    <TableRow key={row.id}>
                      {/* <TableCell component="th" scope="row"></TableCell> */}
                      <TableCell>{row.user.name}</TableCell>
                      <TableCell>{row.title}</TableCell>
                      <TableCell>{row.description}</TableCell>
                      <TableCell>{row.status}</TableCell>

                      <TableCell>
                        {/* <button
                          type="button"
                          class="btn btn-info mr-4"
                          //onClick={() => handleClick(row)}
                        >
                          <i class="fa fa-edit"></i>
                        </button>
                        <button
                          type="button"
                          class="btn btn-info"
                          //onClick={() => deletePackage(row.id)}
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
                count={filterData?.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
              />
            </TableContainer>
          </Card>

          <br />
        </div>
      </div>
      {/* <Loder loading={isloading} /> */}
    </>
  );
}
export default ViewTicket;
