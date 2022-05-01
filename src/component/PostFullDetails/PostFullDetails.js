import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useParams } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
const PostFullDetails = (props) => {
  const [PostComments, setPostComments] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
      .then((response) => response.json())
      .then((json) => {
        setPostComments(json);
      });
  }, []);
  const gender = ["men", "women"];
  return (
    <Box sx={{ width: "100%" }}>
      <Typography gutterBottom variant="h5" component="div" style={{ fontWeight: "bolder", textAlign: "center", margin: "10px", fontSize: "2rem" }}>
        Post ID : {id}
      </Typography>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {PostComments.map((pc) => (
          <Grid item xs={3}>
            <Item>
              <Card sx={{ maxWidth: 345 }} style={{ backgroundColor: "black" }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    style={{ borderRadius: "50%", height: "70px", width: "70px", margin: "5px auto" }}
                    image={`https://randomuser.me/api/portraits/thumb/${gender[Math.round(Math.random() * 1)]}/${Math.round(Math.random() * 99)}.jpg`}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      <span style={{ fontWeight: "bold", color: "pink", textDecoration: "underline" }}>
                        ID <br />
                      </span>{" "}
                      <span style={{ fontSize: "1rem", color: "white", fontFamily: "Helvetica, Arial, sans-serif", lineHeight: "1.6", letterSpacing: "1px" }}>{pc.id}</span>
                    </Typography>
                    <br />
                    <Typography variant="body2" color="text.secondary">
                      <span style={{ fontWeight: "bold", color: "pink", textDecoration: "underline" }}>
                        Name <br />
                      </span>{" "}
                      <span style={{ fontSize: "1rem", color: "white", fontFamily: "Helvetica, Arial, sans-serif", lineHeight: "1.6", letterSpacing: "1px" }}>{pc.name}</span>
                    </Typography>
                    <br />
                    <Typography variant="body2" color="text.secondary">
                      <span style={{ fontWeight: "bold", color: "pink", textDecoration: "underline" }}>
                        Email <br />
                      </span>{" "}
                      <span style={{ fontSize: "1rem", color: "white", fontFamily: "Helvetica, Arial, sans-serif", lineHeight: "1.6", letterSpacing: "1px" }}>{pc.email}</span>
                    </Typography>
                    <br />
                    <Typography variant="body2" color="text.secondary">
                      <span style={{ fontWeight: "bold", color: "pink", textDecoration: "underline" }}>
                        Body <br />
                      </span>{" "}
                      <span style={{ fontSize: "1rem", color: "white", fontFamily: "Helvetica, Arial, sans-serif", lineHeight: "1.6", letterSpacing: "1px" }}>{pc.body}</span>
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default PostFullDetails;
