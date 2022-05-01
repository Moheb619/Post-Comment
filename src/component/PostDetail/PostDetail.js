import React from "react";
import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import PreviewIcon from "@mui/icons-material/Preview";
import { Link } from "react-router-dom";
const PostDetail = (props) => {
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));
  const { userId, id, title, body } = props.post;

  return (
    <StyledTableRow key={userId}>
      <StyledTableCell component="th" scope="row">
        {userId}
      </StyledTableCell>
      <StyledTableCell align="right">{id}</StyledTableCell>
      <StyledTableCell align="right">{title}</StyledTableCell>
      <StyledTableCell align="right">{body}</StyledTableCell>
      <StyledTableCell align="right">
        <Button component={Link} to={`/post/${id}/comments`} variant="outlined" startIcon={<PreviewIcon />}>
          Click
        </Button>
      </StyledTableCell>
    </StyledTableRow>
  );
};

export default PostDetail;
