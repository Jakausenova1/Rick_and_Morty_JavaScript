import React, { useEffect } from "react";
import {
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Table,
} from "@mui/material";

const TabData = () => {
  return (
    <>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Photo</TableCell>
              <TableCell align="right">Episode</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell component="th" scope="row">
                s
              </TableCell>
              <TableCell align="right">sss</TableCell>
              <TableCell align="right">ss</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default TabData;


  // useEffect(() => {
  //   fetch("http..")
  //     .then((response) => response.json())
  //     .then((data) => console.log(data));
  // }, []);