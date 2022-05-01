import React, { useEffect, useState } from "react";
import PostDetail from "../PostDetail/PostDetail";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Pagination } from "@mui/material";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const Post = () => {
  const [post, setProduct] = useState([]);
  const [pageCount, setpageCount] = useState(1);
  const [part, setpart] = useState(1);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => {
        setProduct(json.slice((pageCount - 1) * 5, (pageCount - 1) * 5 + 5));
        setpart(Math.floor(json.length / 5.0));
      });
  }, [pageCount]);
  console.log(pageCount);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>User Id</StyledTableCell>
            <StyledTableCell align="center">ID</StyledTableCell>
            <StyledTableCell align="center">Title</StyledTableCell>
            <StyledTableCell align="center">Body</StyledTableCell>
            <StyledTableCell align="center">Full Details</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {post.map((pd) => (
            <PostDetail post={pd}></PostDetail>
          ))}
        </TableBody>
      </Table>
      <Pagination
        count={part}
        color="secondary"
        size="large"
        onChange={(event, value) => setpageCount(value)}
        style={{ display: "flex", alignItems: "center", justifyContent: "center", margin: "20px" }}
      ></Pagination>
    </TableContainer>
  );
};

export default Post;
